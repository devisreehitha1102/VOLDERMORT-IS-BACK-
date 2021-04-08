const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(1000,500);
    rubber = new Rubber(300,10);
    stone = new Stone(600,10);
    iron = new Iron(800,10)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    hammer.display();
    rubber.display(); 
    iron.display();
 
}