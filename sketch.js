var fixedRect, movingRect;
var gameObject1, gameObject2
function setup()
{
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  gameObject1 = createSprite(200,200,50,50);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityX = 4;
  gameObject2 = createSprite(1000,200,30,80);
  gameObject2.shapeColor = "blue";

}

function draw()
{
 background(0);

 console.log(movingRect.x - fixedRect.x)
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;

 if (isTouching(movingRect, gameObject2))
 {
   movingRect.shapeColor = "red";
   gameObject2.shapeColor = "red";
 }
 bounceOff(gameObject1, gameObject2);
  

 
 drawSprites();
}


