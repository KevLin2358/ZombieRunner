export function renderModal(ctx, canvasWidth, ready, startScreen){
    if(!ready && startScreen){
        ctx.beginPath();
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.font = "16px Arial";

        let edu = `Welcome to Zombie Runner!`;
        let edu1 = "Try to grab the items";
        let edu2 = "While avoiding the enemies";
        let edu3 = "Controls:";
        let edu4 = "A to move left";
        let edu5 = "D to move right";
        let edu6 = "Space to Jump";
        let edu7 = "M to mute / unmute music";
      
        ctx.fillText(edu,canvasWidth/2,50);
        ctx.fillText(edu1,canvasWidth/2,100);
        ctx.fillText(edu2,canvasWidth/2,150);
        ctx.fillText(edu3,canvasWidth/2,200);
        ctx.fillText(edu4,canvasWidth/2,250);
        ctx.fillText(edu5,canvasWidth/2,300);
        ctx.fillText(edu6,canvasWidth/2,350);
        ctx.fillText(edu7,canvasWidth/2,400);
        ctx.fillText("Press Enter to Start!",canvasWidth/2,450);
        ctx.closePath();
    }
};