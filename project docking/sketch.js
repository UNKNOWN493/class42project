var bg;
var hasDocked = fasle ;
var issimg, socimg , iss, spacecraft

function preload(){
bg = loadImage("Docking-undocking/spacebg.jpg")
spacecraftImage = loadImage("Docking-undocking/spacecraft1.png")
spacecraft2Image = loadImage("Docking-undocking/spacecraft2.png")
spacecraft3Image = loadImage("Docking-undocking/spacecraft1.png")
spacecraft4Image = loadImage("Docking-undocking/spacecraft1.png")
issImage = loadImage("Docking-undocking/iss.png")
}


function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(400, 200, 50, 50);
  spacecraft.scale=0.15;
  spacecraft.addImage(spacecraftImage);
  iss = createSprite(330, 130);
  iss.scale=0.25;
  iss.addImage(issImage);


}

function draw() {
  background(bg);  

  


  drawSprites();
}