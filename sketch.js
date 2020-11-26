var canvas, backgroundImage, database, form, player, game, playerCount;
var car1, car2, car3, car4, cars;
var gameState = 0;
var allPlayers;
var distance = 0;
function setup(){
    canvas = createCanvas(displayWidth/1.5,displayHeight/1.5);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }
}

