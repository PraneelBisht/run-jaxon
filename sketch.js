var path1, path;
var runner1, runner;
function preload(){
  //pre-load images
 runner1.loadAnimation("runner-1.png");
 path1.loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(50,100);
  runner.addImage(runner1);

  path = createSprite(200,200);
  path.addImage(path1);
  path.velocityY = 4;
  path.scale=1.2;
  if (path.y > 400){
    path.y = height/2;
  }
}

function draw() {
  background(0);

}
