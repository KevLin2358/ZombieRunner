// const Zombie = require("./zombie");
// const Player = require("./player");

const Player = require("./player");
const Platforms = require("./platform");
class Game{
    constructor(ctx){
        const player = new Player(ctx);
        const platforms = new Platforms(ctx);
    }
}

module.exports = Game;