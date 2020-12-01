class Mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("sprites/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}