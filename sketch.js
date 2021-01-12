var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car, car1, car2,car3,carray;
var allplayinfo;
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount == 4){
game.update(1);
gameState = 1;
}
if(gameState == 1){
game.play()


}








}
