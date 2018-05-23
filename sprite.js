function Sprite() {
  //Sprite principal
  this.x = 245;
  this.y = 450;
  this.larg = 32;
  this.alt = 32;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.cor = "#4169E1";
  this.ang = 270;

  //Sprites inimigos
  this.ex = 100;
  this.ey = 0;
  this.elarg = 32;
  this.ealt = 32;
  this.evx = 0;
  this.evy = 200;
  this.eax = 0;
  this.eay = 0;
  this.ecor = "#DC143C";
  this.corTiro = "yellow";
  this.eang = 90;
  this.eQuant = 0;

  //Sprite vida
  this.corVida = "#00FF00";
}

Sprite.prototype.desenhar = function(ctx, key) {
  //ctx.fillStyle = this.cor;
  //ctx.fillRect(this.x,this.y, this.larg, this.alt);
  ctx.drawImage(key, this.x, this.y);
}

Sprite.prototype.desenharTiro = function(ctx, key) {
  ctx.fillStyle = this.cor;
  ctx.fillRect(this.x + 14,this.y, 5, 20);
}

Sprite.prototype.desenharInimigo = function(ctx, key) {
  ctx.drawImage(key, this.ex, this.ey);
}

Sprite.prototype.desenharVida = function(ctx, key) {
  ctx.drawImage(key, this.ex, this.ey);
}

Sprite.prototype.desenharEspecialTiro = function(ctx, key) {
  //ctx.fillStyle = "yellow";
  //ctx.fillRect(this.ex,this.ey, 20, 20);
  ctx.drawImage(key, this.ex, this.ey);
}

Sprite.prototype.mover = function(dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}

Sprite.prototype.moverInimigos = function(dt) {
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

Sprite.prototype.acertou = function (alvo)
{
  if (alvo.ex + alvo.elarg < this.x + 15) return false;
  if (alvo.ex > this.x + 15 + this.larg) return false;
  if (alvo.ey + alvo.ealt < this.y) return false;
  if (alvo.ey > this.y + this.alt) return false;

  return true;
}

Sprite.prototype.colidiuCom = function (alvo) {
  if (alvo.x + alvo.larg < this.ex) return false;
  if (alvo.x > this.ex + this.elarg) return false;
  if (alvo.y + alvo.alt < this.ey) return false;
  if (alvo.y > this.ey + this.ealt) return false;

  return true;

}

Sprite.prototype.limiteInimigos = function (x, y, w, h) {
  if(this.ey > h)
  {
    return true;
  }
}

Sprite.prototype.limiteTiros = function (x, y, w, h) {
  if(this.y < -100 ) return true;
}
