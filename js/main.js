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

    //background
    bgPic = new Image();
    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can2.height;

    ane
    ane = new aneObj();
    ane.init();
}

function gameloop(){
    requestAnimFrame(gameloop);//setInterval,setTimeout

    //compute gameloop time
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();
    ane.draw();
}
