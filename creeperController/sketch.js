// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = windowWidth;
let y = windowHeight;
let location = [x, y];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  for(let i; i < 10; i++){
    fill(200, 20, 225);
    ellipse(5, 5, x, y);
    x = windowWidth +- 2.5;
    y = windowHeight +- 2.5;
  }
}
