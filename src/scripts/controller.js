class Controller{
    constructor(player){

        document.addEventListener('keydown', (e) =>{
            switch(e.keyCode){
                case 68: // d button to move right
                    player.moveRight();
                    break;

                case 65: // a button to move left
                    player.moveLeft();
                    break;

                case 32: // spacebar for jump
                console.log("space down");
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
                    if (player.speed > 0) {
                        player.stop();
                        player.fall();
                    }
                    break;
                    
                case 65: // a button to move left
                    if (player.speed < 0) {
                        player.stop();
                        player.fall();
                    }
                    break;

                case 32: // spacebar for jump
                console.log("space up");
                    if(player.in_air < 0) {
                        player.fall();
                    }
                    break;
            }
        });
    }
}
module.exports = Controller;