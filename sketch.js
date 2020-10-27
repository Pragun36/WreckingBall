const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var box1;
var ball;
var ground;
var string;

function setup(){
createCanvas(600,600);
engine = Engine.create();
world = engine.world;

box1 = new Box(400,300,30,30);
ground = new Ground(300,580,600,20);
ball = new Ball(100,350,20);
string = new String(ball.body,{x:200,y:100});}

function draw(){

box1.display();
ball.display();
ground.display();
string.display();}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})}