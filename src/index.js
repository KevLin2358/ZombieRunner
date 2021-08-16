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
    let platform1 = new Platforms(0, 470, 1000, 30, 'green');
    let platform2 = new Platforms(350, 400, 100, 10, 'brown');
    let platform3 = new Platforms(400, 300, 100, 10, 'blue');
    let zombie = new Zombie();
    new Controller(player);

    requestAnimationFrame(loop);
    
    function loop(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        platform1.drawPlatforms(ctx);
        platform2.drawPlatforms(ctx);
        platform3.drawPlatforms(ctx);
        zombie.moveZombie(canvasWidth);
        zombie.drawZombie(ctx);
        // console.log("index: " + zombie.x, zombie.y, zombie.width, zombie.height);
        player.movePlayer();
        player.drawPlayer(ctx);
        collisionDetection(player, zombie);
        collisionDetection(player, platform1) // need to change this
        collisionDetection(player, platform2) // need to change this
        collisionDetection(player, platform3) // need to change this
        requestAnimationFrame(loop);

    }
    
    //problem with collision with randomizeZombie
    
    function collisionDetection(obj1, obj2){ 
        // collision event between player, zombie
        if(obj2.constructor === Zombie){
            if( //
                obj1.x < obj2.x + obj2.width &&   
                //
                obj1.x + obj1.width > obj2.x &&  
                //
                obj1.y < obj2.y + obj2.height && 
                //
                obj1.y + obj1.height > obj2.y    
             ){
                 console.log("zombie");
                //  debugger
             }
        }

        if(obj2.constructor === Platforms){
            if( //
                obj1.x < obj2.x + obj2.width &&   
                //
                obj1.x + obj1.width > obj2.x &&  
                //
                obj1.y < obj2.y + obj2.height && 
                //
                obj1.y + obj1.height > obj2.y    
             ){ //445
                obj1.ground = obj2.y - obj1.height + 1;
                // console.log("platform");
                //  debugger
             }
        }
    }

});