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
    constructor(ctx){
        this.ctx = ctx;
        this.update();
        canvas.addEventListener("keypress", update);
    }
    update(){
        if (keyCode == 38)
        {
            y -= speed; //going up
        }
        if (keyCode == 40)
        {
            y += speed; //going down
        }
        if (keyCode == 37)
        {
            x -= speed; //going left
        }
        if (keyCode == 39)
        {
            x += speed; //going right
        }
        this.drawPlayer(this.ctx);
    }

    drawPlayer() {
        this.ctx.clearRect(pOb.x, pOb.y, pOb.width, pOb.height);
        this.ctx.fillStyle = pOb.color;
        this.ctx.fillRect(pOb.x, pOb.y, pOb.width, pOb.height);
    }

    // move player
    // event.keycode == 65 // a left
    // event.keycode == 87 // w  up
    // event.keycode == 68 // d right
    // event.keycode == 83 // s down
    // event.keycode == 32 // space jump
}
module.exports = Player;