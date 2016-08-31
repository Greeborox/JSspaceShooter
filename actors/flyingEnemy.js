SpaceShooter.createFlyingEnemyShips = function(game, powerUp){
  fEnemyShips = game.add.group();
  fEnemyShips.enableBody = true;
  fEnemyShips.createMultiple(5, 'fEnemyShip');
  fEnemyShips.lastShip = 0
  fEnemyShips.meters = 0
  fEnemyShips.shipEvery = 3200;
  fEnemyShips.bullets = game.add.group();
  fEnemyShips.bullets.enableBody = true;
  fEnemyShips.bullets.createMultiple(15, 'enemyBullet');

  fEnemyShips.spawn = function() {
    var ship = this.getFirstDead();
    if (!ship) {
      return;
    }
    ship.path = [];
    var verticalPos = game.rnd.integerInRange(50, game.world.height - 100);
    var points = {
      'x': [game.world.width, 608, 512, 384, 256, 128, 32, -64  ],
      'y': [verticalPos,]
    };
    for (var i = 0; i < points.x.length-1; i++) {
      points.y.push(100,500);
    }
    var x = 1 / game.width;
    for (var i = 0; i <= 1; i += x){
      var px = game.math.catmullRomInterpolation(points.x, i);
      var py = game.math.catmullRomInterpolation(points.y, i);
      ship.path.push( { x: px, y: py });
    }
    ship.pi = 0;
    ship.reset(game.world.width, verticalPos);
    ship.anchor.setTo(0.5);
    ship.shootEvery = game.rnd.integerInRange(5000, 8000);
    ship.lastShoot = -500;
    ship.HP = 3;
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

  fEnemyShips.shoot = function(location){
    var shot = this.bullets.getFirstDead();
    if (!shot) {
      return;
    }
    shot.anchor.setTo(0.5);
    shot.reset(location.x, location.y);
    shot.body.velocity.x = -200;
    shot.body.velocity.y = 0;
    shot.checkWorldBounds = true;
    shot.outOfBoundsKill = true;
  }

  fEnemyShips.update = function(){
    if(game.currTime - this.lastShip > this.shipEvery && this.meters >= 30){
      if(game.rnd.integerInRange(0, 1)){
        this.spawn();
      }
      this.lastShip = game.currTime;
    }
    this.forEachExists(function(item){
      if(game.currTime - item.lastShoot > item.shootEvery){
        this.shoot(item)
        item.lastShoot = game.currTime;
      }
      item.x = item.path[item.pi].x;
      item.y = item.path[item.pi].y;
      item.pi++;
      if (item.pi >= item.path.length) {
        item.kill();
      }
    },this)
  }

  return fEnemyShips;
}
