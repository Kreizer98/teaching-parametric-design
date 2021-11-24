let step = 20;

function setup() {
	createCanvas(400, 400, SVG);
	background(255);
	stroke('red');
	strokeWeight(1);

	for (let x = 0; x < width; x += step) {
	 	for (let y = 0; y < height; y += step) {
	 		drawDiagonal(x, y, step, step);
	 	}
  }
	translate(60,60)
	for (let i = 0; i < 6; i++){
      console.log(round(random(20)))
		let rectX = width / step * round(random(15))
		let rectY = height / step * round(random(15))
        
        
      stroke(0)
      strokeWeight(5)
      
      strokeWeight(2)
        // square(rectX, rectY, 20)
      
      beginShape();
      vertex(rectX, rectY);
      vertex(rectX+20, rectY+20);
      vertex(rectX+40, rectY);
      vertex(rectX+20, rectY-20);
      endShape(CLOSE);
      
	}
	
	//save();
}

function draw() {


}

function drawDiagonal(x, y, w, h) {
	if (random(1) >= 0.5) {
		line(x, y, x + w, y + h);
	} else {
		line(x + w, y, x, y + h);
	}
}