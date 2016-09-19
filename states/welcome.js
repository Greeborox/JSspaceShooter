SpaceShooter.welcome = {
  create: function() {
    this.background = SpaceShooter.createBackground(game);
    this.splash = game.add.sprite(game.world.width*0.5, game.world.height*0.5, 'splash');
    this.splash.anchor.set(0.5);
    if (game.device.desktop) {
      this.welcomeText = 'press space to start';
    } else {
      this.welcomeText = 'touch the screen to start';
    }
    this.startLabel = game.add.text(game.world.width*0.5, game.world.height-80, this.welcomeText,
                                    { font: '25px Arial', fill: '#ffffff' });
    this.startLabel.anchor.set(0.5);
  },
  update: function() {
    if (game.spaceKey.isDown) {
      game.state.start('game');
    }
    if (!game.device.desktop) {
      game.input.onDown.add(function(){
        game.state.start('game');
      }, this);
    }
  }
}
