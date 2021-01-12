class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car = createSprite(100,200,30,30);

    car1 = createSprite(250,200,30,30);

    car2 = createSprite(400,200,30,30);

    car3 = createSprite(550,200,30,30);

    carray = [car,ca1,car2,car3];
  }
  play(){
text("game started", 200,50);
Player.getplayerInfo();
var index = 0;
var x = 0, y = 0;
for(var plr in allplayinfo){
  index = index + 1;
  x = x + 150;
  y = displayHeight - allplayinfo[plr].distance 
  carray[index - 1].x = x;
  carray[index - 1].y = y;
}
drawSprites();
  }
}
