class Box {

    constructor(x,y,w,h){

        var options={

            friction:10,
            restitution:0.5,
            density:0.0001

        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.width=w
        this.height=h
    }

    display(){
        console.log(this.body.speed)

        if(this.body.speed<4.4){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
           World.remove(world,this.body)
        }
    }
}