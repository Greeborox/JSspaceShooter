SpaceShooter.addMobileInputs = function(game, player){
  var upButton = game.add.sprite(30, 320, 'up');
  upButton.inputEnabled = true;
  upButton.alpha = 0.3;
  upButton.events.onInputOver.add(function(){
    player.moveUp = true;
  }, this);
  upButton.events.onInputOut.add(function(){
    player.moveUp = false;
  }, this);
  upButton.events.onInputDown.add(function(){
    player.moveUp = true;
  }, this);
  upButton.events.onInputUp.add(function(){
    player.moveUp = false;
  }, this);
  var downButton = game.add.sprite(30, 470, 'down');
  downButton.inputEnabled = true;
  downButton.alpha = 0.3;
  downButton.events.onInputOver.add(function(){
    player.moveDown = true;
  }, this);
  downButton.events.onInputOut.add(function(){
    player.moveDown = false;
  }, this);
  downButton.events.onInputDown.add(function(){
    player.moveDown = true;
  }, this);
  downButton.events.onInputUp.add(function(){
    player.moveDown = false;
  }, this);
  var shootButton = game.add.sprite(780, 470, 'shoot');
  shootButton.inputEnabled = true;
  shootButton.alpha = 0.3;
  shootButton.events.onInputOver.add(function(){
    player.shooting = true;
  }, this);
  shootButton.events.onInputOut.add(function(){
    player.shooting = false;
  }, this);
  shootButton.events.onInputDown.add(function(){
    player.shooting = true;
  }, this);
  shootButton.events.onInputUp.add(function(){
    player.shooting = false;
  }, this);
}
SpaceShooter.bigAsteroidHit = function(bullet,asteroid){
  asteroid.smallOnes.addSmall(asteroid.x,asteroid.y);
  asteroid.powerUps.add(asteroid.x,asteroid.y);
  bullet.kill();
  asteroid.kill();
}
SpaceShooter.smallAsteroidHit = function(bullet,asteroid){
  bullet.kill();
  asteroid.kill();
  SpaceShooter.createExplosion(asteroid.x,asteroid.y);
  asteroid.powerUps.add(asteroid.x,asteroid.y);
}
SpaceShooter.turretHit = function(bullet,turret){
  bullet.kill();
  if(turret.vulnerable){
    turret.kill();
    SpaceShooter.createExplosion(turret.x,turret.y);
    turret.powerUps.add(turret.x,turret.y);
  }
}
SpaceShooter.enemyShipHit = function(bullet,enemy){
  bullet.kill();
  if(enemy.vulnerable){
    enemy.HP -= 1;
    enemy.hit();
  }
}
SpaceShooter.fEnemyShipHit = function(bullet,fship){
  bullet.kill();
  fship.kill();
  SpaceShooter.createExplosion(fship.x,fship.y);
  fship.powerUps.add(fship.x,fship.y);
}
SpaceShooter.collectPowerUp = function(player,powerUp){
  var powerUps = ['single','double','triple','scatter','doubleGrow']
  var collected = game.rnd.integerInRange(0, 4);
  player.currWeapon = powerUps[collected];
  powerUp.kill();
}
