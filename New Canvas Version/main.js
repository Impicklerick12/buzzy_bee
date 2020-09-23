const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

const background = new Image();
background.src ='./background_hills.jpg';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
function scrollBackground() {
    if(BG.x1 <= -BG.width + gameSpeed) BG.x1 = BG.width;
    else BG.x1 -= gameSpeed + -1.7;
    if(BG.x2 <= -BG.width + gameSpeed) BG.x2 =BG.width;
    else BG.x2 -= gameSpeed + -1.7;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height)
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height)
}

const fence = new Image();
fence.src ='./fence.png';
const FG = {
    x1: 0,
    x2: canvas.width,
    y: 300,
    width: canvas.width,
    height: 140
}
function scrollFence() {
    if(FG.x1 <= -FG.width) FG.x1 = FG.width;
    else FG.x1 -= gameSpeed + -1.4;
    if(FG.x2 <= -FG.width) FG.x2 = FG.width;
    else FG.x2 -= gameSpeed + -1.4;
    ctx.drawImage(fence, FG.x1, FG.y, FG.width, FG.height)
    ctx.drawImage(fence, FG.x2, FG.y, FG.width, FG.height)
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scrollBackground();
    scrollFence();

    handleObstacles();
    
    bee.update();
    bee.draw();
    
    handleParticles();

    // ctx.fillStyle = "red";
    // ctx.font = "90px Georgia";
    // ctx.strokeText(score, 450, 70);
    // ctx.fillText(score, 450, 70);

    handleCollisions();
    if (handleCollisions()) return;

    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}
animate();

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') spacePressed = true;
    
});
window.addEventListener('keyup', function(e) {
    if (e.code === 'Space') spacePressed = false;
});

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bee.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            bee.x + bee.width > obstaclesArray[i].x && 
            ((bee.y < 0 + obstaclesArray[i].top && bee.y + bee.height > 0) ||
            (bee.y > canvas.height - obstaclesArray[i].bottom && 
            bee.y + bee.height < canvas.height))) {
                
                // collision detected
                const gameOver = new Image();
                gameOver.src = "./game_over.png";
                gameOver.onload = function() {
                    ctx.drawImage(gameOver, 155, 100, 300, 180);
                }

                ctx.font = "25px Arial";
                ctx.fillStyle = "orange";
                ctx.fillText("Your score is: " + score, 220, 320);

                return true
            }
    }
}




