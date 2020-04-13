var movingrect, fixedrect;






function setup() {
  createCanvas(800,400);
fixedrect =  createSprite(200, 200, 50, 80);
movingrect = createSprite(400,200,80,30);
movingrect.shapeColor = "violet";
fixedrect.shapeColor = "violet";
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY; 
 if (isTouching(movingrect,fixedrect))
 {
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";
 }
 else
 {
  movingrect.shapeColor = "violet";
  fixedrect.shapeColor = "violet";
 }
  drawSprites();

}


























