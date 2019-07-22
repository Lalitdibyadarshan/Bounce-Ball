var canvas = document.getElementById('playGround');
canvas.width = window.innerWidth;
canvas.height  = window.innerHeight - 20;

var ctx = canvas.getContext('2d');
var frameCount = 100;
var pillars = [];
var bird = new Bird();

pillars[0] = new Pillar();


function init() {
    
    requestAnimationFrame(init);
    if(frameCount === 0) {
        frameCount = 100;
        pillars.push(new Pillar());  
    }

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    bird.update();
    bird.draw();
    for (let i = 0; i < pillars.length; i++) {
        pillars[i].update();
        if(pillars[i].x <= 10) {
            pillars.splice(i, 1);
        }
        pillars[i].draw();
        if(collision(bird, pillars[i])) {
            alert("GAME OVER");
            location.reload();
        }
    }
    frameCount -= 1;
}

function collision(bird, pillar) {
    if((bird.y + bird.radius > pillar.y2 || bird.y - bird.radius < pillar.y1 + pillar.pillerHeight1) && (pillar.x - bird.x - bird.radius < 0)) {
        
        return true;
    }
    return false;
}

init();

