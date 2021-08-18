const itemsInfo = [
    {name: 'snow', x: 306, y:442}, // slow down zombie
    {name: 'mult2', x: 272, y:476}, // multi + 0.2
    {name: 'mult3', x: 306, y:476}, // multi + 0.3
    {name: '+1', x: 0, y:0}, // +1 score
    {name: '+5', x: 34, y:0}, // + 5 score
    {name: '+10', x: 68, y:0}, // +10 score
]
const xWidth = [100, 150, 200, 250, 300, 650, 700, 750, 800, 850, 900];
const yHeight = [290, 430, 190, 320];
class Item {
    constructor(){
        this.width = 34;
        this.height = 34;

        this.items = itemsInfo;
        let ranNum = Math.floor(Math.random() * (this.items.length));
        this.randomItem = this.items[ranNum];
        this.name = this.randomItem.name;

        this.itemImg = new Image();
        this.itemImg.src = 'src/images/item.png';
        this.imageWidth = 34;
        this.imageHeight = 34;
        this.itemX = this.randomItem.x;
        this.itemY = this.randomItem.y;
        
        let xh = xWidth;
        let yh = yHeight;
        let ranX = Math.floor(Math.random() * (xh.length));
        let ranY = Math.floor(Math.random() * (yh.length));
        this.x = xh[ranX]
        this.y = yh[ranY];
    }
    randomizePower(){
        let ranNum = Math.floor(Math.random() * (this.items.length));
        this.randomItem = this.items[ranNum];
        this.name = this.randomItem.name;
        this.itemX = this.randomItem.x;
        this.itemY = this.randomItem.y;
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
        ctx.drawImage(this.itemImg, 
            this.itemX, this.itemY, this.imageWidth, this.imageHeight, 
            this.x, this.y, this.width, this.height);
    }
}

module.exports = Item;