// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colour, name;
let event, level;
let power;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && colour === name && event === "normal") {
    progress();
  } 
  else if (keyCode === RIGHT_ARROW && colour !== name && event === "normal") {
    progress();
  }
}

function progress(){
  level ++;
  event = random (0, 6);
  if (event === 5){
    power = 0;
  }
}

function mousePressed(){
  if(power >= 10){
    power++;
  }
}