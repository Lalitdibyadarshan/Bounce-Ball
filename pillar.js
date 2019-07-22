function Pillar() {
    this.pillerWidth = 20;
    this.pillerHeight1 = Math.random() * (canvas.height / 2 - 0);
    this.pillerHeight2 = Math.random() * (canvas.height - canvas.height / 2);
    this.x = canvas.width - this.pillerWidth - 50;
    this.y1 = 0;
    this.y2 = canvas.height - this.pillerHeight2;
    this.dx = 4

}

Pillar.prototype.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y1, this.pillerWidth, this.pillerHeight1);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "violet";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(this.x, this.y2, this.pillerWidth, this.pillerHeight2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "violet";
    ctx.stroke();
}

Pillar.prototype.update = function() {
    this.x -= this.dx;

    if(this.x<= 0) {
        this.x = canvas.width - this.pillerWidth - 50;
        this.pillerHeight1 = Math.random() * (canvas.height / 2 - 0);
        this.pillerHeight2 = Math.random() * (canvas.height - canvas.height / 2);
        this.y2 = canvas.height - this.pillerHeight2;
    }
}
