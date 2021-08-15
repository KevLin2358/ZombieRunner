const Game = require("./scripts/game");
// const View = require("./view");

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const game = new Game(canvas, ctx);
});