export default function Pillar(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pillerWidth = 20;
    this.pillerHeight1 = Math.random() * (this.canvas.height / 2 - 0);
    this.pillerHeight2 = Math.random() * (this.canvas.height - this.canvas.height / 2);
    this.x = this.canvas.width - this.pillerWidth - 50;
    this.y1 = 0;
    this.y2 = this.canvas.height - this.pillerHeight2;
    this.dx = 4

}

Pillar.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y1, this.pillerWidth, this.pillerHeight1);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.strokeStyle = "violet";
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y2, this.pillerWidth, this.pillerHeight2);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.strokeStyle = "violet";
    this.ctx.stroke();
}

Pillar.prototype.update = function() {
    this.x -= this.dx;

    if(this.x<= 0) {
        this.x = this.canvas.width - this.pillerWidth - 50;
        this.pillerHeight1 = Math.random() * (this.canvas.height / 2 - 0);
        this.pillerHeight2 = Math.random() * (this.canvas.height - this.canvas.height / 2);
        this.y2 = this.canvas.height - this.pillerHeight2;
    }
}