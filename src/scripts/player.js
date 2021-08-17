// player class and functions
class Player {
    constructor(canvasWidth, canvasHeight){
        // canvas properties
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        //player object
        this.ground = 445;

        //starting position
        this.x = 100; // starting position x axis
        this.y = 445; //starting position y axis

        //end point 
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

        this.color = '#FCA738';
        this.width = 25; // player 
        this.height = 25; // player

        // moving logic
        this.speed = 0; // starting speed
        this.maxSpeed = 5; // increment speed 

        //jumping logic
        this.is_jump = false; // default false
        this.in_air = 0; 
        this.gravity = 0.95;
        this.jumpHeight = -13;
    }

    moveLeft(){
        // console.log("move left");
        this.speed = -this.maxSpeed;
        // console.log(this.x);
    }

    moveRight(){
        // console.log("move right");
        this.speed = this.maxSpeed;
        // console.log(this.x);
    }

    //reset speed
    stop(){
        this.speed = 0;
    }
    
    jump(){
        if(this.is_jump){
            this.in_air = this.jumpHeight;
        }
    }

    drawPlayer(ctx){
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    movePlayer(){
        this.x += this.speed;
        this.in_air += this.gravity;
        this.y += this.in_air;

        //side constraint
        if(this.x < 0){
            this.x = this.canvasWidth - this.width;
        }

        if((this.x + this.width) > this.canvasWidth){
            this.x = 0;
        }
        
        // ground constraint
        // 445 // platform.y - player height
        if(this.y >= this.ground){
            this.y = this.ground;
            this.is_jump = false;
        }
        this.ground += 13;
    }
}
module.exports = Player;