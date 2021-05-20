class Stone{
    constructor(x,y) 
{
var options={
    restitution:0.8,
    friction:0.9,
    density:12

}
this.x=x;
this.y=y;
this.width=100;
this.height=100;
this.body=Bodies.rectangle(this.x, this.y,100,100, options)
World.add(world, this.body);
}
display()
	{
			var stonepos=this.body.position;	
            var angle = this.body.angle;	
            push();
            translate(stonepos.x, stonepos.y,stonepos.width,stonepos.height);
            rotate(angle);
            strokeWeight(4);
            rectMode(CENTER)
            stroke('black')
            fill('orange')
            
            rect(0, 0,this.width, this.height);
            pop();


}
}
