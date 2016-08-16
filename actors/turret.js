SpaceShooter.createTurrets = function(game){
  turrets = game.add.group();
  turrets.enableBody = true;
  turrets.createMultiple(5, 'turret');
  turrets.lastTurret = 0
  turrets.turretsEvery = 8200;
  turrets.bullets = game.add.group();
  turrets.bullets.enableBody = true;
  turrets.bullets.createMultiple(15, 'enemyBullet');

  turrets.spawn = function(astX,astY) {
    var turret = this.getFirstDead();
    turret.frame = 0;
    if (!turret) {
      return;
    }
    turret.reset(game.world.width, game.world.height-90);
    turret.body.velocity.x = -90;
    turret.shootEvery = game.rnd.integerInRange(5000, 8000);
    turret.lastShoot = -500;
    turret.vulnerable = false;
    turret.checkWorldBounds = true;
    turret.outOfBoundsKill = true;
  }

  turrets.shoot = function(location){
    console.log("shooting at",location.x,location.y);
    var astNum = game.rnd.integerInRange(2, 4);
    for (var i = 0; i < astNum; i++) {
      var shot = this.bullets.getFirstDead();
      if (!shot) {
        return;
      }
      var verticalspeed = game.rnd.integerInRange(-80, -180);
      var hotizonstalspeed = game.rnd.integerInRange(-150, 150);
      shot.anchor.setTo(0.5);
      shot.reset(location.x, location.y);
      shot.body.velocity.x = hotizonstalspeed;
      shot.body.velocity.y = verticalspeed;
      shot.checkWorldBounds = true;
      shot.outOfBoundsKill = true;
    }
  }

  turrets.update = function(){
    if(game.currTime - this.lastTurret > this.turretsEvery){
      if(game.rnd.integerInRange(0, 1)){
        this.spawn();
        console.log("spawning");
      } else {
        console.log("not spawning");
      }
      this.lastTurret = game.currTime;
    }
    this.forEachExists(function(item){
      if(game.currTime - item.lastShoot > item.shootEvery){
        this.shoot(item)
        item.vulnerable = true;
        item.frame = 1;
        game.time.events.add(2000, function(){
          this.vulnerable = false;
          this.frame = 0;
        }, item);
        item.lastShoot = game.currTime;
      }
    },this)
  }

  return turrets;
}
