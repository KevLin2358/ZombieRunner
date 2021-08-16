class Zombie {
    // zombie object to create
    constructor(){ // 
        this.width= 25;
        this.height= 75;

        // start point
        this.x = 1000;
        this.y = 445;

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
        
        this.speed = 5;
        this.direction = "left";
        this.spawn = this.x - this.width;
    }

    drawZombie(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y - this.height + 25, this.width, this.height);
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