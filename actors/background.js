SpaceShooter.createBackground = function(game){
  var sky = game.add.tileSprite(0, 0, 900, 612, 'sky');
  var bg = game.add.tileSprite(0, 0, 900, 612, 'background');

  bg.speed = -1.5;
  sky.speed = -1;

  bg.update = function(){
    this.tilePosition.x += this.speed;
  };

  sky.update = function(){
    this.tilePosition.x += this.speed;
  };

  return bg;
}
