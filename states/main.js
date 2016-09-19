SpaceShooter.main = {
  create: function() {
    game.score = 0;
    this.meters = 0;
    this.background = SpaceShooter.createBackground(game);
    this.weapons = SpaceShooter.createWeapons(game);
    this.player = SpaceShooter.createPlayer(game);
    this.player.weapons = this.weapons;
    this.powerUps = SpaceShooter.createPowerUps(game);
    this.smallAsteroids = SpaceShooter.createSmallAsteroids(game, this.powerUps);
    this.bigAsteroids = SpaceShooter.createBigAsteroids(game, this.smallAsteroids, this.powerUps);
    this.turrets = SpaceShooter.createTurrets(game, this.powerUps);
    this.enemyShips = SpaceShooter.createEnemyShips(game, this.powerUps);
    this.fEnemyShips = SpaceShooter.createFlyingEnemyShips(game, this.powerUps);
    game.time.events.loop(Phaser.Timer.SECOND, function(){
      if(this.player.alive){
        this.turrets.meters += 1;
        this.enemyShips.meters += 1;
        this.fEnemyShips.meters += 1;
      }
    }, this)
    if (!game.device.desktop) {
      SpaceShooter.addMobileInputs(game, this.player);
    }
  },
  update: function() {
    game.currTime = this.game.time.now;
    game.physics.arcade.overlap(this.player.weapons[this.player.currWeapon], this.bigAsteroids, SpaceShooter.bigAsteroidHit, null, this);
    game.physics.arcade.overlap(this.player.weapons[this.player.currWeapon], this.smallAsteroids, SpaceShooter.smallAsteroidHit, null, this);
    game.physics.arcade.overlap(this.player.weapons[this.player.currWeapon], this.turrets, SpaceShooter.turretHit, null, this);
    game.physics.arcade.overlap(this.player.weapons[this.player.currWeapon], this.enemyShips, SpaceShooter.enemyShipHit, null, this);
    game.physics.arcade.overlap(this.player.weapons[this.player.currWeapon], this.fEnemyShips, SpaceShooter.fEnemyShipHit, null, this);
    game.physics.arcade.overlap(this.player, this.powerUps, SpaceShooter.collectPowerUp, null, this);
    game.physics.arcade.overlap(this.player, this.bigAsteroids, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.smallAsteroids, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.enemyShips, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.fEnemyShips, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.turrets, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.enemyShips.bullets, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.fEnemyShips.bullets, SpaceShooter.hitPlayer, null, this);
    game.physics.arcade.overlap(this.player, this.turrets.bullets, SpaceShooter.hitPlayer, null, this);
    if(this.player.lives <= 0){
      game.state.start('gameOver');
    }
  }
}
