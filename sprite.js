function Sprite() {
  //Sprite principal
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

  //Sprites inimigos
  this.ex = 100;
  this.ey = 0;
  this.elarg = 20;
  this.ealt = 20;
  this.evx = 0;
  this.evy = 250;
  this.eax = 0;
  this.eay = 0;
  this.ecor = "#DC143C";
  this.eang = 90;
  this.eQuant = 0;
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

Sprite.prototype.desenharInimigo = function(ctx) {
  ctx.fillStyle = this.ecor;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.save();
  ctx.translate(this.ex, this.ey);
  ctx.rotate(this.eang*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(-this.elarg/2, -this.ealt/2);
  ctx.lineTo(-this.elarg/2, +this.ealt/2);
  ctx.lineTo(+this.elarg/2 + 10, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if(this.debug)
  {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.strokeRect(-this.elarg/2, -this.ealt/2, this.elarg, this.ealt);
  }
  ctx.restore();
}

Sprite.prototype.mover = function(dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}

Sprite.prototype.moverInimigos = function(dt) {
  //this.ex = this.ex + this.evx*dt;
  this.ey = this.ey + this.evy*dt;
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
