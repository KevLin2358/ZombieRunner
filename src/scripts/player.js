// player object
let pOb = {
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
        rightPressed = false;
        leftPressed = false;
        spacePressed = false;
        addEventListener('keydown', this.keyDownHandler, false);
        addEventListener('keyup', this.keyUpHandler, false);
        setInterval(this.update(),1000);
    }
    // move player
    // // event.keycode == 32 // space jump
    keyDownHandler(event) {
        if(event.keyCode == 68) {
            this.rightPressed = true;
            console.log(`right ${this.rightPressed}`);
        }
        else if(event.keyCode == 65) {
            this.leftPressed = true;
            console.log(`left ${this.leftPressed}`);
        }
        else if(event.keyCode == 32) {
            this.spacePressed = true;
            console.log(`space ${this.spacePressed}`);
        }
    }

    keyUpHandler(event) {
        if(event.keyCode == 68) {
            this.rightPressed = false;
            console.log(`right ${this.rightPressed}`);
        }
        else if(event.keyCode == 65) {
            this.leftPressed = false;
            console.log(`left ${this.leftPressed}`);
        }
        else if(event.keyCode == 32) {
            this.spacePressed = false;
            console.log(`space ${this.spacePressed}`);
        }
    }

    update(){
        console.log('update called');
        if(this.rightPressed){
            pOb.x += pOb.speed * 10;
            console.log(p0b.x);
        }
        else if(this.leftPressed){
            pOb.y -= pOb.speed * 10;
            console.log(p0b.y);
        }
        this.drawPlayer();
        console.log('update render');
    }

    drawPlayer() {
        this.ctx.clearRect(pOb.x, pOb.y, pOb.width, pOb.height);
        this.ctx.fillStyle = pOb.color;
        this.ctx.fillRect(pOb.x, pOb.y, pOb.width, pOb.height);
        console.log("refresh");
    }
}
module.exports = Player;