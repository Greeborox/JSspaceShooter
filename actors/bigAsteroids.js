SpaceShooter.createBigAsteroids = function(game, small, powerUp){
  bigAsteroids = game.add.group();
  bigAsteroids.enableBody = true;
  bigAsteroids.createMultiple(10, 'bigAsteroid');
  bigAsteroids.speed = 50;
  bigAsteroids.lastAsteroid = -200;
  bigAsteroids.asteroidsEvery = 2200;

  bigAsteroids.addAsteroid = function() {
    var asteroid = this.getFirstDead();
    if (!asteroid) {
      return;
    }
    var verticalPos = game.rnd.integerInRange(50, game.world.height - 100);
    asteroid.turnDirection = game.rnd.integerInRange(0, 1);
    asteroid.anchor.setTo(0.5);
    asteroid.reset(game.world.width, verticalPos);
    asteroid.body.velocity.x = -100;
    asteroid.smallOnes = small;
    asteroid.checkWorldBounds = true;
    asteroid.outOfBoundsKill = true;
    asteroid.powerUps = powerUp;
  }

  bigAsteroids.update = function(){
    if(game.currTime - this.lastAsteroid > this.asteroidsEvery){
      this.addAsteroid();
      this.lastAsteroid = game.currTime;
    }
    this.forEachExists(function(item){
      if(item.turnDirection){
        item.angle += 1;
      } else {
        item.angle -= 1;
      }
    },this)
  }

  return bigAsteroids;
}
