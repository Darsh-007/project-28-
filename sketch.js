
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, Slingshot;
var mango1;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stoneObj=new stone(235,420,30);
	mango1=new mango(1090,80,30);
	mango2 = new mango (1150,180,30);
	mango3 = new mango (1000,70,30);
	mango4 = new mango (950,160,30);
	mango5 = new mango (1050,190,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Slingshot=new slingshot(stoneObj.body,{x:235,y:420});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine)

}

function draw() {

  background("cyan");
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  stoneObj.display();
  Slingshot.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);




}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    Slingshot.fly();
    

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		Slingshot.attach(stoneObj.body);
	}
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}