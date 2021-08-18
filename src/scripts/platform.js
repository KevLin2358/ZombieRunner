class Platforms{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        this.x = x;
        this.y = y;

        this.groundImg = new Image();
        this.groundImg.src = 'src/images/road.png';
        this.groundWidth = 1920;
        this.groundHeight = 139;

        this.platImg = new Image();
        this.platImg.src = 'src/images/plat.png';
        this.platWidth = 1912;
        this.platHeight = 98;

        this.xw = this.x + this.width;
    }

    drawPlatforms(ctx){
        // ctx.drawImage(image, 
        // imageX, imageY, platWidth, platHeight, 
        // this.x, this.y, this.width, this.height);

        ctx.drawImage(this.platImg, 
            0, 0, this.platWidth, this.platHeight, 
            this.x, this.y, this.width, this.height);

    }

    drawGround(ctx){
        // ctx.drawImage(image, 
        // imageX, imageY, platWidth, platHeight, 
        // this.x, this.y, this.width, this.height);

        ctx.drawImage(this.groundImg, 
            0, 0, this.groundWidth, this.groundHeight, 
            this.x, this.y, this.width, this.height);

    }
    
}

module.exports = Platforms;