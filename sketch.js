// Project Title
// Your Name
// Date
//
// Extra for Experts:


// Set state to enable start screen
let state = "start";
let time = "day";

// Set image variables 

let nightStart;
let dayStart;
let play;

let displayMode;





function preload() {
  // Load all image files
  nightStart = loadImage("nightstart.gif");
  dayStart = loadImage("daystart.gif");
  play = loadImage("play.png");

}

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);

  displayMode = createButton("NIGHT/DAY")


}

function draw() {
  // Switch from start screen to animal or plant cell diagram
  swapState();
}

function swapState() {
  // Display start screen //OPTION TO SWITHC FROM NIGHT MODE TO DAY NODE 
  if (state === "start") {
    startScreen();
  }

}

function nightStartScreen() {
  // Display start screen and images
  image(nightStart, 0, 0, windowWidth, windowHeight);
}

function dayStartScreen() {
  // Display start screen and images
  image(dayStart, 0, 0, windowWidth, windowHeight);
}

function startScreen() {
  if (state === "start" && time === "night") {
    image(nightStart, 0, 0, windowWidth, windowHeight);
  }
  else if (state === "start" && time === "day") {
    image(dayStart, 0, 0, windowWidth, windowHeight);  
  }
  image(play, 455, 230, play.width * 0.5, play.height * 0.5);


}
