class Player {
  constructor(){
this.playerIndex = null;
this.playerName = null;
this.playerDistance = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.playerIndex;
    database.ref(playerIndex).set({
      name:this.playerName,
      distance:this.playerDistance
    });
    



    
  }

 static getplayerInfo(){

var playerInfoRef = database.ref('players');
playerInfoRef.on("value",function(data){

  allplayinfo = data.val();


})





  }
}
