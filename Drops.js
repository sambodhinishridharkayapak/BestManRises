class Drops
{
    constructor(x,y,width, height)
    {
        var add =
        {
            'restitution':0.2,
            'friction':0.1,
            'density':1,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,add);
        World.add(world, this.body);
        


    }
    display()
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(68, 175, 184);
        rect(pos.x, pos.y, 3, 7);
        pop();
    

    }
    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(150,250), y:0})
        }
    }

    
}