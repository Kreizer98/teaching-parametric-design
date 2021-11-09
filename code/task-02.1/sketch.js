const sketchWidth = 400;
const sketchHeight = 400;

let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2","red"];

function setup () {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(2);
}

function draw () {
  // background(random(100, 255), random(100, 200), 255);
  background(random(myColors));// choose mycolors from array 
  
  // we add a random number as the distance to the next rectangle
  for(let y = 0; y < sketchHeight; y += random(10, 15)) {
    const rectHeight = random(5, 9);
    fill(random(0,255));
    rect(0, y, sketchWidth, rectHeight);
    // next we add the random height of the last rectangle
    y += rectHeight;
  }
  
  for(let x = 0; x < sketchWidth; x += random(10, 15)) {
    const rectWidth = random(5, 9);
    fill(random(0,255));
    rect(x, 0,  rectWidth,sketchHeight);
    // next we add the random width of the last rectangle
    x += rectWidth;
  }
 
}