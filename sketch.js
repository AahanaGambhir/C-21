var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(100, 200, 50, 80);
 fixedRect.shapeColor = "green"
 fixedRect.velocityX = 7;
 movingRect = createSprite(600, 200, 80, 50);
 movingRect.shapeColor = "green"
 movingRect.velocityX = -7;

}

function draw() {
  background(255,255,255);  

//movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;

bounce(movingRect, fixedRect);

  drawSprites();
}

function bounce(object1, object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    /*&& movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2*/){
    object1.velocityX  = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if(/*movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    &&*/ object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  } /*else {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }*/
}