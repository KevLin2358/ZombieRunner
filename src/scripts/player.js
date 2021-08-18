// player class and functions
class Player {
    constructor(canvasWidth, canvasHeight){
        // canvas properties
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        //player object
        this.ground = 445;

        //starting position
        this.x = 450; // starting position x axis
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
        this.gravity = 0.95;
        this.jumpHeight = -13;
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.speed = this.maxSpeed;
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
        if(this.y >= this.ground){
            this.y = this.ground;
            this.is_jump = false;
        }
        this.ground += 13;
    }
}
module.exports = Player;