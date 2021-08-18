const itemsInfo = [
    {name: 'clock', color: 'blue'}, // slow down zombie
    {name: 'mult2', color: 'red'}, // multi + 0.2
    {name: 'mult3', color: 'purple'}, // multi + 0.3
    {name: '+1', color: 'yellow'}, // +1 score
    {name: '+5', color: 'pink'}, // + 5 score
    {name: '+10', color: 'grey'}, // +10 score
]
const xWidth = [100, 150, 200, 250, 300, 650, 700, 750, 800, 850, 900];
const yHeight = [290, 430, 190, 320];
class Item {
    constructor(){
        this.width = 30;
        this.height = 30;
        
        let items = itemsInfo;
        let ranNum = Math.floor(Math.random() * (items.length));
        this.randomItem = items[ranNum];
        this.name = this.randomItem.name;
        this.color = this.randomItem.color;

        let xh = xWidth;
        let yh = yHeight;
        let ranX = Math.floor(Math.random() * (xh.length));
        let ranY = Math.floor(Math.random() * (yh.length));
        this.x = xh[ranX]
        this.y = yh[ranY];
    }
    randomizePower(){
        let items = itemsInfo;
        let ranNum = Math.floor(Math.random() * (items.length));
        this.randomItem = items[ranNum];
        this.name = this.randomItem.name;
        this.color = this.randomItem.color;
    }
    randomizeSpawn(){
        let xh = xWidth;
        let yh = yHeight;
        let ranX = Math.floor(Math.random() * (xh.length));
        let ranY = Math.floor(Math.random() * (yh.length));
        this.x = xh[ranX]
        this.y = yh[ranY];
    }

    drawItem(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

module.exports = Item;