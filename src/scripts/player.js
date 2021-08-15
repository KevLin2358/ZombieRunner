// player object
pOb = {
    x : 0,
    y : 450,
    x_v: 0,
    y_v: 0,
    speed: 5,
    jump: true,
    width: 25,
    height: 25,
    color: '#FCA738',

};

// player class and functions
class Player {
    constructor(canvas,ctx){
        this.ctx = ctx;
        this.canvas = canvas;
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        document.addEventListener('keydown', this.keyDownHandler,false);
        document.addEventListener('keyup', this.keyUpHandler,false);
    }
    // move player
    keyDownHandler(event) {
        if(event.keyCode == 68) {
            this.rightPressed = true;
            // console.log(`right ${this.rightPressed}`);
        }
        else if(event.keyCode == 65) {
            this.leftPressed = true;
            // console.log(`left ${this.leftPressed}`);
        }
        else if(event.keyCode == 32) {
            this.spacePressed = true;
            // console.log(`space ${this.spacePressed}`);
        }
    }

    keyUpHandler(event) {
        if(event.keyCode == 68) {
            this.rightPressed = false;
            // console.log(pOb.x);
        }
        else if(event.keyCode == 65) {
            this.leftPressed = false;
            // console.log(pOb.x);
        }
        else if(event.keyCode == 32) {
            this.spacePressed = false;

        }
    }

    drawPlayer() {
        console.log(this.leftPressed, pOb.x);
        this.ctx.clearRect(pOb.x, pOb.y, pOb.width, pOb.height);
        if(this.leftPressed){
            console.log(`moved left`);
            pOb.x -= pOb.speed;
        } else if(this.rightPressed){
            console.log(`moved right`);
            pOb.x += pOb.speed;
        }
        this.ctx.fillStyle = pOb.color;
        this.ctx.fillRect(pOb.x, pOb.y, pOb.width, pOb.height);
        // requestAnimationFrame(this.drawPlayer.bind(this));
    }
}
module.exports = Player;