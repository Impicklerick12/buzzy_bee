// Declaring varaibles for html elements
var pipe = document.getElementById('pipe');
var hole = document.getElementById('hole');
var bee = document.getElementById('bee');
var jump = 0;
var counter = 0;

// Function to assign a random position for the hole in each pole animation
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 400) + 200);
    hole.style.top = random + "px";
    counter++;
})

// Gravity function (setInterval)
setInterval(function(){
    let beeTop = parseInt(window.getComputedStyle(bee).getPropertyValue('top'));
    if(jump == 0) {
        bee.style.top = (beeTop + 3) + "px";
    }
    var pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));
    console.log(`PipeLeft is ${pipeLeft}`);

    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    var bTop = -(741 - beeTop);
    if((beeTop > 695) || ((pipeLeft < 217) && (pipeLeft > 147) && ((bTop < holeTop) || (bTop > holeTop + 150)))){
        alert('Game Over. Score: ' + (counter -1));
        bee.style.top = 330 + 'px';
        counter = 0;
    }
},10)

// Jump function
function jumping() {
    jump = 1;
    let jumpCount = 0;

    var jumpInterval = setInterval(function() {

        beeTop = parseInt(window.getComputedStyle(bee).getPropertyValue('top'));
        
        if((beeTop > 50) && (jumpCount < 15)) {
            bee.style.top = (beeTop - 5) + "px";
        }
        // JumpCount keeps track of mouse clicks to prevent player going above screen
        if(jumpCount > 20) { 
            clearInterval(jumpInterval);
            jump = 0
            ;
            jumpCount = 0;
        }

        jumpCount++;
    },10)
}




    // setInterval(function() {
    //     draw();
    //     move();
    // }, 1000 / FPS)

