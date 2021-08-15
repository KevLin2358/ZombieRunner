class Controller{
    constructor(player){

        document.addEventListener('keydown', (e) =>{
            console.log(e);
            switch(e.key){
                case "d": // d button to move right
                    player.moveRight();
                    break;

                case "a": // a button to move left
                    player.moveLeft();
                    break;

                case " ": // spacebar for jump
                    if(!player.is_jump){
                        player.is_jump = true;
                        player.jump();
                    }
                    break;
            }
        });

        document.addEventListener('keyup', (e) =>{
            switch(e.key){
                case "d": // d button to move right
                    if (player.speed > 0) {
                        player.stop();
                        player.fall();
                    }
                    break;
                    
                case "a": // a button to move left
                    if (player.speed < 0) {
                        player.stop();
                        player.fall();
                    }
                    break;

                case " ": // spacebar for jump
                    if(player.in_air < 0) {
                        player.fall();
                    }
                    break;
            }
        });

    }
}
module.exports = Controller;