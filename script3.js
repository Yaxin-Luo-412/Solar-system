 window
        

           
            function RandomPosition() {
                let num1 = Math.random() * 45;
                let x1 = (Math.random() > 0.5 ? 1 : -1) * num1 - 4 / 2;
                let y1 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(45 * 45 - num1 * num1) - 4 / 2;
                let shui = document.getElementsByClassName('Mercury-System')[0].style;
                shui.marginTop = x1 + 1 / 2 + 'px';
                shui.marginLeft = y1 + 1 / 2 + 'px';
                shui.transformOrigin = (-y1) + 'px ' + (-x1) + 'px';

                let num2 = Math.random() * 60;
                let x2 = (Math.random() > 0.5 ? 1 : -1) * num2 - 8 / 2;
                let y2 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(60 * 60 - num2 * num2) - 8 / 2;
                let jin = document.getElementsByClassName('Venus-System')[0].style;
                jin.marginTop = x2 + 'px';
                jin.marginLeft = y2 + 'px';
                jin.transformOrigin = (-y2) + 'px ' + (-x2) + 'px';

                let num3 = Math.random() * 90;
                let x3 = (Math.random() > 0.5 ? 1 : -1) * num3 - 16 / 2;
                let y3 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(90 * 90 - num3 * num3) - 16 / 2;
                let di = document.getElementsByClassName('Earth-System')[0].style;
                di.marginTop = x3 + 'px';
                di.marginLeft = y3 + 'px';
                di.transformOrigin = (-y3) + 'px ' + (-x3) + 'px';

                let num4 = Math.random() * 120;
                let x4 = (Math.random() > 0.5 ? 1 : -1) * num4 - 16 / 2;
                let y4 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(120 * 120 - num4 * num4) - 16 / 2;
                let huo = document.getElementsByClassName('Mars-System')[0].style;
                huo.marginTop = x4 + 'px';
                huo.marginLeft = y4 + 'px';
                huo.transformOrigin = (-y4) + 'px ' + (-x4) + 'px';

                let num5 = Math.random() * 190;
                let x5 = (Math.random() > 0.5 ? 1 : -1) * num5 - 40 / 2;
                let y5 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(190 * 190 - num5 * num5) - 40 / 2;
                let mu = document.getElementsByClassName('Jupiter-System')[0].style;
                mu.marginTop = x5 + 'px';
                mu.marginLeft = y5 + 'px';
                mu.transformOrigin = (-y5) + 'px ' + (-x5) + 'px';

                let num6 = Math.random() * 240;
                let x6 = (Math.random() > 0.5 ? 1 : -1) * num6 - 24 / 2;
                let y6 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(240 * 240 - num6 * num6) - 24 / 2;
                let tu = document.getElementsByClassName('Satur-System')[0].style;
                tu.marginTop = x6 + 'px';
                tu.marginLeft = y6 + 'px';
                tu.transformOrigin = (-y6) + 'px ' + (-x6) + 'px';

                let num7 = Math.random() * 290;
                let x7 = (Math.random() > 0.5 ? 1 : -1) * num7 - 20 / 2;
                let y7 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(290 * 290 - num7 * num7) - 20 / 2;
                let tian = document.getElementsByClassName('Uranus-System')[0].style;
                tian.marginTop = x7 + 'px';
                tian.marginLeft = y7 + 'px';
                tian.transformOrigin = (-y7) + 'px ' + (-x7) + 'px';

                let num8 = Math.random() * 340;
                let x8 = (Math.random() > 0.5 ? 1 : -1) * num8 - 18 / 2;
                let y8 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(340 * 340 - num8 * num8) - 18 / 2;
                let hai = document.getElementsByClassName('Neptune-System')[0].style;
                hai.marginTop = x8 + 'px';
                hai.marginLeft = y8 + 'px';
                hai.transformOrigin = (-y8) + 'px ' + (-x8) + 'px';
            }

          
    

var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width =  window.innerWidth,
  h = canvas.height = window.innerHeight,

  hue = 220,
  stars = [],
  count = 0,
  maxStars = 150;//star 

var canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#CCC');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();



function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
  //vlue more star more，
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(30, this.orbitRadius) / 9; 
  //star size
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 50000; 
  //star speed
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.5; //tail
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };

  window.requestAnimationFrame(animation);
}

animation();