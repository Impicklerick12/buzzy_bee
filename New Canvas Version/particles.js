const particlesArray = [];

class Particle {
    constructor() {
        this.x = bee.x;
        this.y = bee.y;
        this.size = Math.random() * 2 + 3;
        this.speedY = (Math.random() * 2) - 0.5;
    }
    update() {
        this.x -= gameSpeed;
        this.y += this.speedY
    }
    draw() {
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 400);
        my_gradient.addColorStop(0, "yellow");
        my_gradient.addColorStop(1, "orange");
        ctx.fillStyle = my_gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    particlesArray.unshift(new Particle);
    for (i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    if (particlesArray.length > 200) {
        for (let i = 0; i< 20; i++) {
            particlesArray.pop(particlesArray[i]);
        }
    }
}