class Iron{
    constructor(x,y) 
{
var options={
    restitution:0.8,
    friction:3,
    density:30

}
this.x=x;
this.y=y;
this.width=130;
this.height=30;
this.body=Bodies.rectangle(this.x, this.y,130,30, options)
World.add(world, this.body);
}
display()
	{
			var ironpos=this.body.position;	
            var angle = this.body.angle;	
            push();
            translate(ironpos.x, ironpos.y,ironpos.width,ironpos.height);
            rotate(angle);
            strokeWeight(4);
            rectMode(CENTER)
            stroke('cyan')
            fill('silver')
            
            rect(0, 0,this.width, this.height);
            pop();


}
}