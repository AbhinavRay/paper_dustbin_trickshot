const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin

function preload(){
	dustbinImg = loadImage("images/dustbin.png");
	paperImg = loadImage("images/paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	boxPart1 = createSprite(650, height-53,115,20);
	boxPart1.shapeColor = color("white");
	//dustbin.addImage(dustbinImg)
	boxPart1.scale = 1.35
	boxPart1.visible = false

	dustbin = createSprite(650, height-145,155,190)
	dustbin.addImage(dustbinImg)

	ball = createSprite(width/10, height-60,20,20);
	ball.shapeColor = color("Purple");
	ball.addImage(paperImg)
	ball.scale = 0.3

	boxPart2 = createSprite(558, height-135,30,190);
	boxPart2.shapeColor = color("white");
	boxPart2.visible = false

	boxPart3 = createSprite(742, height-135,30,190);
	boxPart3.shapeColor = color("white");
	boxPart3.visible = false

	Engine.run(engine);

	ball.body = Bodies.rectangle(width/10, height-50,20,20,{isStatic: false,restitution: 0.3,friction: 0.5,density: 1.2})
	World.add(world,ball.body)

	ground = Bodies.rectangle(width/2, height-35, width,10,{isStatic:true})
	World.add(world,ground)

	dustbin = Bodies.rectangle(650, height-45,175,10, {isStatic:true} );
	World.add(world, dustbin);
	 
	boxPart2 = Bodies.rectangle(650, height-45,175,10, {isStatic:true} );
	World.add(world, boxPart2);

	boxPart3 = Bodies.rectangle(650, height-45,175,10, {isStatic:true} );
 	World.add(world, boxPart3);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.body.position.x = ball.x
  drawSprites();
  //keyPressed();
  ball.velocityY = 10
  if(keyDown(UP_ARROW)){
		ball.velocityX = 45
		ball.velocityY = -45
	}

	if(isTouching(ball,dustbin)){
		ball.addImage(dustbinImg)
		dustbin.addImage(paperImg)
		ball.velocityX = 0
		ball.velocityY = 0
		ball.isStatic = true
	}
}

function isTouching(object1,object2){
    if(object1.x - object2.x <= object2.width/2 + object1.width/2 
      && object2.x - object1.x <= object2.width/2 + object1.width/2 
      && object1.y - object2.y <= object2.height/2 + object1.height/2
	  && object2.y - object1.y <= object2.height/2 + object1.height/2){}
	}