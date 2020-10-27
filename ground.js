class Ground{
constructor(x,y,width,height){
var options = {
    'friction':1.0,
    'density':1.0,
    'restitution':0.8,
    'isStatic':true}

this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);}

display(){
rectMode(CENTER);
fill("lightGreen")
rect(this.body.position.x,this.body.position.y,this.width,this.height);}}