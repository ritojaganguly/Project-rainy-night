const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops = 100;


function preload(){
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");
}

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  for(var i=0; i<maxDrops; i++){
    drops.push(new createDrops(random(0,400), random(0,400)));
  }

  umbrella = new Umbrella(200,350)
  
}

function draw(){
    background(0,0,0); 
    Engine.update(engine);
    if(frameCount % 20 == 0){
     thunder = createSprite(Math.round(random(200,400)),Math.round(random(30,50)),20,200)
     rand = Math.round(random(1,4))
     switch(rand){
        case 1 : thunder.addImage(thunder1);
        break 
        case 2 : thunder.addImage(thunder2);
        break 
        case 3 : thunder.addImage(thunder3);
        break 
        case 4 : thunder.addImage(thunder4);
        break 
     }
     thunder.scale = 0.05;
     thunder.lifetime = 5;
   }
    
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    umbrella.display();

    drawSprites();
}   

