var mRect, fRect

function setup() {
  createCanvas(800,400);
  mRect=createSprite(400, 200, 80, 30);
  fRect=createSprite(200 , 200, 30, 80);
  mRect.shapeColor="lightblue"
  fRect.shapeColor="lightblue"
  mRect.velocityX=-2;
  fRect.velocityX=2;
}

function draw() {
  background("yellow");  
  mRect.x=mouseX
  mRect.y=mouseY
  if (isTouching(mRect,fRect)===true){
    mRect.shapeColor="lightgrey"
    fRect.shapeColor="lightgrey"
  }
  else{
    mRect.shapeColor="lightblue"
    fRect.shapeColor="lightblue"
  }
  bounceOff(mRect,fRect)
  drawSprites();
} 

