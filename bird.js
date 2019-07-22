function Bird() {
    this.x = 70;
    this.y = 40;
    this.radius = 15;
    this.upliftVal = 0;
    this.dy = 3;
    this.gravity = 0.02;
    
}

Bird.prototype.draw = function() {

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //ctx.rect(this.x, this.y, 35, 35);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

}

Bird.prototype.update = function() {
    this.y += this.dy;
    if(this.y + this.radius >= canvas.height ) {
        this.y = canvas.height - this.radius;
        this.dy = 0;
    }
    else {
        //this.dy += this.gravity ;
       
    }

}

Bird.prototype.uplift = function() {    
        bird.y -= 50;
        bird.dy = 3;
}
