class Bob {
    constructor(x,y,radius) {
      var options ={
          inertia: Infinity,
          restitution:0.8,
          isStatic:false,
          friction:0.2,
         
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;

      World.add(world, this.body);
    }  

    display() {
      var pos =this.body.position;
      fill("red");
      ellipse(pos.x,pos.y,this.radius);
    }
  }