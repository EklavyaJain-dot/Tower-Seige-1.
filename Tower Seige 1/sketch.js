const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1600,500);

  ground = new Ground(1,490,1600,20)

  //level 1
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(480,235,30,40);

  //level 2
  box7 = new Box(360,195,30,40);
  box8 = new Box(390,195,30,40);
  box9 = new Box(420,195,30,40);
  box10 = new Box(450,195,30,40);

  //level 3 
  box11 = new Box(390,155,30,40);
  box12 = new Box(420,155,30,40);

  box13 = new Box(405,105,30,40);

  polygon = new Polygon(50,250,30,30);

  slingShot = new SlingShot(polygon.body,(x = 50, y = 250))
}

function draw() {
background("black");

Engine.update(engine);
strokeWeight(4);

Ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();

polygon.display();

slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.body.setPosition(bird.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}