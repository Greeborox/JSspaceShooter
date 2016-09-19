var SpaceShooter = {};

SpaceShooter.init = {
  preload: function() {
    game.load.image('background', 'GFX/bg.png');
    game.load.image('sky', 'GFX/bgSky.png');
    game.load.image('player', 'GFX/player.png');
    game.load.image('bullet', 'GFX/bullet.png');
    game.load.image('doubleBullet', 'GFX/doubleBullet.png');
    game.load.image('tripleBullet', 'GFX/trippleBullet.png');
    game.load.image('scatterBullet', 'GFX/scatterBullet.png');
    game.load.image('doubleGrow', 'GFX/doubleGrow.png');
    game.load.image('enemyBullet', 'GFX/enemyBullet.png');
    game.load.image('bigAsteroid', 'GFX/bigAsteroid.png');
    game.load.image('smallAsteroid', 'GFX/smallAsteroid.png');
    game.load.image('powerUp', 'GFX/powerUp.png');
    game.load.image('fEnemyShip', 'GFX/fEnemyShip.png');
    game.load.image('enemyShip', 'GFX/enemyShip.png');
    game.load.spritesheet('turret', 'GFX/turret.png',40,70);
    game.load.image('up', 'GFX/up.png');
    game.load.image('down', 'GFX/down.png');
    game.load.image('shoot', 'GFX/shoot.png');
    game.load.image('explosion', 'GFX/explosion.png');
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.renderer.renderSession.roundPixels = true;
    game.forceSingleUpdate = true;
    game.stage.backgroundColor = '#3498db';
    game.cursor = game.input.keyboard.createCursorKeys();
    game.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    if (!game.device.desktop) {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.setMinMax(game.width/3, game.height/3,
      game.width*2, game.height*2);
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      document.body.style.backgroundColor = '#000';
    }
    game.currTime;
    game.state.start('game');
  }
}
