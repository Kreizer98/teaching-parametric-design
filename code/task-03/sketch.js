function setup() {
  createCanvas(400, 400);
  background("white");
  colorMode(HSL);
}

// The amount in PX the verticies travel
let locationJitter = 70;

function positiveOrNegative() {
  return Math.round(Math.random()) == 0 ? -1 : 1 // if 0 -> -1, if 1 -> 1 
}

function randomDistance() {
  return Math.random() * locationJitter * positiveOrNegative();
}


// animation speed in seconds
let animationSpeed = 2;
// curveVertex Point Quantity for for-loops
let numberOfPoints = 4;

// Counter for new point-generation
let frameCounter = animationSpeed * 60;

let x = []
let y = []
let currentColor = 0
const baseColor = 50;

const baseValues = [
  {x: 200, y: 100},
  {x: 100, y: 200},
  {x: 200, y: 300},
  {x: 300, y: 200}
]

let anticipatedColor;

let anticipatedValues = [
  {x: 200, y: 100},
  {x: 100, y: 200},
  {x: 200, y: 300},
  {x: 300, y: 200}
]

function draw() {

  // Update Anticipated Values after the time of animationSpeed is over
  if(frameCounter == animationSpeed * 60) {

    // Update Anticipated Vertex Positions
    for (let i = 0; i < numberOfPoints; i++) {
      anticipatedValues[i].x = baseValues[i].x + randomDistance()
      anticipatedValues[i].y = baseValues[i].y + randomDistance()
    }

    // Update Anticipated Color
    anticipatedColor = Math.random() * 255

    frameCounter = 0;
  }

  function updatePosition() {
    // console.log("update position")
    for (let i = 0; i < numberOfPoints; i++) {

      if(x[i] == undefined) {
        x[i] = baseValues[i].x
        y[i] = baseValues[i].y
      }

      // console.log(`Current X: ${x[i]} - Anticipated X: ${anticipatedValues[i].x} - Addition: ${(x[i] - anticipatedValues[i].x)}`)
      x[i] = x[i] + (x[i] - anticipatedValues[i].x) / (frameCounter - animationSpeed * 60)
      y[i] = y[i] + (y[i] - anticipatedValues[i].y) / (frameCounter - animationSpeed * 60)
      
    }

    currentColor = currentColor + (currentColor - anticipatedColor) / (frameCounter - animationSpeed * 60)
  }

  updatePosition();

  strokeWeight(4);
  fill(currentColor, 50, 60);
  
  clear()
  beginShape();

  curveVertex(x[3],y[3]);
  curveVertex(x[0],y[0]);
  curveVertex(x[1],y[1]);
  curveVertex(x[2],y[2]);
  curveVertex(x[3],y[3]);
  curveVertex(x[0],y[0]);
  curveVertex(x[1],y[1]);
        
  endShape();
      

  frameCounter++;
}
