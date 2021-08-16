class Platforms{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawPlatforms(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

// plat = [];
// // Platform Objects
// plat.push (ground = {
//     x: 0,
//     y: 470,
//     width: 1000,
//     height: 30,
//     color: '#155261'
// });

// plat.push(plat1 ={
//     x: 350,
//     y: 400,
//     width: 100,
//     height: 10,
//     color: 'brown'
// })


module.exports = Platforms;