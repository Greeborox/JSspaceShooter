var SpaceShooter = {};

SpaceShooter.init = {
  preload: function() {
    game.load.image('background', 'GFX/bg.png');
    game.load.image('player', 'GFX/player.png');
    game.load.image('bullet', 'GFX/bullet.png');
    game.load.image('bigAsteroid', 'GFX/bigAsteroid.png');
    game.load.image('smallAsteroid', 'GFX/smallAsteroid.png');
    game.load.image('up', 'GFX/up.png');
    game.load.image('down', 'GFX/down.png');
    game.load.image('shoot', 'GFX/shoot.png');
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
