class Block {
  constructor(x, y, width, height) {
   
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
   
  }
  display(){
    var pos =this.body.position;
    //console.log(this.body.speed);

    rectMode(CENTER);
    
    if(this.body.speed<20){
      
    fill("lightblue");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      fill("lightblue");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
   

  }
 
Score(){

  if(this.visibility<0 && this.visibility>-105){
    Score= Score+1;
  }
}
}