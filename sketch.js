const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  
  createCanvas(1200,400);
 
  
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    fill("blue");                                                             
    box1 = new Rect(700,300,70,70);
    box2 = new Rect(900,300,70,70);
    ground = new Ground(600,50,1200,20);
}

function draw() {
  background(167,65,176);                              
  Engine.update(engine);
  box1.display;
  box2.display;
  ground.display;

  drawSprites();

]