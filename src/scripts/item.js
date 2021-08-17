const items = [
    {name: 'mult1', x: 0, y: 0, width: 20, height: 20}, // score multi x1.1
    {name: 'mult2', x: 0, y: 0, width: 20, height: 20}, // score multi x1.2
    {name: 'mult3', x: 0, y: 0, width: 20, height: 20}, // score multi x1.3
]


class Item {
    constructor(){

    }

    drawItem(ctx){
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

module.exports = Item;