var bgimg,bg,redimg,temparrow,red,greenimg,green,blueimg,blue,pink,pinkimg,balloon, score;
var redG,blueG,greenG,pinkG,arrowG;


    function preload(){
     //load your images here 
          bgimg=loadImage("background0.png");
          redimg=loadImage("red_balloon0.png");
          pinkimg=loadImage("pink_balloon0.png");
          greenimg=loadImage("green_balloon0.png");
          blueimg=loadImage("blue_balloon0.png");
          arrowimg=loadImage("arrow0.png");
          bowimg=loadImage("bow0.png")
      greenG=new Group();
       arrowG=new Group();
      blueG=new Group();
      pinkG=new Group();
      redG= new Group();
    }

    function setup() {
      createCanvas(600, 600);
      score=0
      //background set
      bg=createSprite(10,10,600,600)
      bg.addImage("background",bgimg);
      bg.scale=3
      
//       //creating balloons - red
//       for(var i=50;i<500;i=i+70){
//         red=createSprite(20,i,600,600);
//         red.addImage("background",redimg);
//         red.scale=0.1
//       }
//       //creating balloons - green
//       for(var i=150;i<350;i=i+70){
//         green=createSprite(150,i,600,600);
//         green.addImage("background",greenimg);
//         green.scale=0.1
//       }
      
//       //creating balloons - blue
//       for(var i=100;i<400;i=i+70){
//         blue=createSprite(100,i,600,600);
//         blue.addImage("background",blueimg);
//         blue.scale=0.1
//       }
      
//       //creating pink balloons
//       for(var i=200;i<250;i=i+70){
//         pink=createSprite(190,i,600,600);
//         pink.addImage("background",pinkimg);
//      }

    bow=createSprite(550,200,600,600);
    bow.addImage("background",bowimg);
    bow.scale=1

    }

    function draw() {
        drawSprites();
      text("Score "+score,480,50)
        bow.y=mouseY;
      colorBall=Math.round(random(0,4))
        if(frameCount%60==0){
        if( colorBall==1){
          redBall();
        }else if( colorBall==2){
          blueBall();
        }else if( colorBall==3){
          greenBall()
        }else if( colorBall==4){
          pink()
        }
        
        }
      if(arrowG.isTouching(pinkG)){
        pinkG.destroyEach();
        arrowG.destroyEach();
        score=score+1;
        
      }
      if(arrowG.isTouching(blueG)){
        blueG.destroyEach();
        arrowG.destroyEach();
        score=score+1;
        
      }
      if(arrowG.isTouching(greenG)){
        greenG.destroyEach();
        arrowG.destroyEach();
        score=score+1;
        
      }
      if(arrowG.isTouching(redG)){
        redG.destroyEach();
        arrowG.destroyEach();
        score=score+5;
        
      }

        if(keyDown("space")){
           temparrow=arrowmove();
           temparrow.y=bow.y   
           }
        edges=createEdgeSprites();
 }
    // Creating  arrows for bow
  function arrowmove() {
      arrow= createSprite(360, 100, 5, 10);
      arrow.velocityX = -6;
      arrow.scale = 0.3; 
      arrow.addImage(arrowimg);
     arrowG.add(arrow);
      return arrow;
    
  }

  
function pink(){

  balloon= createSprite(10,400,200,10);
  balloon.velocityX=2;
  balloon.y=Math.round(random(20,450));
    balloon.addImage(pinkimg);
    balloon.scale=1
    balloon.lifetime=200
   pinkG.add(balloon);
  }
  function redBall(){
  
  balloon= createSprite(10,400,200,10);
  balloon.velocityX=2;
  balloon.y=Math.round(random(20,450));
    balloon.addImage(redimg);
    balloon.scale=0.1
    balloon.lifetime=200
     redG.add(balloon);
  }
    function blueBall(){
 
  balloon= createSprite(10,400,200,10);
  balloon.velocityX=2;
  balloon.y=Math.round(random(20,450));
    balloon.addImage(blueimg);
    balloon.scale=0.1
    balloon.lifetime=200
         blueG.add(balloon);
  }
 
    function greenBall(){
 
  balloon= createSprite(10,400,200,10);
  balloon.velocityX=2;
  balloon.y=Math.round(random(20,450));
    balloon.addImage(greenimg);
    balloon.scale=0.1
    balloon.lifetime=200
     greenG.add(balloon);
  }
  
