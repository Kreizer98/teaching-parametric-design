var angle = 1.0;
var offset = 18;
var scalar = 3.5;
var speed = 0.1;
var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() { 
  createCanvas(400, 400);
  noStroke();
  background (0);
} 

function draw() { 
  col.r = random(0, 100);
  col.g = random(0, 150);
  col.b = random(100, 150);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  noStroke();
  scale(10);
  rect(x, y, 5, 5);
  angle += speed;
  scalar += speed;
  
}


// gezogen von hier, bin aber leider nicht weitergekommen, wüsste nicht wie ich den Abstand zwischen den rects einstellen würde.
// https://editor.p5js.org/hyershin/sketches/SkG_S5K3W