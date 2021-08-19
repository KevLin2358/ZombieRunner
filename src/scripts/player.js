// player class and functions
class Player {
    constructor(canvasWidth, canvasHeight){
        // canvas properties
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        //player object
        this.ground = 445;
        this.width = 25; // player 
        this.height = 60; // player

        //starting position
        this.x = 450; // starting position x axis
        this.y = 445; //starting position y axis

        //player image
        this.playerImg = new Image();
        this.playerImg.src = 'src/images/player.png';

        this.imageWidth = 13;
        this.imageHeight = 30;
        
        this.imageYL = 90;
        this.imageYR = 30;

        this.direction = "left"; //default character looking to the left

        // moving logic
        this.speed = 0; // starting speed
        this.maxSpeed = 4; // increment speed 

        //jumping logic
        this.is_jump = false; // default false
        this.in_air = 0; 
        this.gravity = 0.95;
        this.jumpHeight = -13;
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
        this.direction = "left";
    }

    moveRight(){
        this.speed = this.maxSpeed;
        this.direction = "right";
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
        // ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight, this.x, this.y, this.width, this.height);
        if(this.direction == "left"){
            ctx.drawImage(this.playerImg, 
                0, this.imageYL, this.imageWidth, this.imageHeight, 
                this.x, this.y, this.width, this.height);
        }else if(this.direction == "right"){
            ctx.drawImage(this.playerImg, 
                0, this.imageYR -5, this.imageWidth, this.imageHeight, 
                this.x, this.y, this.width, this.height);
        }
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