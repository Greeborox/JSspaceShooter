SpaceShooter.createExplosion = function(x,y){
  var explo = game.add.sprite(x, y, 'explosion');
  game.physics.arcade.enable(explo);
  explo.anchor.setTo(.5);
  game.time.events.add(100, function(){explo.destroy()}, this);
  return explo
}
