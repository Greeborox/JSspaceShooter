SpaceShooter.createEnemyShips = function(game, powerUp){
  enemyShips = game.add.group();
  enemyShips.enableBody = true;
  enemyShips.meters = 0;
  enemyShips.createMultiple(3, 'enemyShip');
  enemyShips.lastShip = 0
  enemyShips.shipEvery = 5200;
  enemyShips.bullets = game.add.group();
  enemyShips.bullets.enableBody = true;
  enemyShips.bullets.createMultiple(15, 'enemyBullet');
  enemyShips.bullets.speed = 200;

  enemyShips.spawn = function() {
    var ship = this.getFirstDead();
    if (!ship) {
      return;
    }
    var verticalPos = game.rnd.integerInRange(50, game.world.height - 100);
    ship.reset(game.world.width, verticalPos);
    ship.anchor.setTo(0.5);
    ship.body.velocity.x = -150;
    ship.shootEvery = game.rnd.integerInRange(5000, 8000);
    ship.lastShoot = -500;
    ship.HP = 3;
    ship.scoreValue = 44;
    ship.vulnerable = true;
    ship.powerUps = powerUp;
    ship.hit = function(){
      this.tint = 0xff0000;
      this.vulnerable = false;
      game.time.events.add(500, function(){
        this.vulnerable = true;
        this.tint = 0xFFFFFF;
      }, this);
    }
  }

  enemyShips.shoot = function(location){
    var shot = this.bullets.getFirstDead();
    if (!shot) {
      return;
    }
    shot.anchor.setTo(0.5);
    shot.reset(location.x, location.y);
    shot.body.velocity.x = -this.bullets.speed;
    shot.body.velocity.y = 0;
    shot.checkWorldBounds = true;
    shot.outOfBoundsKill = true;
  }

  enemyShips.update = function(){
    if(game.currTime - this.lastShip > this.shipEvery && this.meters >= 90){
      if(game.rnd.integerInRange(0, 1)){
        this.spawn();
      }
      this.lastShip = game.currTime;
    }
    if(this.meters === 180) {
      this.lastShip = game.currTime;
      this.shipEvery = 1800;
      this.bullets.speed = 300;
    }
    this.forEachExists(function(item){
      if(game.currTime - item.lastShoot > item.shootEvery){
        this.shoot(item)
        item.lastShoot = game.currTime;
      }
      if(item.x <= 750 && item.body.velocity.x != 0) {
        item.body.velocity.x = 0;
      }
      if(item.HP <= 0) {
        item.kill();
        SpaceShooter.increaseScore(item.scoreValue);
        SpaceShooter.createExplosion(item.x,item.y);
        item.powerUps.add(item.x,item.y);
      }
    },this)
  }
  return enemyShips;
}
