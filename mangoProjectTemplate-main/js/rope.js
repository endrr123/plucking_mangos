class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 50
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
 


    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            
            pop();
        }
    }
    fly(){
        this.rope.bodyA = null;
    }
    
}