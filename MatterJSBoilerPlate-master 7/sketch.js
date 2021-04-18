
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Ground = new ground (600,height, 1200, 20)
	paper = new Paper (100,100,10,10)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Ground.display()
  paper.display()
  
  drawSprites();
 
}

function keyPressed () {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body.position,{x:85,y:85})
	}
}

