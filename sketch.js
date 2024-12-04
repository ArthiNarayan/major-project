// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let nightstart;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  nightStart = loadImage("nightStart.gif");
}

function draw() {
  background(220);

}

function swapState() {
  // Display start screen
  if (state === "start") {
    startScreen();
  }
}

function startScreen() {
  image("nightStart", 0, 0, windowWidth, windowHeight);
}
