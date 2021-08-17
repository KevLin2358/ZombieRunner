class Platforms{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.xw = this.x + this.width;
    }

    drawPlatforms(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

module.exports = Platforms;