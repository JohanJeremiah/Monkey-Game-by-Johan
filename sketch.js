var survivalTime = 0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() 
{
  createCanvas(600,600)

//create monkey
monkey = createSprite(80,315,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1 

//create ground
ground = createSprite(400,350,900,10)
ground.velocityX = -4
console.log(ground.x)
  
//create invisible ground so that monkey wont go out of canvas
invisibleGround = createSprite(200,350,400,10);
invisibleGround.visible = false;
}


function draw() {
background("lightblue")
  
//making monkey jump and giving it gravity
  if(keyDown("space")&& monkey.y >= 150)
  {
    monkey.velocityY = -13
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround)
  
//infinite ground
if (ground.x < 350)
{
ground.x = ground.width/2;
}
  drawSprites() 

  //Survival Time
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/ frameRate())
  text("Survival Time: "+ survivalTime,100,50)

  obstacles()
  bananas()
}

//bananas spawn
function bananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,200,10,40);
  banana.addImage(bananaImage)
  banana.velocityX = -4
  banana.scale = 0.1;
  banana.lifetime = 300;
 
 }
}

//giant rock
function obstacles(){
 if (frameCount % 300 === 0){
  var rock = createSprite(600,305,10,40);
  rock.addImage(obstacleImage)
  rock.velocityX = -4
  rock.scale = 0.24;
  rock.lifetime = 300;
 }
}
