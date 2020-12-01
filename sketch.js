
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var mango,mango2,mango3,mango4;
var stone,tree;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango=new Mango(200,200,30,40);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango.display();
  drawSprites();
 
}



