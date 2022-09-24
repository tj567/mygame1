var player
var room,rand
var gameState="wait"
var roomChosen=0
var enemy1,enemy2,enemy3,enemy4

function preload(){

  room1img=loadImage("room1.png")
  room2img=loadImage("room2.png")
playerstandimg=loadImage("player_stand.png")
playerwalkimg=loadImage("player_walk.png")

}



function setup(){
  createCanvas(windowWidth-50,windowHeight-50)


room=createSprite(width/2,height/2,width,height)
room.visible=false
room.scale=2

player = createSprite(width/2,height/2,20,20)
player.addImage("stand",playerstandimg)
player.addImage("walk",playerwalkimg)

enemy1=createSprite(width,height/2)
enemy2=createSprite(0,height/2)
enemy3=createSprite(width/2,0)
enemy4=createSprite(width/2,height)

enemy1.visible=false
enemy2.visible=false
enemy3.visible=false
enemy4.visible=false

enemy1.shapeColor="red"
enemy2.shapeColor="yellow"
enemy3.shapeColor="green"
enemy4.shapeColor="blue"


  }


function draw(){
  if (gameState==="wait"){
  background(0)}
if (keyDown("space")){
  gameState="play"
}

if(gameState==="play"){

  enemy1.visible=true
enemy2.visible=true
enemy3.visible=true
enemy4.visible=true


enemy1.x=player.x +100
enemy1.y=player.y +100


  room.visible=true
  console.log(gameState)
  if(roomChosen==0){
  var rand=Math.round(random(1,2))
  if(rand==1 ){
   // background(room1img)
   room.addImage(room1img)
  }
  else {
   // background(room2img)
   room.addImage(room2img)

  }
  roomChosen +=1}
 

 // background(room)
  if(keyDown(LEFT_ARROW)){
    player.x -= 5
 //   player.changeImage("walk")
  }


  if(keyDown(RIGHT_ARROW)){
    player.x += 5
    //player.changeImage("walk")

  }

  if(keyDown(UP_ARROW)){
    player.y -= 5
   // player.changeImage("walk")

  }
 

  if(keyDown(DOWN_ARROW)){
    player.y += 5
    //player.changeImage("walk")

  }
 
if(keyDown(RIGHT_ARROW) ||keyDown(DOWN_ARROW) || keyDown(LEFT_ARROW) || keyDown(UP_ARROW)){
  player.changeImage("walk")
}
else{
  player.changeImage("stand")
}


}
  drawSprites()
}

