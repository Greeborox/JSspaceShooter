SpaceShooter.main = {
  create: function() {
    this.background = SpaceShooter.createBackground(game);
    this.player = SpaceShooter.createPlayer(game);
    this.smallAsteroids = SpaceShooter.createSmallAsteroids(game);
    this.bigAsteroids = SpaceShooter.createBigAsteroids(game, this.smallAsteroids);
    this.turrets = SpaceShooter.createTurrets(game);
    this.enemyShips = SpaceShooter.createEnemyShips(game);
    if (!game.device.desktop) {
      SpaceShooter.addMobileInputs(game, this.player);
    }
  },
  update: function() {
    game.currTime = this.game.time.now;
    game.physics.arcade.overlap(this.player.bullets, this.bigAsteroids, SpaceShooter.bigAsteroidHit, null, this);
    game.physics.arcade.overlap(this.player.bullets, this.smallAsteroids, SpaceShooter.smallAsteroidHit, null, this);
    game.physics.arcade.overlap(this.player.bullets, this.turrets, SpaceShooter.turretHit, null, this);
    game.physics.arcade.overlap(this.player.bullets, this.enemyShips, SpaceShooter.enemyShipHit, null, this);
  }
}
