// Platform Objects
ground ={
    x: 0,
    y: 470,
    width: 1000,
    height: 30,
    color: '#155261'
};

plat1 ={
    x: 50,
    y: 80,
    width: 50,
    height: 30,
    color: 'yellow'
}

plat2 ={
    x: 50,
    y: 300,
    width: 50,
    height: 30,
    color: 'red'
}

plat3 ={
    x: 50,
    y: 270,
    width: 50,
    height: 30,
    color: 'blue'
}

plat4 ={
    x: 100,
    y: 370,
    width: 50,
    height: 10,
    color: 'black'
}

let plat = [];
plat.push(ground, plat1, plat2, plat3, plat4);

// platform class with functions
class Platforms{
    constructor(ctx){
        this.ctx = ctx;
        this.drawPlatforms();
    }

    drawPlatforms(){
            for (var i = 0; i < plat.length; i++) {
                this.ctx.fillStyle = plat[i].color;
                this.ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
            }
    }
}

module.exports = Platforms;