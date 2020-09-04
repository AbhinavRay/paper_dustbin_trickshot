const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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

	boxPart1 = createSprite(647, height-135,175,10);
	boxPart1.shapeColor = color("white");
	boxPart1.addImage(dustbinImg)
	boxPart1.scale = 0.55

	ball = createSprite(width/10, height-60,20,20);
	ball.shapeColor = color("Purple");
	ball.addImage(paperImg)
	ball.scale = 0.3

	boxPart2 = createSprite(558, height-65,10,50);
	boxPart2.shapeColor = color("white");
	boxPart2.visible = false

	boxPart3 = createSprite(742, height-65,10,50);
	boxPart3.shapeColor = color("white");
	boxPart3.visible = false

	Engine.run(engine);

	ball.body = Bodies.rectangle(width/10, height-50,20,20,{isStatic: false,restitution: 0.3,friction: 0.5,density: 1.2})

	boxPart = Bodies.rectangle(650, height-45,175,10, {isStatic:true} );
 	World.add(world, boxPart);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.x=ball.body.position.x
  drawSprites();
  keyPressed();
  if(keyCode === UP_ARROW){
	  matter.Body.applyForce(ball.body,)
  }
}

function keyPressed(){
	if(keyPressed(upArrow)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}