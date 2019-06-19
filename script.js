/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  };

  this.moveRight = function(){
    this.left += 50;
  };
  this.moveLeft = function () {
    this.left -= 50;
  };
  this.moveUp = function () {
    this.top -= 50;
  };
  this.moveDown = function () {
    this.top += 50;
  }
}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    if(hero.top===20)
      hero.moveRight();
    }

  else if (hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }
  if(hero.top >= window.innerHeight - hero.size&&hero.left>=80){
    hero.moveLeft();
  }
  if(hero.top>20){
    if(hero.left===80){
      hero.moveUp();
    }
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100);
}

start();