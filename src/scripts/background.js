class Background {
    constructor(ctx, canvasWidth, canvasHeight){
        this.ctx = ctx;
        this.night = new Image();
        this.sky = new Image();
        this.night.src = 'src/images/night.png';
        this.sky.src = 'src/images/sky.png';
        
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.imageWidth = 1920;
        this.imageHeight = 1080;
    }
        // ctx.drawImage(image, 
        // imageX, imageY, platWidth, platHeight, 
        // this.x, this.y, this.width, this.height);
    renderDay(){
        this.ctx.drawImage(this.sky, 
            0, 0, this.imageWidth, this.imageHeight, 
            0, 0, this.canvasWidth, this.canvasHeight);
    }

    renderNight(){
        this.ctx.drawImage(this.night, 
            0, 0, this.imageWidth, this.imageHeight, 
            0, 0, this.canvasWidth, this.canvasHeight);
    }
}

module.exports = Background;