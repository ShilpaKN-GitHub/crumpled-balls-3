var ground
var rectObject;
var paper;
var link;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup()
{
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height - 25, width, 10);
	rectObject = new RectClass(width - 200, height - 40, 150, 20);
	paper = new Paper(130, 100);
	link = new Launcher(paper.body, {x: 150, y: 100});
	Engine.run(engine);
}

function draw() 
{
  background(150);
  rectMode(CENTER);

  ground.display();
  rectObject.display();
  link.display();
  paper.display();
}

function mouseDragged()
{
	Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	link.fly();
}