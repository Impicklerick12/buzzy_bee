class Bee {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 40;
        this.height = 40;
        this.weight = 1;
    }
    update() {
        let curve = Math.sin(angle) * 20;

        if (this.y > canvas.height - (this.height * 1.5) + curve) {
            this.y = canvas.height - (this.height * 1.5) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy
        }
        if (this.y < 0 + this.height) {
            this.y == 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.weight * 3) this.flap();
    }
    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        
        const bee = new Image();
        bee.src = './bee.png';
        ctx.drawImage(bee, this.x, this.y, 40, 40);
    }
    flap() {
        this.vy -= 2;
    }
}
const bee = new Bee();