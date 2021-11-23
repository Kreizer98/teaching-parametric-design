function setup() {
    createCanvas(400, 400);
    background(220);
    
    let squareSize = 40
    
    colorMode(RGB, 90)
    
    noStroke()
    let currentColor = 0
    let reverseColor = 80
    
    for(let x = 0; x < width; x += squareSize){
      reverseColor = 80
      for(let y = 0; y < height; y += squareSize){
        if(y >= height-x) {
          fill(reverseColor)
          reverseColor -= 10
        } else {
          fill(currentColor, currentColor, currentColor)        
        }
        square(x, y, squareSize)
        
        currentColor = currentColor >= 90 ? 0 : currentColor + 10
      }
      currentColor = currentColor + 10
    }
   //save();
  }
   
  function draw() {
  }