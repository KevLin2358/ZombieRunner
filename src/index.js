const Player = require("./scripts/player");
const Platforms = require("./scripts/platform");
const Controller = require("./scripts/controller");
const Zombie = require("./scripts/zombie");


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 500;


    let player = new Player(canvasWidth, canvasHeight);
    let platforms = new Platforms();
    let zombie = new Zombie(0,445);
    new Controller(player);

    requestAnimationFrame(loop);

    function loop(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        platforms.drawPlatforms(ctx);
        zombie.moveZombie(canvasWidth);
        zombie.drawZombie(ctx);
        player.movePlayer();
        player.drawPlayer(ctx);
        requestAnimationFrame(loop);
    }
});