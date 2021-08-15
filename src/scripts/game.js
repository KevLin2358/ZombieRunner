const Player = require("./player");
const Platforms = require("./platform");
class Game{
    constructor(canvas, ctx){
        this.player = new Player(canvas, ctx);
        this.platforms = new Platforms(ctx);
        this.render();
    }

    render(){
        this.platforms.drawPlatforms();
        this.player.drawPlayer();
    }

}

module.exports = Game;