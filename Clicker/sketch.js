// Hax Simulator
// Felix
// March 15

let colour, name, chances, event, power;
let level, area, menu, lives, cash, price, time;
let timer;
let listColours = ["red", "blue", "green", "yellow", "purple", "cyan"];
let eventList = ["outtage",  "nothing"];
let buttonX1, buttonX2, buttonY1, buttonY2;
let extraTime, extraCash, extraLives;

function setup() {
  createCanvas(windowWidth, windowHeight);
  menu = "main";
  buttonX1 = windowWidth/2;
  buttonX2 = windowWidth/2;
  buttonY1 = windowHeight/3;
  buttonY2 = windowHeight/1.5;
  extraTime = 1;
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
    level = 0;
    progress();
    time = 1000;
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
  if (event === "inverted"){
    if (menu === "play" && keyCode === RIGHT_ARROW && colour === name) {
      progress();
    } 
    else if (menu === "play" && keyCode === LEFT_ARROW && colour !== name) {
      progress();
    }
    else if (menu === "play"){
      lives--;
      progress();
    }
  }
  else if (event === "nothing"){
    if (menu === "play" && keyCode === LEFT_ARROW && colour === name) {
      progress();
    } 
    else if (menu === "play" && keyCode === RIGHT_ARROW && colour !== name) {
      progress();
    }
    else if (menu === "play"){
      lives--;
      progress();
    }
  }
  else if (event === "outtage"){
    power++;
    if (power >= 10){
      progress();
    }
  }
  if (menu === "upgrades" && keyCode === 81 && price <= cash){
    extraTime++;
    cash = cash - price;
    price = price + 15;
  }
  else if (menu === "upgrades" && keyCode === 87 && price <= cash){
    extraCash++;
    cash = cash - price;
    price = price + 15;
  }
  else if (menu === "upgrades" && keyCode === 69 && price <= cash){
    extraLives++;
    cash = cash - price;
    price = price + 15;
  }
}

function progress(){
  level ++;
  colour = random (listColours);
  name = round(random(1, 3));
  event = random(eventList);
  if (name === 1){
    name = colour;
  }
  else{
    name = random (listColours);
  }
  cash = cash + extraCash + level;
  time = time + extraTime * 10;
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
    fill(180, 180, 30);
  }
  else if (colour === "purple"){
    fill(225, 0, 225);
  }
  else if (colour === "cyan"){
    fill(50, 180, 180);
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
    textAlign(CENTER);
    text("Play", buttonX1, buttonY1);
    text("Upgrades", buttonX2, buttonY2);
    textAlign(LEFT);
    text("You have " + chances + " chances left", 100, 50);
  }
  if (menu === "upgrades"){
    fill(10, 200, 10);
    rectMode(CENTER);
    rect(buttonX2, buttonY2, 250, 100);
    fill(0);
    textAlign(CENTER);
    text("Back", buttonX2, buttonY2);
    textAlign(LEFT);
    text("Push Q for a more time", 20, 50);
    text("Current time " + extraTime, 500, 50);
    text("Push W for more cash earnings", 20, 100);
    text("Current earnings " + extraCash, 500, 100);
    text("Push E for extra lives", 20, 150);
    text("Lives " + extraLives, 500, 150);
    text("Current cash " + cash, 50, 200);
    text("Next upgrade costs " + price, 50, 250);
  }
  if (menu === "play"){
    if(event === "outtage"){
      textAlign(CENTER);
      text("Power Out", windowWidth/2, 100);
      textAlign(LEFT);
      rect(windowWidth, windowHeight, 50, power * 20);
    }
    else{
      generateWords();
      rectMode(CENTER);
      rect(windowWidth / 2, windowHeight / 2, 300, 300);
      fill(0);
      textSize(64);
      textAlign(CENTER);
      text(name, windowWidth/2, windowHeight/2);
      textAlign(LEFT);
      text("Lives" + lives, 50, 60); 
      text("Current level " + level, 50, 120); 
      text("time left " + time, 50, 180); 
      if(event === "inverted"){
        textAlign(CENTER);
        text("Inverted Controlls", windowWidth/2, 100);
        textAlign(LEFT);
      }
      if (lives <= -1){
        menu = "main";
        chances--;
        lives = 0;
      }
      //time--;
      if(time <= 0){
        lives--;
      }
    }
  }
  if (chances <= 0){
    menu = "lose";
  }
  if (level >= 100){
    menu = "win";
  }
  if (menu === "lose"){
    textAlign(CENTER);
    text("You Lose", 250, windowHeight/2);
  }
  if (menu === "win"){
    textAlign(CENTER);
    text("You Win", 250, windowHeight/2);
  }
}