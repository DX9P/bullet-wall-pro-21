var wall,thickness;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
   weight = random(30,52);
   thickness = random(22,83);


   
  wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color("yellow")

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor  = color("blue")
}









function draw() {
  background("black");  
//console.log(speed);




  if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
 if (damage < 10){
  wall.shapeColor = color("green");

 }  
 else{
  wall.shapeColor = color("red");
 }


 } 




  
  drawSprites();
} 

function hasCollided(lbullet,lwall){
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x ;

if(bulletRightEdge>=wallLeftEdge){
  return true;

}
 else  {
  return false;
}


  }


