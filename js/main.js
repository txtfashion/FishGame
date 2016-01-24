var can1;
var ctx1;

var can2;
var ctx2;

var lastTime;
var deltaTime;

var bgPic;
var canWidth;
var canHeight;

var ane;
var fruit;
var mom;

var mx;
var my;

document.body.onload = game;

function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init(){
    //获取canvas context
    can1 = document.getElementById("canvas1");//finshes,dust,UI,circle
    ctx1 = can1.getContext("2d");

    can2 = document.getElementById("canvas2");//background,ane,fruits
    ctx2 = can2.getContext("2d");

    can1.addEventListener('mousemove',onMouseMove,false);

    //background
    bgPic = new Image();
    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can2.height

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;
}

function gameloop(){
    requestAnimFrame(gameloop);//setInterval,setTimeout

    //compute gameloop time
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();

    ane.draw();

    fruit.draw();
    fruitMonitor();

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
}

function onMouseMove(e){
    if (e.offSetX || e.layerX){
        mx = e.offSetX == undefined ? e.layerX : e.offSetX;
        my = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}
