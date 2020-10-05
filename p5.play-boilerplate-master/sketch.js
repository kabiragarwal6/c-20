var a ,b;

function setup() {
  createCanvas(1600,800);
  a=createSprite(200,200,40,40);
  b=createSprite(300,300,40,40);
  a.shapeColor="red";
  b.shapeColor="red";
  a.debug=true;
  b.debug=true;
}

function draw() {
  background(0);  
  a.x=mouseX;
  a.y=mouseY;
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
    a.shapeColor="green";
    b.shapeColor="green";

  }
  else
  {
    a.shapeColor="red";
  b.shapeColor="red";
  }
  drawSprites();
}