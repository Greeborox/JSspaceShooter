SpaceShooter.createPowerUps = function(game){
  powerUps = game.add.group();
  powerUps.enableBody = true;
  powerUps.createMultiple(5, 'powerUp');

  powerUps.add = function(srcX,srcY) {
    var powerUpChance = game.rnd.integerInRange(1, 25);
    if(powerUpChance != 1){
      return;
    }
    var powerUp = this.getFirstDead();
    if (!powerUp) {
      return;
    }
    var verticalspeed = game.rnd.integerInRange(50, 0);
    var hotizonstalspeed = game.rnd.integerInRange(-50, -100);
    powerUp.anchor.setTo(0.5);
    powerUp.reset(srcX, srcY);
    powerUp.body.velocity.x = hotizonstalspeed;
    powerUp.body.velocity.y = verticalspeed;
    powerUp.checkWorldBounds = true;
    powerUp.outOfBoundsKill = true;
  }

  powerUps.update = function(){
    this.forEachExists(function(item){
      if(item.y >= game.world.height - item.height - 50) {
        item.y = game.world.height - item.height - 55;
        item.body.velocity.y *= -1;
      }
    },this)
  }

  return powerUps;
}
