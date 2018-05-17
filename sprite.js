function Sprite() {
  this.x = 245;
  this.y = 450;
  this.larg = 20;
  this.alt = 20;

  this.vx = 0;
  this.vy = 0;

  this.ax = 0;
  this.ay = 0;

  this.cor = "#4169E1";

  this.ang = 270;
}

Sprite.prototype.desenhar = function(ctx) {
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.ang*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(-this.larg/2, -this.alt/2);
  ctx.lineTo(-this.larg/2, +this.alt/2);
  ctx.lineTo(+this.larg/2 + 10, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if(this.debug)
  {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(-this.larg/2, -this.alt/2, this.larg, this.alt);
  }
  ctx.restore();
}

Sprite.prototype.mover = function(dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}

Sprite.prototype.impoeLimites = function (x, y, w, h) {
  if(this.x < x)
  {
    this.x = x;
    this.vx = 0;
  }
  if(this.x + this.larg > x + w)
  {
    this.x = x + w - this.larg;
    this.vx = 0;
  }
  if(this.y < y)
  {
    this.y = y;
    this.vy = 0;
  }
  if(this.y + this.alt > y + h)
  {
    this.y = y + h - this.alt;
    this.vy = 0;
  }
}
