class Zombie {
    // zombie object to create
    constructor(x,y,direction,platformX,platformXW){ 
        
        // 
        this.width = 25;
        this.height = 40;
        
        this.zombieImgL = new Image();
        this.zombieImgL.src = 'src/images/zombieL.png';

        this.zombieImgR = new Image();
        this.zombieImgR.src = 'src/images/zombieR.png';

        this.imageWidth = 30;
        this.imageHeight = 75;

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
        if(this.direction == "left"){
            ctx.drawImage(this.zombieImgL, 
                0, 0, this.imageWidth, this.imageHeight, 
                this.x, this.y, this.width, this.height);
        } else if(this.direction == "right"){
            ctx.drawImage(this.zombieImgR, 
                0, 0, this.imageWidth, this.imageHeight, 
                this.x, this.y, this.width, this.height);
        }

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