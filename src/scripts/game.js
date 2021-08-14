// const Zombie = require("./zombie");
// const Player = require("./player");

const Player = require("./player");
const Platforms = require("./platform");
class Game{
    constructor(canvas, ctx){
        const player = new Player(canvas, ctx);
        const platforms = new Platforms(ctx);
    }
}

module.exports = Game;