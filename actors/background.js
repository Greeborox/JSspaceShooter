SpaceShooter.createBackground = function(game){
 var bg = game.add.tileSprite(0, 0, 900, 612, 'background');

 bg.speed = -1.5;

 bg.update = function(){
   this.tilePosition.x += this.speed;
 };
}
