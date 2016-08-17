SpaceShooter.main = {
  create: function() {
    this.background = SpaceShooter.createBackground(game);
    this.weapons = SpaceShooter.createWeapons(game);
    this.player = SpaceShooter.createPlayer(game);
    this.player.weapons = this.weapons;
    this.powerUps = SpaceShooter.createPowerUps(game);
    this.smallAsteroids = SpaceShooter.createSmallAsteroids(game, this.powerUps);
    this.bigAsteroids = SpaceShooter.createBigAsteroids(game, this.smallAsteroids, this.powerUps);
    this.turrets = SpaceShooter.createTurrets(game, this.powerUps);
    this.enemyShips = SpaceShooter.createEnemyShips(game, this.powerUps);
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
    game.physics.arcade.overlap(this.player, this.powerUps, SpaceShooter.collectPowerUp, null, this);
  }
}
