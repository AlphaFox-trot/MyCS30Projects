// Pipe Screen
// Andrew Bertrand
// Feb 15, 2019

let x;
let y;
let direction;
let size;
let colour1;
let colour2;
let colour3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 200;
  size = 50;
  background(220);
  direction = 1;
}

function draw() {
  fill(colour1, colour2, colour3);
  ellipse(x, y, size, size);
  if  (keyIsPressed){
    if (key === 'w'){
      if (y >= 0 + (size/2)){
        y = y - 5;
      }
    }
    if (key === 'a'){
      if (x >= 0 + (size/2)){
        x = x - 5;
      }
    }
    if (key === 's'){
      if (y <= windowHeight - (size/2)){
        y = y + 5;
      }
    }
    if (key === 'd'){
      if (x <= windowWidth - (size/2)){
        x = x + 5;
      }
    }
    if (key === 'q'){
      size--;
    }
    if (key === 'e'){
      size++;
    }
  }
}

