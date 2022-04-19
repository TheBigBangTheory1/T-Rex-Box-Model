
// dino - trex
// clouds - top
// birds - 
// obstacles - multiple
// ground
// score & high Score
// gameOver
// restart button
var bird,cloud,obstacle, trex, ground;

function setup() {
  createCanvas(600,250);
  trex = createSprite(80,180, 40,50)
  cloud = createSprite(630,80, 60,30)
  cloud.velocityX = -3
  obstacle = createSprite(650,200, 30,40)
  obstacle.velocityX = -4
  bird = createSprite(760, 120, 50,20)
  bird.velocityX = -2
  ground = createSprite (300,230, 600,10)
}

function draw() 
{
  background("lightblue");
  drawSprites()
  if(keyDown("space")){
    trex.velocityY=-3
  }
  trex.velocityY+=0.7
  trex.collide(ground)
}




