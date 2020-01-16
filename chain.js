class chain{
    constructor(bodyA,bodyB){
        var options = {
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
       display(){
           var PointA = this.chain.bodyA.position
           var PointB = this.chain.bodyB.position
           strokeWeight(4)
           line(PointA.x,PointA.y,PointB.x,PointB.y)
       }
    
   
}