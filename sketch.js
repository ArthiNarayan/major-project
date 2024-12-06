// Project Title
// Your Name
// Date
//
// Extra for Experts:


// Set state to enable start screen
let state = "start";

// Set image variables 

let nightStart;
let day;




function preload() {
  // Load all image files
  nightStart = loadImage("nightstart.gif");

}

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  // Switch from start screen to animal or plant cell diagram
  swapState();

}

function swapState() {
  // Display start screen
  if (state === "start") {
    startScreen();
  }
}

function startScreen() {
  // Display start screen and images
  image(nightStart, 0, 0, windowWidth, windowHeight);
}
