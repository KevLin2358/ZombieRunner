class Controller{
    constructor(player){
        
        document.addEventListener('keydown', (e) =>{
            console.log(e);
            switch(e.keycode){
                case 68: // d button to move right
                    player.moveRight();
                    break;

                case 65: // a button to move left
                    player.moveLeft();
                    break;

                case 32: // spacebar for jump
                    if(!player.jump){
                        player.jump = true;
                        player.jump();
                    }
                    break;
            }
        });

        document.addEventListener('keyup', (e) =>{
            switch(e.keycode){
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
                    if(player.in_air < 0) player.fall();
                    break;
            }
        });

    }
}
module.exports = Controller;