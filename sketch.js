const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1, base2;
var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10;
var Block11,Block12,Block13,Block14,Block15,Block16,Block17,Block18,Block19,Block20;
var Block21,Block22,Block23,Block24,Block25,Block26,Block27,Block28;

var shooter;
var sling;
var Score;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
	world = engine.world;

  base1 = new Ground(500,500,250,10);
  base2 = new Ground(800,300,250,10);

  //level 1 
  Block1 = new Block(400,450,30,30);
  Block2 = new Block(430,450,30,30);
  Block3 = new Block(460,450,30,30);
  Block4 = new Block(490,450,30,30);
  Block5 = new Block(520,450,30,30);
  Block6 = new Block(550,450,30,30);
  Block7 = new Block(580,450,30,30);

  Block8 = new Block(430,480,30,30);
  Block9 = new Block(460,480,30,30);
  Block10 = new Block(490,480,30,30);
  Block11 = new Block(520,480,30,30);
  Block12 = new Block(550,480,30,30);

  Block13 = new Block(460,450,30,30);
  Block14 = new Block(490,450,30,30);
  Block15 = new Block(520,450,30,30);
  Block16 = new Block(490,420,30,30);

  //level 2
  Block17 = new Block(700,250,30,30);
  Block18 = new Block(730,250,30,30);
  Block19 = new Block(760,250,30,30);
  Block20 = new Block(790,250,30,30);
  Block21 = new Block(820,250,30,30);

  Block22 = new Block(730,220,30,30);
  Block23 = new Block(760,220,30,30);
  Block24 = new Block(790,220,30,30);
  Block25 = new Block(760,90,30,30);
  Block26 = new Block(820,90,30,30);
  Block27 = new Block(790,100,30,30);
  Block28 = new Block(820,140,30,30);
  Block29 = new Block(850,140,30,30);
  Block30 = new Block(880,140,30,30);
  Block31 = new Block(850,100,30,30);
  Block32 = new Block(790,200,30,30);

  shooter = new Shooter(200,100,50);

  sling = new Shot(shooter.body, {x:100, y:400});
  Engine.run(engine);
 
}

function draw() {
  background(0);
  
  Engine.update(engine);

   base1.display();
  base2.display();
  
  //level 1
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();

  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();

  Block13.display();
  Block14.display();
  Block15.display();
  Block16.display();

  //level 2
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();
  Block21.display();

  Block22.display();
  Block23.display();
  Block24.display();
  Block25.display();
  Block26.display();
  Block27.display();
  Block28.display();
  Block29.display();
  Block30.display();
  Block31.display();
  Block32.display();

  shooter.display();
  sling.display();

  fill("white");
  textSize(28);
  text("Score: "+Score,750,40);

}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(shooter.body,{x:100,y:400})
		sling.attach(shooter.body);
	}
}

