// Pipe Screen
// Andrew Bertrand
// Feb 15, 2019

let x;
let y;
let controll;
let direction;
let sizeX;
let sizeY;
let colour1;
let colour2;
let colour3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 200;
  background(220);
  direction = 1;
}

function draw() {
  fill(colour1, colour2, colour3);
  ellipse(x, y, 30, 30);
  controll = random(0, 200);
  if (controll <= 1){
    colour1 = random(0, 225);
    colour2 = random(0, 225);
    colour3 = random(0, 225);
  }
  else if (controll <= 2){
    direction = 1;
  }
  else if (controll <= 3){
    direction = 2;
  }
  else if (controll <= 4){
    direction = 3;
  }
  else if (controll <= 5){
    direction = 4;
  }

  if (y <= 30 || y >= windowHeight - 30){
    if (direction == 3){
      direction = 1
    }
    else{
      direction = 3
    }
  }
  if (x <= 30 || x >= windowWidth - 30){
    if (direction == 2){
      direction = 4
    }
    else{
      direction = 2
    }
  }

  if (direction == 1){
    y = y - 5
  }
  if (direction == 2){
    x = x + 5
  }
  if (direction == 3){
    y = y + 5
  }
  if (direction == 4){
    x = x - 5
  }
}
