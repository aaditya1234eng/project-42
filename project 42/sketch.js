var iss,spacecraft,bg,issImg,scImg
var hasDocked=false





function preload (){
bg=loadImage("images/spacebg.jpg")
issImg=loadImage("images/iss.png")
scImg=loadImage("images/spacecraft1.png")
scImg1=loadImage("images/spacecraft2.png")
scImg2=loadImage("images/spacecraft3.png")
scImg3=loadImage("images/spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
  spacecraft=createSprite(330,130)
  spacecraft.addImage(scImg)
  spacecraft.scale=0.15
  iss=createSprite(285,240)
   iss.addImage(issImg)
   iss.scale=0.25
}``

  function draw() {
    background(bg);
    
    spacecraft.addImage(scImg);
    if(!hasDocked){
      spacecraft.x = spacecraft.x + random(-1,1);
      
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(scImg3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(scImg2);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(scImg1);
    }
  }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }
    drawSprites();
  }
  
