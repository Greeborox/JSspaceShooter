SpaceShooter.createWeapons = function(game){
  var weapons = {};
  weapons.single = game.add.group();
  weapons.single.enableBody = true;
  weapons.single.createMultiple(10, 'bullet');
  weapons.single.nextFire = 0;
  weapons.single.bulletSpeed = 500;
  weapons.single.fireRate = 350;
  weapons.single.shoot = function(srcx,srcy){
    var bullet = this.getFirstDead();
    if (!bullet) {
      return;
    }
    if(game.currTime > this.nextFire){
      bullet.anchor.setTo(0.5);
      bullet.reset(srcx+100, srcy+25);
      bullet.body.velocity.x = this.bulletSpeed;
      bullet.checkWorldBounds = true;
      bullet.outOfBoundsKill = true;
      this.nextFire = game.currTime + this.fireRate;
    }
  }

  weapons.double = game.add.group();
  weapons.double.enableBody = true;
  weapons.double.createMultiple(20, 'doubleBullet');
  weapons.double.nextFire = 0;
  weapons.double.bulletSpeed = 500;
  weapons.double.fireRate = 250;
  weapons.double.shoot = function(srcx,srcy){
    if(game.currTime > this.nextFire){
      for (var i = 0; i < 2; i++) {
        var bullet = this.getFirstDead();
        if (!bullet) {
          return;
        }
        bullet.anchor.setTo(0.5);
        var verticalPos = i==0? 10: 50;
        bullet.reset(srcx+100, srcy + verticalPos);
        bullet.body.velocity.x = this.bulletSpeed;
        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;
      }
      this.nextFire = game.currTime + this.fireRate;
    }
  }

  weapons.triple = game.add.group();
  weapons.triple.enableBody = true;
  weapons.triple.createMultiple(20, 'tripleBullet');
  weapons.triple.nextFire = 0;
  weapons.triple.bulletSpeed = 500;
  weapons.triple.fireRate = 300;
  weapons.triple.shoot = function(srcx,srcy){
    if(game.currTime > this.nextFire){
      for (var i = 0; i < 3; i++) {
        var bullet = this.getFirstDead();
        if (!bullet) {
          return;
        }
        var vertSpeed;
        switch(i) {
          case 0:
            vertSpeed = 100
            break;
          case 1:
            vertSpeed = -100
            break;
          case 2:
            vertSpeed = 0
            break;
        }
        bullet.anchor.setTo(0.5);
        bullet.reset(srcx+100, srcy+25);
        bullet.body.velocity.x = this.bulletSpeed;
        bullet.body.velocity.y = vertSpeed;
        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;
        this.nextFire = game.currTime + this.fireRate;
      }
      this.nextFire = game.currTime + this.fireRate;
    }
  }

  weapons.scatter = game.add.group();
  weapons.scatter.enableBody = true;
  weapons.scatter.createMultiple(30, 'scatterBullet');
  weapons.scatter.nextFire = 0;
  weapons.scatter.bulletSpeed = 500;
  weapons.scatter.fireRate = 100;
  weapons.scatter.shoot = function(srcx,srcy){
    var bullet = this.getFirstDead();
    if (!bullet) {
      return;
    }
    if(game.currTime > this.nextFire){
      var randomPos = this.game.rnd.between(-25, 25)
      bullet.anchor.setTo(0.5);
      bullet.reset(srcx+100, srcy+30+randomPos);
      bullet.body.velocity.x = this.bulletSpeed;
      bullet.checkWorldBounds = true;
      bullet.outOfBoundsKill = true;
      this.nextFire = game.currTime + this.fireRate;
    }
  }

  weapons.doubleGrow = game.add.group();
  weapons.doubleGrow.enableBody = true;
  weapons.doubleGrow.createMultiple(20, 'doubleGrow');
  weapons.doubleGrow.nextFire = 0;
  weapons.doubleGrow.bulletSpeed = 500;
  weapons.doubleGrow.fireRate = 250;
  weapons.doubleGrow.shoot = function(srcx,srcy){
    if(game.currTime > this.nextFire){
      for (var i = 0; i < 2; i++) {
        var bullet = this.getFirstDead();
        if (!bullet) {
          return;
        }
        bullet.scale.x = 1;
        bullet.scale.y = 1;
        bullet.anchor.setTo(0.5);
        var verticalPos = i==0? 10: 50;
        bullet.reset(srcx+100, srcy + verticalPos);
        bullet.body.velocity.x = this.bulletSpeed;
        bullet.checkWorldBounds = true;
        bullet.outOfBoundsKill = true;
        bullet.scaleSpeed = 0.05;
        bullet.update = function(){
          this.scale.x += this.scaleSpeed;
          this.scale.y += this.scaleSpeed;
        }
        this.nextFire = game.currTime + this.fireRate;
      }
      this.nextFire = game.currTime + this.fireRate;
    }
  }

  return weapons
}
