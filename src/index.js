const Game = require("./scripts/game");
const Platforms = require("./scripts/platform");
const Player = require("./scripts/player");
// const View = require("./view");

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const game = new Game(canvas, ctx);
});