class Platforms{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;

        this.groundImg = new Image();
        this.groundImg.src = 'src/images/sand.png';
        this.groundWidth = 1913;
        this.groundHeight = 139;

        this.xw = this.x + this.width;
    }

    drawPlatforms(ctx){
        // ctx.drawImage(image, 
        // imageX, imageY, platWidth, platHeight, 
        // this.x, this.y, this.width, this.height);
        
        ctx.drawImage(this.groundImg, 
            0, 0, this.groundWidth, this.groundHeight, 
            this.x, this.y, this.width, this.height);

    }
    
}

module.exports = Platforms;