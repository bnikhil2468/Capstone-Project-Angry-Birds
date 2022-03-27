const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("angry birds bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(740,240,70,70);
    box4 = new Box(880,240,70,70);
    pig = new Pig(810, 220);

    log2 =  new Log(810,180,150, PI/2);

    box5 = new Box(810,160,70,70);
    

    bird = new Bird(200,200);

    
    slingshot = new SlingShot(bird.body,{x:200, y:240});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    
    log1.display();
    
    box3.display();
    box4.display();
    pig.display()
    

   
    

    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}