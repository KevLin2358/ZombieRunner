class Platforms{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;

        this.groundImg = new Image();
        this.groundImg.src = 'src/images/ground.png';
        this.imageWidth = 1912;
        this.imageHeight = 98;


        this.xw = this.x + this.width;
    }

    drawPlatforms(ctx){
        // ctx.drawImage(image, 
        // imageX, imageY, imageWidth, imageHeight, 
        // this.x, this.y, this.width, this.height);

        ctx.drawImage(this.groundImg, 
            0, 0, this.imageWidth, this.imageHeight, 
            this.x, this.y, this.width, this.height);
    }
    
}

module.exports = Platforms;