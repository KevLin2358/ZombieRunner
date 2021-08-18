class Zombie {
    // zombie object to create
    constructor(x,y,width,height,speed,
        direction,platformX,platformXW){ // 
        this.width = width;
        this.height = height;

        // start point
        this.x = x;
        this.y = y;

        // end point 
        this.xEnd = this.x + this.width;
        this.yEnd = this.y + this.height;

        //coordinates
        // (1,0)  (1,1)
        // (0,0)  (0,1)

        // (0,0)
        this.zz = {x: this.x, y: this.y}; 
        // (0,1)
        this.zo = {x: this.x, y: this.yEnd }
        // (1,0)
        this.oz = {x: this.xEnd, y: this.y}
        // (1,1)
        this.oo = {x: this.xEnd, y: this.yEnd}
        
        this.speed = speed;
        this.direction = direction;
        this.spawn = this.x - this.width;

        // platform movement
        this.platformX = platformX;
        this.platformXW = platformXW;
    }

    drawZombie(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft(){
        this.x -= this.speed
    }

    moveRight(){
        this.x += this.speed;
    }

    random(min, max){
        return Math.random() * (max - min) + min;
    }

    moveZombie(){
        if(this.direction == "right"){
            this.moveRight();
        }

        if(this.direction == "left"){
            this.moveLeft();
        }

        //side constraint
        if(this.x < this.platformX){
            this.x = this.platformX;
            this.direction = "right";
        }

        if((this.x + this.width) > this.platformXW){
            this.x = this.platformXW - this.width;
            this.direction = "left";
        }
    }
}

module.exports = Zombie;