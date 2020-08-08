var helicopterIMG,helicopterSprite,packageIMG,packageSprite;
var packageBody,ground;
var boxSprite,boxIMG;
var engine,world;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

function preload(){
 helicopterIMG=loadImage("helicopter.png");
 packageIMG=loadImage("package.png");
 boxIMG=loadImage("box.png");
}

function setup() {
  createCanvas(800,400);

  boxSprite=createSprite(width/2,200,10,10)
  boxSprite.addImage(boxIMG)

  packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)

  engine = Engine.create();
	world = engine.world;
  
  packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




 
