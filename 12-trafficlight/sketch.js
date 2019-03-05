// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let timer;
let state;

function setup() {
  createCanvas(600, 600);
  state = 1;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  timer = second();
  checkState();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function checkState() {
  if (timer === 0){
    if (state === 1){
      state = 2;
      fill(0, 225, 0);
      ellipse(width/2, height/2 - 65, 50, 50);
    }
    else if (state === 2){
      state = 3;
      fill(110, 110, 0);
      ellipse(width/2, height/2, 50, 50);
    }
    else if (state === 3){
      state = 1;
      fill(225, 0, 0);
      ellipse(width/2, height/2 + 65, 50, 50);
    }
  }
}

