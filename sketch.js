//Create variables here
var database
var foodS
var foodStock
var happyDog
var dog


function preload()
{
	//load images here
happyDog =loadImage("sprites/dogImg1.png")
dog =loadImage("dogImg.png")


}

function setup() {
	createCanvas(500, 500);
  database =firebase.database();
  dog = createSprite(250,250,50,50);
  dog =addImage("sprites/dogImg.png")
  foodStock =database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foodS = foodS -1;
    writeStock(foodS);
    dog.addImage(happyDog);
  } 

  drawSprites();
  //add styles here
textSize(20);
Fill ("black");
stroke ("black");

text("Note:Press UP_ARROW key tofeed the dog",50,50);
text("Food remaining:"+ foodS ,250,200);
}

function readStock(data){
foodS =data.val();
}

function writeStock(x){
  database.ref('/').update({

    


    food:x
  })
}
