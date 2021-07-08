//Create variables here
var dog, happyDog;
var database;
var foods, foodStock;
var dogImg, dogImg1;
function preload()
{
	//load images here
  dogImg1 = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
database = firebase.database();

 dog = createSprite(300, 300);
 dog.addImage("dog", dogImg1);
 dog.scale = 0.2;
 foodStock = database.ref('Food');
 foodStock.on("value", readStock);



}
function readStock(data){
foods = data.val();

}
function writeStock(x){
if(x<=0){
x = 0
}
else{
x=x-1
}
database.ref('/').update({
  Food:x
})
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
writeStock(foods);
dog.addImage("dog", dogImg);

}
fill("black");
textSize(15);
text("Note: Press UP_ARROW Key to Feed Drago Milk!",100, 100);

  drawSprites();
  //add styles here

}



