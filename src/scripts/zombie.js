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
        this.frame = 0;
        this.gameFrame = 0;

        // start point
        this.x = x;
        this.y = y;

        this.speed = 0.09;
        this.direction = direction;
        this.spawn = this.x - this.width;

        // platform movement
        this.platformX = platformX;
        this.platformXW = platformXW;
    }

    drawZombie(ctx){
        // ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.zombieImg, 
            this.frame * this.imageWidth, 0, this.imageWidth, this.imageHeight, 
            this.x, this.y, this.width, this.height);
    }

    update(){
        if(this.gameFrame % 15 === 0){
            this.frame > 1 ? this.frame = 0 : this.frame++;
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
        if(this.x < this.platformX){
            this.x = this.platformX;
            this.direction = "right";
        }

        if((this.x + this.width) > this.platformXW){
            this.x = this.platformXW - this.width;
            this.direction = "left";
        }
        this.gameFrame++;
        this.update();
    }
}

module.exports = Zombie;