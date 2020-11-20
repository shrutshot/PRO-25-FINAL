
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var r1,r2,r3;
var ball;
var ground;


function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.`
	
  r2=new dust(450 ,350 , 150 , 25);
  r1= new Box(460, 580, 20,200);
  r3= new Box(581,580,20,200);
  
  ;

	ball=new paper(100,200)

	ground = new Ground(680 ,680, 1600 , 10);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  
  drawSprites();
  
  
  r3.display();
  r1.display();
  r2.display();
  
  ball.display();
  ground.display();
  

}

function keyPressed(){
 
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:-700});
   
  }

  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-500,y:-500});
   
  }
}



