// Declaring varaibles for html elements
var pipe = document.getElementById('pipe');
var hole = document.getElementById('hole');
var bee = document.getElementById('bee');
var jump = 0;

// Function to assign a random position for the hole in each pole animation
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 400) + 200);
    hole.style.top = random + "px";
})

// Gravity function (setInterval)
setInterval(function(){
    let beeTop = parseInt(window.getComputedStyle(bee).getPropertyValue('top'));
    if(jump == 0) {
        bee.style.top = (beeTop + 3) + "px";
    }
},10)


// Jump function
function jumping() {
    jump = 1;
    let jumpCount = 0;

    var jumpInterval = setInterval(function() {
        
        beeTop = parseInt(window.getComputedStyle(bee).getPropertyValue('top'));
        bee.style.top = (beeTop - 5) + "px";
        
        // JumpCount keeps track of mouse clicks to prevent player going above screen
        if(jumpCount > 10) { 
            clearInterval(jumpInterval);
            jump = 0;
        }

        jumpCount++;
    },10)
}




    // setInterval(function() {
    //     draw();
    //     move();
    // }, 1000 / FPS)

