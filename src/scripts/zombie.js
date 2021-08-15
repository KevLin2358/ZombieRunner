class Zombie {
    // zombie object to create
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.x_v= 0;
        this.y_v= 0;
        this.width= 25;
        this.height= 75;
        this.speed = 1;
        this.direction = "right";
    }

    drawZombie(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y - this.height + 25, this.width, this.height);
    }

    moveLeft(){
        this.x -= this.speed
    }

    moveRight(){
        this.x += this.speed
    }
    moveZombie(canvasWidth){
        if(this.direction == "right"){
            this.moveRight();
        }

        if(this.direction == "left"){
            this.moveLeft();
        }

        //side constraint
        if(this.x < 0){
            this.x = 0;
            this.direction = "right";
        }

        if((this.x + this.width) > canvasWidth){
            this.x = canvasWidth - this.width;
            this.direction = "left";
        }
    }

}

module.exports = Zombie;