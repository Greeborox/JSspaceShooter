SpaceShooter.createSmallAsteroids = function(game, powerUp){
  smallAsteroids = game.add.group();
  smallAsteroids.enableBody = true;
  smallAsteroids.createMultiple(15, 'smallAsteroid');
  smallAsteroids.speed = 50;
  smallAsteroids.powerUps = powerUp;

  smallAsteroids.addSmall = function(astX,astY) {
    var astNum = game.rnd.integerInRange(2, 4);
    for (var i = 0; i < astNum; i++) {
      var asteroid = this.getFirstDead();
      if (!asteroid) {
        return;
      }
      var verticalspeed = game.rnd.integerInRange(-50, 50);
      var hotizonstalspeed = game.rnd.integerInRange(-50, -150);
      asteroid.anchor.setTo(0.5);
      asteroid.reset(astX, astY);
      asteroid.body.velocity.x = hotizonstalspeed;
      asteroid.body.velocity.y = verticalspeed;
      asteroid.powerUps = powerUp;
      asteroid.checkWorldBounds = true;
      asteroid.outOfBoundsKill = true;
      asteroid.scoreValue = 9;
    }
  }

  smallAsteroids.update = function(){
    this.forEachExists(function(item){
      item.angle += 2;
      if(item.y >= game.world.height - item.height - 50) {
        item.y = game.world.height - item.height - 55;
        item.body.velocity.y *= -1;
      }
    },this)
  }

  return smallAsteroids;
}
