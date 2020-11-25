var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}

function setup() {
  
createCanvas(400,400);  
  
monkey = createSprite (80,315,20,20);  
monkey.addAnimation ("moving", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite (400,400,900,10);
ground.velocityX = -4;  
ground.x = ground.width/2
console.log (ground.x)
  
 bananaGroup = createGroup; 
  
}


function draw() {
background ("white");
  
   if (ground.x <0) {
     ground.x = ground.width/2;
 }
  
  //jump when space key is pressed
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
    
  food ();
  obstacle();
  
  stroke ("white")
  textSize (20);
  fill("white")
  text("Score; "+ score,500,50);
  
  stroke ("black")
  textSize (20);
  fill("black")
  survivalTime = Math.ceil (frameCount/frameRate ())
  text("Survival Time ; "+ survivalTime,500,50);
  
drawSprites ();
}

function food(){  
  
  if(frameCount %80 === 0) {
    banana = createSprite (300,250,5,8)
    banana.velocityX = -6;
    
    // to give random clouds 
    banana.y = Math.round (random(120,200))
    
    // to add image
    banana.addImage (bananaImage)

    banana.lifetime = 100;
    
    banana.scale = 0.1;
    
    bananaGroup.add(banana); 
  }
  
}

function obstacle(){  
  
  if(frameCount %300 === 0) {
    stone = createSprite (400,10,40)
    stone.velocityX = -6;
    
    // to give random clouds 
    stone.y = Math.round (random(120,200))
    
    // to add image
    stone.addImage (obstacleImage)

    stone.lifetime = 100;
    
    stone.scale = 0.2;
    
  
  }
  
}