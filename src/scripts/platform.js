class Platforms{
    constructor(){}

    drawPlatforms(ctx){
        for (var i = 0; i < plat.length; i++) {
            ctx.fillStyle = plat[i].color;
            ctx.fillRect(plat[i].x, plat[i].y, plat[i].width, plat[i].height);
        }
    }
}
// Platform Objects
ground ={
    x: 0,
    y: 470,
    width: 1000,
    height: 30,
    color: '#155261'
};

let plat = [];
plat.push(ground);


module.exports = Platforms;