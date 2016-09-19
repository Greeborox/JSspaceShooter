SpaceShooter.gameOver = {
  create: function() {
    this.background = SpaceShooter.createBackground(game);
    this.gameOver = game.add.sprite(game.world.width*0.5, game.world.height*0.5, 'gameOver');
    this.gameOver.anchor.set(0.5);
    if (game.device.desktop) {
      this.welcomeText = 'press space to continue';
    } else {
      this.welcomeText = 'touch the screen to continue';
    }
    this.startLabel = game.add.text(game.world.width*0.5, game.world.height-80, this.welcomeText,
                                    { font: '25px Arial', fill: '#ffffff' });
    this.startLabel.anchor.set(0.5);
  },
  update: function() {
    if (game.spaceKey.isDown) {
      game.state.start('welcome');
    }
    if (!game.device.desktop) {
      game.input.onDown.add(function(){
        game.state.start('welcome');
      }, this);
    }
  }
}
