SpaceShooter.createPlayer = function(game){
  var player = game.add.sprite(150,300, 'player');
  game.physics.arcade.enable(player);
  player.weapons;
  player.weaponList = ['single','double','triple','scatter','doubleGrow'];
  player.currWeapnIndex = 0;
  player.currWeapon = player.weaponList[player.currWeapnIndex];
  player.moveUp = false;
  player.moveDown = false;
  player.shooting = false
  player.lastShot = 0;
  player.lives = 3;
  player.score = 0;
  player.invurnerable;

  game.add.sprite(20,20, 'livesTXT');
  player.livesIcons = [];
  for(var i = 0;i<player.lives;i++){
    player.livesIcons.push(game.add.sprite(20+(30*i),65, 'player'));
    player.livesIcons[i].scale.setTo(0.3);
  }

  player.scoreCounter = {};
  game.add.sprite(610,20, 'scoreTXT');
  player.scoreCounter["digit0"] = game.add.sprite(759, 20, 'score');
  player.scoreCounter["digit1"] = game.add.sprite(786, 20, 'score');
  player.scoreCounter["digit2"] = game.add.sprite(813, 20, 'score');
  player.scoreCounter["digit3"] = game.add.sprite(840, 20, 'score');
  player.scoreCounter["digit4"] = game.add.sprite(867, 20, 'score');

  player.update = function() {
    this.score = game.score;
    if (game.cursor.up.isDown || this.moveUp) {
      this.body.velocity.y = -200;
    }
    else if (game.cursor.down.isDown || this.moveDown) {
      this.body.velocity.y = 200;
    }
    else {
      this.body.velocity.y = 0;
    }
    if (game.spaceKey.isDown || this.shooting) {
      this.shoot();
    }

    if(this.y <= 10){
      this.y = 10;
    }
    if(this.y >= game.world.height - this.height - 50){
      this.y = game.world.height - this.height - 50;
    }
    if(player.score > 99999){
      player.score = 99999;
    }
    var tempNum = player.score;
    var counter = 4;
    while(tempNum > 0){
      var currDigit = "digit"+counter;
      var currFrame = tempNum%10;
      this.scoreCounter[currDigit].frame = tempNum%10;
      tempNum = Math.floor(tempNum/10);
      counter -= 1;
    }
  }

  player.increaseWeaponPower = function(){
    this.currWeapnIndex++;
    this.currWeapnIndex = Math.min(this.currWeapnIndex,this.weaponList.length-1);
    this.currWeapon = this.weaponList[this.currWeapnIndex];
  }

  player.hitPlayer = function(){
    this.livesIcons[this.lives-1].kill();
    this.currWeapnIndex = 0;
    this.currWeapon = this.weaponList[this.currWeapnIndex];
    this.alpha = 0;
    this.invurnerable = true;
    game.time.events.add(200, function(){
      this.invurnerable = false;
      this.alpha = 1;
    }, this);
    this.lives--;
    console.log(this.lives);
  }

  player.shoot = function(){
    this.weapons[this.currWeapon].shoot(this.x,this.y);
  }

  return player;
}
