const Player = require("./scripts/player");
const Platforms = require("./scripts/platform");
const Controller = require("./scripts/controller");
const Zombie = require("./scripts/zombie");
const Item = require("./scripts/item");
const Background = require("./scripts/background");
import {renderModal} from './scripts/modal';

document.addEventListener("DOMContentLoaded", () => {
    let frames = 0;
    let canvas = document.getElementById('canvas1');
    let ctx = canvas.getContext('2d');
    const canvasWidth = 1000;
    const canvasHeight = 500;
    let score = 0;
    let multi = 1;
    let zomFrames = 0;
    let player = new Player(canvasWidth, canvasHeight);
    let item1 = new Item();
    let item2 = new Item();
    let background = new Background(ctx,canvasWidth, canvasHeight);

    let bgMusic = new Audio("src/sound/chase.mp3");
    bgMusic.volume = 0.3;
    let music = false;

    // screen logic
    let startScreen = true;
    let ready = false;
    
    // need to refactor
    // constructor(x,y,width,height)
    let platform1 = new Platforms(0, 470, 1000, 30);
    
    let platform2 = new Platforms(0, 360, 340, 5);
    let platform3 = new Platforms(660, 360, 340, 5);
    
    let platform4 = new Platforms(425, 270, 140, 5);

    let platform5 = new Platforms(0, 185, 340, 5);
    let platform6 = new Platforms(660, 185, 340, 5);

    //  Zombie constructor            x          ,  y  ,  direction, platformX  , platformXW
    // let zombie      = new Zombie(randomX(0,300)  ,  430,  "right"  , platform1.x, platform1.xw);
    let zombie1     = new Zombie(randomX(600,975),  430,  "left"   , platform1.x, platform1.xw);
    let zombie2     = new Zombie(randomX(350,975),  320,  "left"   , platform3.x, platform3.xw);
    let zombie3     = new Zombie(randomX(0,308)  ,  320,  "right"  , platform2.x, platform2.xw);
    let zombie4     = new Zombie(randomX(0,308)  ,  145,  "left"   , platform5.x, platform5.xw);
    let zombie5     = new Zombie(randomX(350,975),  145,  "left"   , platform6.x, platform6.xw);
    // let zombie6     = new Zombie(randomX(325,415),  230,  "left"   , platform4.x, platform4.xw);

    new Controller(player);

    function loop(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        randomBg();

        item1.drawItem(ctx);
        item2.drawItem(ctx);

        //need to refactor
        platform1.drawPlatforms(ctx);
        platform2.drawPlatforms(ctx);
        platform3.drawPlatforms(ctx);
        platform4.drawPlatforms(ctx);
        platform5.drawPlatforms(ctx);
        platform6.drawPlatforms(ctx);
        
        fastZom();
        //need to refactor
        // zombie.moveZombie();
        // zombie.drawZombie(ctx);
        
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

        // zombie6.moveZombie();
        // zombie6.drawZombie(ctx);

        player.movePlayer();
        player.drawPlayer(ctx);
        
        drawScoreMulti()

        // need to refactor
        // collisionDetection(player, zombie);
        collisionDetection(player, zombie1);
        collisionDetection(player, zombie2);
        collisionDetection(player, zombie3);
        collisionDetection(player, zombie4);
        collisionDetection(player, zombie5);
        // collisionDetection(player, zombie6);
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
    
    function collisionDetection(obj1, obj2){
        // need to refactor
        // collision event between player, zombie
        if(obj2.constructor === Zombie){ // need fixing
            if( obj1.x < (obj2.x + 20) + (obj2.width - 30) &&   
                obj1.x + obj1.width > obj2.x + 20 &&  
                obj1.y < (obj2.y) + (obj2.height - 20)  &&
                obj1.y + obj1.height > obj2.y + 20
            ){
                gameOver();
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
                    incMulti(0.2);
                    itemRespawn(obj2);
                }
                else if(obj2.name === 'mult3'){
                    incMulti(0.3);
                    itemRespawn(obj2);
                }
                else if(obj2.name === 'snow'){
                    // slowZom();
                    incMulti(0.1);
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+10'){
                    incScore(10);
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+25'){
                    incScore(25);
                    itemRespawn(obj2);
                }
                else if(obj2.name === '+50'){
                    incScore(50);
                    itemRespawn(obj2);
                }
            }
        }
    }

    //drawing function
    function drawScoreMulti() {
        ctx.beginPath();
        ctx.textAlign = 'center';
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: "+score, canvasWidth/2,20);
        ctx.fillText("Mulitplier: "+multi.toFixed(2) +"x", canvasWidth/2,40);
        ctx.closePath();
    }

    // scoring
    function incScore(num){
        score += Math.round(num * multi);
    }

    function incMulti(num){
        multi += num;
    }

    // game start / end logic
    function gameOver(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        alert("Game Over! Your score was " +score);
        document.location.reload();
        clearInterval(interval);
        ready = false;
        startScreen = true;
        
    }

    function start(){// if 
        ready = true;
        startScreen = false;
        bgMusic.play();
        requestAnimationFrame(loop);
    }


    // game logic
    function fastZom(){
        if(zomFrames == 1000){
            // startZombie.speed += 0.01;
            // zombie.speed      += 0.01;
            zombie1.speed     += 0.01;
            zombie2.speed     += 0.01;
            zombie3.speed     += 0.01;
            zombie4.speed     += 0.01;
            zombie5.speed     += 0.01;
            // zombie6.speed     += 0.01;
            zomFrames = 0;
        }else{
            zomFrames++;
        }
    }

    // function slowZom(){
    //     // startZombie.speed -= 0.01;
    //     zombie.speed      -= 0.50;
    //     zombie1.speed     -= 0.50;
    //     zombie2.speed     -= 0.50;
    //     zombie3.speed     -= 0.50;
    //     zombie4.speed     -= 0.50;
    //     zombie5.speed     -= 0.50;
    // }

    function itemRespawn(item){
        item.randomizeSpawn();
        item.randomizePower();
    }

    // random calculation
    // function randomSpeed(){
    //     return Math.random();
    // }

    function randomX(min,max){
        return Math.random() * (max - min) + min;
    }

    function randomBg(){
        if(frames < 1000){
            background.renderDay();
        }else{
            background.renderNight();
        }
        frames++;
        if (frames > 2000){
            frames = 0;
        }
    }

    document.addEventListener('keydown', (e) =>{
        switch(e.keyCode){
            case 13: // enter
            if(!ready){
                start(); // breaking
            }
            break;
        }        
        switch(e.keyCode){
            case 77: // m
            if(music){
                music = false;
                bgMusic.pause(); // breaking
            }else if(!music){
                music = true;
                bgMusic.loop = true;
                bgMusic.play();
            }
            break;
        }
    });

    renderModal(ctx, canvasWidth, ready, startScreen);    
});