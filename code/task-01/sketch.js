function setup() {
  createCanvas(400, 400);
  background('red');
  frameRate(2); //set framerate to 2 = drawfunction is slower
}

function draw() {  
  let words = ['green', 'haus', 'Baum']; //define used words
  let word = random(words); // select word
  fill(random(124), random(252), random(0)); //radom Farbwahl from 0 to 124,252,0
  rect(random(400), random(400), 55, 55, 20);
  circle(random(400), random(400), 20, 20, 20);
  line(random(350),random(350),random(100),random(200));
  stroke(136);
  textSize(random(70)); //max size up to 70
  text(word, random(400), random(400)); // write word down inside 400x400
}

function mousePressed() { //reset
 //setTimeout(mousePressed,2000); //reset happens after click every 9 sec
  createCanvas(400, 400);
  background('red');
}
