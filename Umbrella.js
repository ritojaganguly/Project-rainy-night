class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        this.image= loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
        this.scale = 2;
        World.add(world, this.body);
    }
    
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,100,100);
    }
}