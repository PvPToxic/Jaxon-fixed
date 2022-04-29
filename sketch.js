var bg,backgroundImg, player,playerImg;
var leftB , rightB;

function preload(){
  //pre-load images
  backgroundImg = loadImage("path.png")
  playerImg = loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  bg = createSprite(200,200,400,400)
  bg.addImage(backgroundImg)
  bg.velocityY = 5
  bg.scale = 1.2
  

  player = createSprite(200,350,20,20)
  player.addAnimation("walking",playerImg)
  player.scale = 0.08

  leftB = createSprite(0,0,100,800)
  leftB.visible = false
  rightB = createSprite(410,0,100,800)
  rightB.visible = false
}

function draw() {
  background(0);
  if(bg.y > 400){
    bg.y = height/2
  }

  player.collide(rightB)
  player.collide(leftB)
  //player with the help of mouse in X axis
  player.x=mouseX;
  
  drawSprites()
}
