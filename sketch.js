var gameState="STORY"
var storyImage;
var form;
var play=1
function preload(){
  storyImage=loadImage("images/story.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  background(0);  
  if(gameState==="STORY"){
   /* background(storyImage)
    textSize(60)
    fill("red")
    text("WELCOME TO SHADOW FIGHT WORLD",windowWidth/22,windowHeight/7)
    textSize(30)
    text("NOW YOU ARE NOT AN NORMAL PERSON NOW,",windowWidth/38,windowHeight/4)
    text("YOUR ARE AN WARRIOR WHO TRYS TO",windowWidth/2,windowHeight/3)
    text("SAVE HIS FAMILY AND VILLAGE FROM",windowWidth/34,windowHeight/2.58)
    text("KNIGHTS WHO ATTACKED THEIR TOWN.",windowWidth/1.99,windowHeight/2.22)
    text("BUT HE COULD NOT SAVE THEM.",windowWidth/27,windowHeight/1.9)
    text("NOW IT'S REVENGE TIME!",windowWidth/2,windowHeight/1.75)
    text("NOW ENTER YOUR NAME TO START",windowWidth/32,windowHeight/1.52)*/
    form = new Form()
    form.display();
    
  }
  if(gameState===1){
    form.hide();
  }
  
  drawSprites(); 
}