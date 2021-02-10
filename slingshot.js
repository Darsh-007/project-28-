class slingshot {
  constructor(body,pointB){
    var options ={
      bodyA:  body,
      pointB:  pointB,
      stiffness: 0.004,
      length: 1
    }
this.bodyA=body;
this.pointB=pointB;

    this.sling= Constraint.create(options);
    World.add(world,this.sling);
  }
  attach(body){
    this.sling.bodyA=body;
  }
  fly(){
    this.sling.bodyA=null;
  }

  display() {
    if(this.sling.bodyA){

     
    
    var pointA=this.sling.bodyA.position;
      var pointB=this.pointB;
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    } 
  }
}
