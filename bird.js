export default function Bird(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 70;
    this.y = 40;
    this.radius = 15;
    this.upliftVal = 0;
    this.dy = 3;
    this.gravity = 0.02;
    
}

Bird.prototype.draw = function() {

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //this.ctx.rect(this.x, this.y, 35, 35);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();

}

Bird.prototype.update = function() {
    this.y += this.dy;
    if(this.y + this.radius >= this.canvas.height ) {
        this.y = this.canvas.height - this.radius;
        this.dy = 0;
    }
    else {
        //this.dy += this.gravity ;
       
    }

}

Bird.prototype.uplift = function() {    
        this.y -= 50;
        this.dy = 3;
}
