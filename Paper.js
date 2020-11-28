class Paper
{
constructor(x,y,r){

var options={
isStatic: false,
restitution: 0.3,
friction:0.5,
density:1.2
}

this.x=x;
this.y=y;
this.r=r;
this.Body=Bodies.circle(this.x,this.y,this.r/2,options)

}
display(){

var paperpos=this.Body.postion.x;
var paperpos=this.Body.postion.y;
push()
translate(paperpos.X,paperpos.Y)
rectMode(CENTER)
strokeWeight(3);
fill(255,0,255);
ellipse(0,0,this.r,this.r);
pop()

}
}

