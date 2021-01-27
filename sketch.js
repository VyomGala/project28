var boy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImage,treeImage;
var rock;
var chain;

function preload()
{
	boyImage=loadImage("images/boy.png");
	treeImage=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1280,400);
	engine = Engine.create();
	world = engine.world;

 rock=new Stone(320,225,40)
chain=new SlingShot(rock.body,{x:320,y:225})
m1 = new mango(900,150,8);
 m2 = new mango(950,120,10);
  m3 = new mango(1000,100,7);
   m4 = new mango(950,60,9);
	m5 = new mango(1050,60,6);
	 m6 = new mango(1100,120,10); 
	 ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	  World.add(world,ground);


	
	//Create the Bodies Here.


	Engine.run(engine);
  
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
	chain.fly();
}

  function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background("blue");
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boyImage,400,300,250,300);
	image(treeImage,1000,180,400,400);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);

	strokeWeight(3);
	stroke(0);
	fill(255);
    text('Let us Pluck the Mangoes !😋', 285, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}


