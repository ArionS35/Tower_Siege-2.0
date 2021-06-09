const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
polygonImg = loadImage("polygon.png")
 }

 function setup() {
 createCanvas(1360,600);

 engine = Engine.create()
 world=engine.world
 Engine.run(engine)

 land1= new Ground(150,520,100,100)
 stand1= new Ground(660,450,250,10)
 stand2= new Ground(930,350,250,10)
 stand3= new Ground(1200,250,250,10)
 ground= new Ground(600,580,1800,20)

 box1a= new Box(580,420,40,50)
 box2a= new Box(620,420,40,50)
 box3a= new Box(660,420,40,50)
 box4a= new Box(700,420,40,50)
 box5a= new Box(740,420,40,50)
 box6a= new Box(600,370,40,50)
 box7a= new Box(640,370,40,50)
 box8a= new Box(680,370,40,50)
 box9a= new Box(720,370,40,50)
 box10a= new Box(620,320,40,50)
 box11a= new Box(660,320,40,50)
 box12a= new Box(700,320,40,50)
 box13a= new Box(640,270,40,50)
 box14a= new Box(680,270,40,50)
 box15a= new Box(660,220,40,50)

 box1b= new Box(1010,320,40,50)
 box2b= new Box(970,320,40,50)
 box3b= new Box(930,320,40,50)
 box4b= new Box(890,320,40,50)
 box5b= new Box(850,320,40,50)
 box6b= new Box(990,270,40,50)
 box7b= new Box(950,270,40,50)
 box8b= new Box(910,270,40,50)
 box9b= new Box(870,270,40,50)
 box10b= new Box(970,220,40,50)
 box11b= new Box(930,220,40,50)
 box12b= new Box(890,220,40,50)
 box13b= new Box(950,170,40,50)
 box14b= new Box(910,170,40,50)
 box15b= new Box(930,120,40,50)

 box1c= new Box(1120,220,40,50)
 box2c= new Box(1160,220,40,50)
 box3c= new Box(1200,220,40,50)
 box4c= new Box(1240,220,40,50)
 box5c= new Box(1280,220,40,50)
 box6c= new Box(1140,170,40,50)
 box7c= new Box(1180,170,40,50)
 box8c= new Box(1220,170,40,50)
 box9c= new Box(1260,170,40,50)
 box10c= new Box(1160,120,40,50)
 box11c= new Box(1200,120,40,50)
 box12c= new Box(1240,120,40,50)
 box13c= new Box(1180,70,40,50)
 box14c= new Box(1220,70,40,50)
 box15c= new Box(1200,40,40,50)

 polygon = Bodies.circle(160,384,20)
 World.add(world,polygon)

 sling1= new Sling(polygon,{x:160,y:384})
 }

 function draw(){
 background("black");

 textSize(25)
 text(mouseX+":"+ mouseY, 200, 200)

 land1.display()
 stand1.display()
 stand2.display()
 stand3.display()
 ground.display()
 
 fill ("rgb(20,20,200)")
 box1a.display()
 box2a.display()
 box3a.display()
 box4a.display()
 box5a.display()
 fill ("rgb(40,40,200)")
 box6a.display()
 box7a.display()
 box8a.display()
 box9a.display()
 fill ("rgb(60,60,200)")
 box10a.display()
 box11a.display()
 box12a.display()
 fill ("rgb(80,80,200)")
 box13a.display()
 box14a.display()
 fill ("rgb(100,100,200)")
 box15a.display()

 fill ("rgb(20,200,20)")
 box1b.display()
 box2b.display()
 box3b.display()
 box4b.display()
 box5b.display()
 fill ("rgb(40,200,40)")
 box6b.display()
 box7b.display()
 box8b.display()
 box9b.display()
 fill ("rgb(60,200,60)")
 box10b.display()
 box11b.display()
 box12b.display()
 fill ("rgb(80,200,80)")
 box13b.display()
 box14b.display()
 fill ("rgb(100,200,100)")
 box15b.display()

 fill ("rgb(200,20,20)")
 box1c.display()
 box2c.display()
 box3c.display()
 box4c.display()
 box5c.display()
 fill ("rgb(200,40,40)")
 box6c.display()
 box7c.display()
 box8c.display()
 box9c.display()
 fill ("rgb(200,60,60)")
 box10c.display()
 box11c.display()
 box12c.display()
 fill ("rgb(200,80,80)")
 box13c.display()
 box14c.display()
 fill ("rgb(200,100,100)")
 box15c.display()


 imageMode(CENTER)
 image(polygonImg,polygon.position.x,polygon.position.y,50,50)

 sling1.display()
 }

 function mouseDragged(){
     Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
    sling1.fly()
}

function keyPressed(){
    sling1.attach(polygon)
}