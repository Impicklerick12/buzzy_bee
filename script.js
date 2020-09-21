var canvas;
var ctx;
var playerX = 0;


window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(230, 330, 40, 40);
    const FPS = 30;
    setInterval(draw, 1000 / FPS)
}

function draw() {
    playerX = playerX + 20;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, 330, 40, 40);
    console.log(playerX);  
}