const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 5;

const background = new Image();
background.src = '../background_hills.jpg';

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  

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
                gameOver.src = "../game_over.png";
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
