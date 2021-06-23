class Box{
constructor(x,y,width,height){
var options ={
'restitution': 1,
'friction' : 0.8,
'density' : 0.04, 

}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display() {
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
strokeWeight(4);
stroke('blue')
fill(255);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}





























}