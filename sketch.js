var ship, shipimage;
var sea, seaimage;
function preload(){
  shipimage = loadAnimation ("ship-1.png" ,"ship-2.png" ,"ship-3.png" ,"ship-4.png");
  seaimage = loadImage("sea.png");
}

function setup(){
  sea = createSprite(200,200,10,10);
  sea.addImage(seaimage);
  sea.scale = 0.3;

  createCanvas(400,400);
  ship = createSprite(100,200,10,10);
  ship.addAnimation("ship", shipimage);
  ship. scale = 0.2;
}

function draw() {
  background("blue");
  drawSprites()
}