const Player = require("./scripts/player");
const Platforms = require("./scripts/platform");
const Controller = require("./scripts/controller");
const Zombie = require("./scripts/zombie");
let intersects = require('intersects');


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 500;


    let player = new Player(canvasWidth, canvasHeight);
    let platform1 = new Platforms(0, 470, 1000, 30, 'black');
    let platform2 = new Platforms(350, 400, 150, 10, 'red');
    let platform3 = new Platforms(450, 300, 100, 10, 'blue');
    
    //zombie constructor(x,y,width,height,speed,direction,platformX,platformXW)
    let startZombie = new Zombie(0,0,50,470,0.1,"right",platform1.x, platform1.xw);
    let zombie1 = new Zombie(350,350,25,50,2,"left",platform2.x, platform2.xw);
    new Controller(player);

    requestAnimationFrame(loop);
    
    function loop(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        platform1.drawPlatforms(ctx);
        platform2.drawPlatforms(ctx);
        platform3.drawPlatforms(ctx);
        startZombie.moveZombie(canvasWidth);
        startZombie.drawZombie(ctx);
        zombie1.moveZombie();
        zombie1.drawZombie(ctx);
        // console.log("index: " + zombie.x, zombie.y, zombie.width, zombie.height);
        player.movePlayer();
        player.drawPlayer(ctx);
        collisionDetection(player, startZombie);
        collisionDetection(player, zombie1);
        collisionDetection(player, platform1); 
        collisionDetection(player, platform2);
        collisionDetection(player, platform3); 
        requestAnimationFrame(loop);

    }
    
    //problem with collision with randomizeZombie
    
    function collisionDetection(obj1, obj2){

        // collision event between player, zombie
        if(obj2.constructor === Zombie){
            if(          
                obj1.x < obj2.x + obj2.width &&   
                //
                obj1.x + obj1.width > obj2.x &&  
                //
                obj1.y < obj2.y + obj2.height &&
                // 
                obj1.y + obj1.height > obj2.y 
                )
             {
                 console.log("zombie");
                 debugger
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
             ){
                obj1.ground = obj2.y - obj1.height + 1;
                // console.log("platform");
                //  debugger
             }
        }
    }

});