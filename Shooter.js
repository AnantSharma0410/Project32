class Shooter{
    constructor(x, y, radius) {
       this.radius = radius;
       this.x = x;
       this.y = y;
        this.body = Bodies.circle(x, y, radius);
        this.img= loadImage("polygon.png");
        
       
        World.add(world, this.body);
      }
      display(){
        var spos = this.body.position;
       
        imageMode(CENTER);
        image(this.img, spos.x,spos.y,this.radius,this.radius);
        
      }
}