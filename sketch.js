var ball;






function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,50,30)

}

function draw() 
{
  background('purple');
  if(keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x + 1
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-1
  }
  if(keyIsDown(UP_ARROW)){
    ball.y=ball.y-1
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.y=ball.y + 1
  }
  drawSprites()

}




