const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 2.7) + 20;
        this.bottom = (Math.random() * canvas.height / 2.7) + 20;
        this.x = canvas.width;
        this.width = 20;
        this.counted = false;
        // this.vx = 0;
    }
    draw() {
        ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, 0, this.width, this.top);
        // ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
        const vine = new Image();
        vine.src = '../vine.png';
        ctx.drawImage(vine, this.x, 0, this.width, this.top);
        ctx.drawImage(vine, this.x, canvas.height - this.bottom, this.width, this.bottom);
       
    }
    update() {  
        this.x -= gameSpeed;
        
        if (!this.counted && this.x < bee.x) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    if (frame % 75 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}

