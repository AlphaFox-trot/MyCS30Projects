// Creeper
// Andrew
// Feb 28, 2019

let x, y;
let size;
let movement;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  x = windowWidth / 2;
  y = windowHeight / 2;
  size = 20;
}

function draw() {
  fill (200, 20, 225);
  ellipse(x, y, size);
  movement = random(0, 10);

  if (movement <= 2){
    x = x - 20;
  }
  else if (movement <= 4){
    y = y - 20;
  }

  if (size >= 5){
    size -= 0.5;
  }
}
