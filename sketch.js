var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg, redleafImg, orleafImg;
var apple, orangeleaf, redleaf, leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redleafImg= loadImage("redImage.png");
  orleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.X= World.mouseX

  createLeaf();
  redLeaf();
  OrangeLeaf();
  spawnApples();
  drawSprites();
}

function spawnApples() {
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY= 5;
  apple.scale= 0.05;
  apple.lifetime= 60;

}

function redLeaf(){
  redleaf= createSprite(random(50,350),40, 10,10);
  redleaf.addImage(redleafImg);
  redleaf.scale= 0.05;
  redleaf.velocityY= 3;
  redleaf.lifetime= 100;
  }

  function createLeaf(){
    leaf= createSprite(random(50,350),40, 10,10);
    leaf.addImage(leafImg);
    leaf.scale= 0.05;
    leaf.velocityY= 3;
    leaf.lifetime= 100;
    }

    function OrangeLeaf() {
    orangeleaf= createSprite(random(50,350),40, 10,10);
    orangeleaf.addImage(orleafImg);
    orangeleaf.scale= 0.05;
    orangeleaf.velocityY= 3;
    orangeleaf.lifetime= 100;
    }

    var select_sprites= Math.round(random(1,2,3,4));
     
    if(frameCount%80 == 0){
      if(select_sprites==1){
        leaf= createSprite(random(50,350),40, 10,10);
    leaf.addImage(leafImg);
    leaf.scale= 0.05;
    leaf.velocityY= 3;
    leaf.lifetime= 100;

      } 

}
        
      
    