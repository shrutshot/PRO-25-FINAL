class dust{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.image1= loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
        //rect(this.body.position.x, this.body.position.y, this.w, this.h);
       image(this.image1,this.body.position.x,this.body.position.y,this.w)
    }
}