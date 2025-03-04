var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(360,650,150,20);
	box1.shapeColor=color("red");

	box2=createSprite(280,560,20,200);
	box2.shapeColor=color("red");

	box3=createSprite(430,560,20,200);
	box3.shapeColor=color("red");




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	 Matter.Body.setStatic(packageBody,false)
	}
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x=helicopterSprite.x-20;
		Matter.Body.translate(packageBody,{x:-20, y:0});
		
	}

	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x=helicopterSprite.x+20;
		Matter.Body.translate(packageBody,{x:20, y:0});
		
	}
}




