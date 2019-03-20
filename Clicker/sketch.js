// Hax Simulator
// Felix
// March 15

let colour, name, chances;
let level, area, menu, lives, cash, price;
let timer;
let listColours = ["red", "blue", "green", "yellow", "purple", "cyan"];
let buttonX1, buttonX2, buttonY1, buttonY2;
let startLevel, extraCash, extraLives;

function setup() {
  createCanvas(windowWidth, windowHeight);
  menu = "main";
  buttonX1 = windowWidth/2;
  buttonX2 = windowWidth/2;
  buttonY1 = windowHeight/3;
  buttonY2 = windowHeight/1.5;
  startLevel = 1;
  extraCash = 1;
  extraLives = 2;
  cash = 50;
  price = 10;
  chances = 5;
}

function draw() {
  background(220);
  showMenu();
  if (mouseIsPressed && menu === "main" && mouseX >= buttonX1 - 125 && mouseX <= buttonX1 + 125 && mouseY >= buttonY1 - 50 && mouseY <= buttonY1 + 50){
    menu = "play";
    lives = extraLives;
    level = startLevel;
  }
  if (mouseIsPressed && menu === "main" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "upgrades";
    buttonY2 = windowHeight/1.2;
  }
  else if (mouseIsPressed && menu === "upgrades" && mouseX >= buttonX2 - 125 && mouseX <= buttonX2 + 125 && mouseY >= buttonY2 - 50 && mouseY <= buttonY2 + 50){
    menu = "main";
    buttonY2 = windowHeight/1.5;
  }
}

function keyPressed() {
  if (menu === "play" && keyCode === LEFT_ARROW && colour === name) {
    progress();
  } 
  else if (menu === "play" && keyCode === RIGHT_ARROW && colour !== name) {
    progress();
  }
  else{
    lives--;
  }
}

function progress(){
  level ++;
  colour = random (listColours);
  name = colour;
}

function generateWords(){
  if (colour === "red"){
    fill(225, 0, 0);
  }
  else if (colour === "green"){
    fill(0, 225, 0);
  }
  else if (colour === "blue"){
    fill(0, 0, 225);
  }
  else if (colour === "yellow"){
    fill(225, 225, 0);
  }
  else if (colour === "purple"){
    fill(225, 0, 225);
  }
  else if (colour === "cyan"){
    fill(0, 225, 225);
  }
}

function showMenu(){
  if (menu === "main"){
    textSize(30);
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX1, buttonY1, 250, 100);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    text("play", buttonX1, buttonY1);
    text("upgrades", buttonX2, buttonY2);
    text("you have " + chances + " chances left", 100, 50);
  }
  if (menu === "upgrades"){
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    text("back", buttonX2, buttonY2);
    text("push Q for a different starter level", 20, 50);
    text("current starter level " + startLevel, 500, 50);
    text("push W for more cash earnings", 20, 100);
    text("current earnings " + extraCash, 500, 100);
    text("push E for extra lives", 20, 150);
    text("lives " + extraLives, 500, 150);
    text("current cash " + cash, 50, 200);
  }
  if (menu === "play"){
    generateWords();
    textSize(64);
    text(name, windowWidth/2, windowHeight/2);
    fill(0);
    text("lives" + lives, 50, 50); 
    if (lives <= -1){
      menu = "main";
      chances--;
      lives = 0;
    }
  }
  if (chances <= 0){
    menu = "lose";
  }
  if (menu === "lose"){
    text("you lose", 250, windowHeight/2);
  }
}

