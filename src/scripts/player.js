// player class and functions
class Player {
    constructor(canvasWidth, canvasHeight){
        //player object

        //starting position
        this.x = 0; // starting position x axis
        this.y = 450; //starting position y axis

        this.color = '#FCA738';
        this.width = 25; // player 
        this.height = 25; // player

        // moving logic
        this.speed = 0; // starting speed
        this.maxSpeed = 5; // increment speed 

        //jumping logic
        this.is_jump = false; // default false
        this.in_air = 0; 
        this.gravity = 0.5;
        this.jumpSpeed = -15;
    }

    moveLeft(){
        console.log("move left");
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        console.log("move right");
        this.speed = this.maxSpeed;
    }

    //reset speed
    stop(){
        console.lop("stop");
        this.speed = 0;
    }
    
    jump(){
        console.lop("jump");
        if(this.is_jump){
            this.in_air = this.jumpSpeed;
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

}
module.exports = Player;