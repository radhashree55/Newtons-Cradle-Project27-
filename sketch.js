const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  

  roof = new Roof (480,80,400,40);
  
	bob1 =  new Bob (375,400,50); 
	bob2 =  new Bob (425,400,50);
	bob3 =  new Bob (475,400,50);
	bob4 =  new Bob (525,400,50);
  bob5 =  new Bob (575,400,50); 
  
  rope1 = new Rope (bob1.body,roof.body,-100,20);
  rope2 = new Rope (bob2.body,roof.body,-50,20);
  rope3 = new Rope (bob3.body,roof.body,0,20);
  rope4 = new Rope (bob4.body,roof.body,50,20);
  rope5 = new Rope (bob5.body,roof.body,100,20);
}
function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed() {
  if (keyCode==UP_ARROW) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.140,y:-0.140});
  }
}