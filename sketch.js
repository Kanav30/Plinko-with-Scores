  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "play";
 

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
 text("Score : " +score,20,30);
 textSize(30);
 //100 points
 text("100",15,540);
 text("100",95,540);
 text("100",175,540);
//200 points
 text("200",255,540);
 text("200",335,540);
 text("200",415,540);
 //500
 text("500",495,540);
 text("500",575,540);
 text("500",655,540);
 //1000
 text("1000",730,540);
 
   Engine.update(engine);
 
  ground.display();
  if(gameState === "play"){
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

//displaying the particles and giving them points according to which division they fall in
    if(particle!=null)
    {
    particle.display();
        
    if (particle.body.position.y>760)
    {
    if (particle.body.position.x < 242) 
    {
    score=score+100;      
    particle=null;
    if ( count>= 5) gameState ="end";                          
    }
  
    else if (particle.body.position.x < 452 && particle.body.position.x > 252 ) 
              {
    score = score + 200;
    particle=null;
    if ( count>= 5) gameState ="end";
    }
    
    else if (particle.body.position.x < 722 && particle.body.position.x > 492 )
    {
    score = score + 500;
    particle=null;
    if ( count>= 5)  gameState ="end";
     } 
    
     else if (particle.body.position.x < 900 && particle.body.position.x > 732 )
     {
     score = score + 1000;
     particle=null;
     if ( count>= 5)  gameState ="end";
     }       
    } 
   }

      
    }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
    
     //ending the game
     end(); 
     
   }
}

function mousePressed(){
  if (gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10);
    
  }
}

function end(){
if(gameState === "end"){
  textSize(50);
  fill("yellow");
  text("GAME OVER",310,320);
  }
}

