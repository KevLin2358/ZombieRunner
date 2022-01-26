class Controller{
    constructor(player){

        document.addEventListener('keydown', (e) =>{
            switch(e.keyCode){
                case 68: // d button to move right
                case 39:
                    player.moveRight();
                    break;

                case 65: // a button to move left
                case 37:
                    player.moveLeft();
                    break;

                case 32: // spacebar for jump
                // console.log("space down");
                case 38:
                    if(!player.is_jump){
                        player.is_jump = true;
                        player.jump();
                    }
                    break;
            }
        });

        document.addEventListener('keyup', (e) =>{
            switch(e.keyCode){
                case 68: // d button to move right
                case 39:
                    if (player.speed > 0) {
                        player.stop();
                    }
                    break;

                case 65: // a button to move left
                case 37:
                    if (player.speed < 0) {
                        player.stop();
                    }
                    break;  
                    
                case 32: // spacebar for jump
                // console.log("space up");
                case 38:
                    break;
            }
        });
    }
}
module.exports = Controller;