// Idle TD
// Andrew
// 3 8, 2019

let view;
let mine, forest, farm, quarry;
let ore, wood, wheat, stone;
let rectX, rectY, rectWidth, rectHeight;

function setup() {
  createCanvas(600, 600);
  view = "menu";
  mine = 0;
  forest = 1;
  farm = 1;
  quarry = 0;
  ore = 0;
  rectX = 300;
  rectY = 500;
  rectWidth = 400;
  rectHeight = 150;
}

function draw() {
  background(220);
  if (view === "menu"){
    rectMode(CENTER);
    fill (0, 225, 0);
    rect(rectX, rectY, rectWidth, rectHeight);
  }
  else if (view !== "menu"){
    gatherResources ();
  }
  if (view === "field"){
    rectMode(CENTER);
    fill(0, 150, 0);
    rect(300, 300, 600, 600);
  }
}

function gatherResources(){
  ore = ore + mine;
  wood = wood + forest;
  wheat = wheat + farm;
  stone = stone + quarry;
}

function mouseDown (){
  if (view === "menu" && mouseX >= rectX - rectWidth / 2 && mouseX <= rectX + rectWidth / 2 && mouseY >= rectY - rectHeight / 2 && mouseY <= rectY + rectHeight / 2){
    view = "field";

  }
}