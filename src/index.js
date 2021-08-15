const Player = require("./scripts/player");
const Platforms = require("./scripts/platform");
const Controller = require("./scripts/controller");

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 500;


    let player = new Player(canvasWidth, canvasHeight);
    let platforms = new Platforms();
    new Controller(player);
    requestAnimationFrame(loop);

    function loop(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        platforms.drawPlatforms(ctx);
        player.movePlayer();
        player.drawPlayer(ctx);
        requestAnimationFrame(loop);
    }
});