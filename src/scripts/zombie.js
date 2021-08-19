class Zombie {
    // zombie object to create
    constructor(x,y,direction,platformX,platformXW){ 
        
        // 
        this.width = 40;
        this.height = 40;
        
        this.zombieImg = new Image();
        this.zombieImg.src = 'src/images/zombie.png';
        this.imageWidth = 66;
        this.imageHeight = 77;

        // start point
        this.x = x;
        this.y = y;

        this.speed = 0.2;
        this.direction = direction;
        this.spawn = this.x - this.width;

        // platform movement
        this.platformX = platformX;
        this.platformXW = platformXW;
    }

    drawZombie(ctx){
        // ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.zombieImg, 
            this.imageWidth, 0, this.imageWidth, this.imageHeight, 
            this.x, this.y, this.width, this.height);
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
        if(this.x < this.platformX - 20){
            this.x = this.platformX;
            this.direction = "right";
        }

        if((this.x + this.width) > this.platformXW + 20){
            this.x = this.platformXW - this.width;
            this.direction = "left";
        }
    }
}

module.exports = Zombie;