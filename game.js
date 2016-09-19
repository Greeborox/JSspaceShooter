var game = new Phaser.Game(900, 612, Phaser.AUTO, '');

game.state.add('init', SpaceShooter.init);
game.state.add('game', SpaceShooter.main);
game.state.add('welcome', SpaceShooter.welcome);
game.state.add('gameOver', SpaceShooter.gameOver);
game.state.start('init',true,true);
