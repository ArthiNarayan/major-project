// Project Title
// Your Name
// Date
//
// Extra for Experts:


// Set state to enable start screen
let state = "daystart";

// Set image variables 

let nightStart;
let dayStart;

let displayMode;





function preload() {
  // Load all image files
  nightStart = loadImage("nightstart.gif");
  dayStart = loadImage("daystart.gif");

}

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);

  displayMode = createButton("")


}

function draw() {
  // Switch from start screen to animal or plant cell diagram
  swapState();
}

function swapState() {
  // Display start screen //OPTION TO SWITHC FROM NIGHT MODE TO DAY NODE 
  if (state === "nightstart") {
    nightStartScreen();
  }
  else if (state === "daystart") {
    dayStartScreen();
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
