
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3
var papper
var ground


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	 
	
	
	box1=new Box(400,400,200,20 )
	box2=new Box(510,360,20,100);
	box3=new Box(310,360,20,100);

	papper=new Papper(100,50)
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
	rect(ground.position.x,ground.position.y,800,10)

  box1.display();
  box2.display();
  box3.display();
  papper.display();
  text("keep ur city clean ",400,250)
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(papper.body,papper.body.position,{x:85,y:-85}); 
	}
}


