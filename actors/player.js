SpaceShooter.createPlayer = function(game){
  var player = game.add.sprite(150,300, 'player');
  game.physics.arcade.enable(player);
  player.weapons;
  player.currWeapon = 'single';
  player.moveUp = false;
  player.moveDown = false;
  player.shooting = false
  player.lastShot = 0;

  player.update = function() {
    if (game.cursor.up.isDown || this.moveUp) {
      this.body.velocity.y = -200;
    }
    else if (game.cursor.down.isDown || this.moveDown) {
      this.body.velocity.y = 200;
    }
    else {
      this.body.velocity.y = 0;
    }
    if (game.spaceKey.isDown || this.shooting) {
      this.shoot();
    }

    if(this.y <= 10){
      this.y = 10;
    }
    if(this.y >= game.world.height - this.height - 50){
      this.y = game.world.height - this.height - 50;
    }
  }

  player.shoot = function(){
    this.weapons[this.currWeapon].shoot(this.x,this.y);
  }

  return player;
}
