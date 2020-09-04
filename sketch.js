var mrect,frect,mrect2,frect2;

function setup() {
  createCanvas(900,600);
 mrect = createSprite(400, 200, 50, 50);
 frect= createSprite(400, 200, 50, 50)
 mrect2 = createSprite(700, 10, 50, 50);
 mrect2.velocityY=3
 frect2 = createSprite(700, 500, 50, 50)
frect2.velocityY=-3

}

function draw() {
  background(115,25,55);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY
 // console.log(frect.width/2+mrect.width/2)
 console.log(mrect.x-frect.x)
 

 
  if( mytouchingalgorithm(frect,mrect)){
    mrect.shapeColor="blue";
    frect.shapeColor="red";


  }
  else{

    mrect.shapeColor="gray";
    frect.shapeColor="gray";

  }
  if( bounceofalgorithm(frect2,mrect2)){
    mrect2.shapeColor="blue";
    frect2.shapeColor="red";
    mrect2.velocityY=-3;
    frect2.velocityY=3;

  }
  else{

    mrect2.shapeColor="gray";
    frect2.shapeColor="gray";

  }




  





  drawSprites();
}
