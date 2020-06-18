var ball,img,paddle;
function preload() {
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(700, 700);
   ball = createSprite(50, 350, 10, 10);
   ball.addImage(ballimg);
   ball.velocityX = 9;
   ball.velocityY = 9;
   
   paddle =createSprite(650, 350, 10, 10);
   paddle.addImage(paddleimg);
  
   
  

}

function draw() {
  background('rgb(0,255,0)');
   
   edges = createEdgeSprites();
  
   ball.bounceOff (edges[0]);
   ball.bounceOff (edges[2]);
   ball.bounceOff (edges[3]);

   ball.bounceOff (paddle);
 
  paddle.collide(edges); 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y =paddle.y + 20;
  }
  
  randomVelocity();
  
  drawSprites();
  
}

function randomVelocity()
{
  if (ball.bounceOff(paddle)) {
    ball.velocityY = random( 10, 100);
  }
}

