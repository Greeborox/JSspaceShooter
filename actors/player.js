SpaceShooter.createPlayer = function(game){
  var player = game.add.sprite(150,300, 'player');
  game.physics.arcade.enable(player);
  player.bullets = game.add.group();
  player.bullets.enableBody = true;
  player.bullets.createMultiple(10, 'bullet');
  player.moveUp = false;
  player.moveDown = false;
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
    if (game.spaceKey.isDown) {
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
    var bullet = this.bullets.getFirstDead();
    if (!bullet) {
      return;
    }
    if(game.currTime - this.lastShot > 250){
      bullet.anchor.setTo(0.5);
      bullet.reset(player.x+player.width, player.y+player.height*0.5);
      bullet.body.velocity.x = 500;
      bullet.checkWorldBounds = true;
      bullet.outOfBoundsKill = true;
      this.lastShot = game.currTime;
    }
  }

  return player;
}
