//Create variables here
var dogImg,dogHappyimg,database,foodS,foodStock;

function preload(){
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappyImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();


  background(46, 139, 87);
  dog = createSprite(250,300,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

foodStock=database.ref('Food');
foodStock.on("value",readStock)
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappyImg)

  }

 drawSprites();

fill("white")
stroke(240,128,128)
textSize(15);
text("Note : Press UP_ARROW key to feed the drago milk",85,50);


}

function writeStock(x) {
  if (x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
      Food: x
    })
}

function readStock(data) {
  foodS = data.val();
  fill("white")
 stroke("green")
 textSize(10);
 text("Food Remaining : "+foodS,200,250);

}



