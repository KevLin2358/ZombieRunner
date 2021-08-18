const Player = require("./scripts/player");
const Platforms = require("./scripts/platform");
const Controller = require("./scripts/controller");
const Zombie = require("./scripts/zombie");
const Item = require("./scripts/item")



document.addEventListener("DOMContentLoaded", () => {


    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 500;

    let score = 0;
    let multi = 1;
    let scoreFrames = 0;
    let zomFrames = 0;
    let player = new Player(canvasWidth, canvasHeight);
    let item1 = new Item();
    let item2 = new Item();

    // constructor(x,y,width,height,color)
    let platform1 = new Platforms(0, 470, 1000, 30, 'black');
    
    let platform2 = new Platforms(0, 380, 333, 10, 'yellow');
    let platform3 = new Platforms(666, 380, 333, 10, 'red');
    
    let platform4 = new Platforms(425, 300, 140, 10, 'blue');

    let platform5 = new Platforms(0, 225, 333, 10, 'yellow');
    let platform6 = new Platforms(666, 225, 333, 10, 'red');
    
    //  Zombie constructor            x          ,  y  ,  width, height, speed, direction, platformX  , platformXW
    let zombie      = new Zombie(randomX(0,400)  ,  420,  25   , 50    , 1.3  , "right"  , platform1.x, platform1.xw);
    let zombie1     = new Zombie(randomX(500,975),  420,  25   , 50    , 0.5  , "left"   , platform1.x, platform1.xw);
    let zombie2     = new Zombie(randomX(350,975),  330,  25   , 50    , 3.2  , "left"   , platform3.x, platform3.xw);
    let zombie3     = new Zombie(randomX(0,308)  ,  330,  25   , 50    , 0.9  , "right"  , platform2.x, platform2.xw);
    let zombie4     = new Zombie(randomX(0,308)  ,  175,  25   , 50    , 2    , "left"   , platform5.x, platform5.xw);
    let zombie5     = new Zombie(randomX(350,975),  175,  25   , 50    , 2    , "left"   , platform6.x, platform6.xw);
    let zombie6     = new Zombie(randomX(325,415),  250,  25   , 50    , 2    , "left"   , platform4.x, platform4.xw);

    new Controller(player);

    requestAnimationFrame(loop);
    
    function loop(){

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        item1.drawItem(ctx);
        item2.drawItem(ctx);

        platform1.drawPlatforms(ctx);
        platform2.drawPlatforms(ctx);
        platform3.drawPlatforms(ctx);
        platform4.drawPlatforms(ctx);
        platform5.drawPlatforms(ctx);
        platform6.drawPlatforms(ctx);
        
        fastZom();
        
        zombie.moveZombie();
        zombie.drawZombie(ctx);
        
        zombie1.moveZombie();
        zombie1.drawZombie(ctx);

        zombie2.moveZombie();
        zombie2.drawZombie(ctx);
        
        zombie3.moveZombie();
        zombie3.drawZombie(ctx);

        zombie4.moveZombie();
        zombie4.drawZombie(ctx);

        zombie5.moveZombie();
        zombie5.drawZombie(ctx);

        zombie6.moveZombie();
        zombie6.drawZombie(ctx);

        player.movePlayer();
        player.drawPlayer(ctx);
        
        incScore();
        drawScore();
        drawMulti();

        collisionDetection(player, zombie);
        collisionDetection(player, zombie1);
        collisionDetection(player, zombie2);
        collisionDetection(player, zombie3);
        collisionDetection(player, zombie4);
        collisionDetection(player, zombie5);
        collisionDetection(player, zombie6);
        collisionDetection(player, item1);
        collisionDetection(player, item2);


        collisionDetection(player, platform1); 
        collisionDetection(player, platform2);
        collisionDetection(player, platform3); 
        collisionDetection(player, platform4); 
        collisionDetection(player, platform5); 
        collisionDetection(player, platform6); 

        requestAnimationFrame(loop);
    }
    
    //problem with collision with randomizeZombie
    
    function collisionDetection(obj1, obj2){
        // collision event between player, zombie
        if(obj2.constructor === Zombie){
            if( obj1.x < obj2.x + obj2.width &&   
                obj1.x + obj1.width > obj2.x &&  
                obj1.y < obj2.y + obj2.height &&
                obj1.y + obj1.height > obj2.y 
            ){
                //  gameOver();
             }
        }

        if(obj2.constructor === Platforms){
            if( 
                obj1.x < obj2.x + obj2.width &&   
                obj1.x + obj1.width > obj2.x &&  
                obj1.y < obj2.y + obj2.height && 
                obj1.y + obj1.height > obj2.y    
             ){
                obj1.ground = obj2.y - obj1.height + 0.1;
             }
        }

        if(obj2.constructor === Item){
            if( 
                obj1.x < obj2.x + obj2.width &&   
                obj1.x + obj1.width > obj2.x &&  
                obj1.y < obj2.y + obj2.height && 
                obj1.y + obj1.height > obj2.y    
             ){
                if(obj2.name === 'mult2'){
                    multi += 0.2;
                    console.log("multi2");
                    itemRespawn(obj2);
                }
                else if(obj2.name === 'mult3'){
                    multi += 0.3;
                    console.log("multi3");
                    itemRespawn(obj2);
                }
                else if(obj2.name === 'snow'){
                    slowZom();
                    console.log("snow");
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+1'){
                    score += 1
                    console.log("+1");
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+5'){
                    score += 5
                    console.log("+5");
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+10'){
                    score += 10
                    console.log("+10");
                    itemRespawn(obj2);
                }
            }
        }
    }

    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+score, 8, 20);
    }

    function drawMulti() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Mulitplier: "+multi.toFixed(2) +"x", 8, 40);
    }

    function gameOver(){
        alert('game over');
        document.location.reload();
        clearInterval(interval);
    }

    function incScore(){
        if(scoreFrames == 5){
            score += Math.round(1 * multi);
            scoreFrames = 0;
        }else{
            scoreFrames++;
        }
    }

    function fastZom(){
        if(zomFrames == 500){
            // startZombie.speed += 0.01;
            zombie.speed      += randomSpeed();
            zombie1.speed     += randomSpeed();
            zombie2.speed     += randomSpeed();
            zombie3.speed     += randomSpeed();
            zombie4.speed     += randomSpeed();
            zombie5.speed     += randomSpeed();
            zomFrames = 0;
        }else{
            zomFrames++;
        }
    }

    function slowZom(){
        // startZombie.speed -= 0.01;
        zombie.speed      -= 0.5;
        zombie1.speed     -= 0.5;
        zombie2.speed     -= 0.5;
        zombie3.speed     -= 0.5;
        zombie4.speed     -= 0.5;
        zombie5.speed     -= 0.5;
    }

    function itemRespawn(item){
        item.randomizeSpawn();
        item.randomizePower();
    }

    function randomSpeed(){
        return Math.random();
    }

    function randomX(min,max){
        return Math.random() * (max - min) + min;
    }

});