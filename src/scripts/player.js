// player class and functions
class Player {
    constructor(canvasWidth, canvasHeight){
        // canvas properties
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.ground = this.canvasHeight - this.height - 30;
        //player object
        
        //starting position
        this.x = 0; // starting position x axis
        this.y = 445; //starting position y axis

        this.color = '#FCA738';
        this.width = 25; // player 
        this.height = 25; // player

        // moving logic
        this.speed = 0; // starting speed
        this.maxSpeed = 5; // increment speed 

        //jumping logic
        this.is_jump = false; // default false
        this.in_air = 0; 
        this.gravity = 0.9;
        this.jumpHeight = -15;
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
        console.log("stop");
        this.speed = 0;
    }
    
    jump(){
        console.log("jump");
        if(this.is_jump){
            this.in_air = this.jumpHeight;
        }
    }

    fall(){
        console.log("fall");
        if(this.is_jump){
            this.in_air += this.gravity;
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
            this.x = 0;
        }

        if((this.x + this.width) > this.canvasWidth){
            this.x = this.canvasWidth - this.width;
        }
        
        // ground constraint
        if(this.y > this.canvasHeight - 30 - this.height){
            this.y = this.canvasHeight - 30 - this.height;
            this.is_jump = false;
        }
    }

}
module.exports = Player;