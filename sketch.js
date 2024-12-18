// // Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:


// // Set state to enable start screen
// let state = "start";
// let time = "day";

// // Set image variables 

// let nightStart;
// let dayStart;
// let play;
// let room;

// let displayMode;

// // Home base dialogue
// let frameCounter = 0;
// let typingSpeed = 1; 
// let dialogue1 = "Hey there! Welcome to your cozy little corner of the world. This is your home base—a place where you can relax and get ready for your next adventure. Here, you can pick up quests and prepare for the journey ahead.";
// let dialogue2 = "The world is your oyster, and there are spirits to help and mysteries to uncover. To get started, click on the scroll icon at the top left. But before you do, take a moment to explore the room.";
// let dialogueComplete = false;
// let currentDialogue = dialogue1;



// function preload() {
//   // Load all image files
//   nightStart = loadImage("nightstart.gif");
//   dayStart = loadImage("daystart.gif");
//   play = loadImage("play.png");
//   room = loadImage("room.gif");

// }

// function setup() {
//   // Set canvas size based on window dimensions
//   createCanvas(windowWidth, windowHeight);

//   displayMode = createButton("NIGHT/DAY")


// }

// function draw() {
//   // Switch from start screen to animal or plant cell diagram
//   swapState();
// }

// function swapState() {
//   // Display start screen //OPTION TO SWITHC FROM NIGHT MODE TO DAY NODE 
//   if (state === "start") {
//     startScreen();
//   }
//   else if (state === "home") {
//     homeBase();
//   }
//   else if (state === "one") {
//     levelOne();
//   }

// }

// function nightStartScreen() {
//   // Display start screen and images
//   image(nightStart, 0, 0, windowWidth, windowHeight);
// }

// function dayStartScreen() {
//   // Display start screen and images
//   image(dayStart, 0, 0, windowWidth, windowHeight);
// }

// function startScreen() {
//   if (state === "start" && time === "night") {
//     image(nightStart, 0, 0, windowWidth, windowHeight);
//   }
//   else if (state === "start" && time === "day") {
//     image(dayStart, 0, 0, windowWidth, windowHeight);  
//   }
//   image(play, 455, 230, play.width * 0.5, play.height * 0.5);

//   // If user clicks play button, screen will switch to instructions 
//   if (mouseIsPressed && mouseX > 455 && mouseX < 455 + play.width * 0.5 && mouseY > 230 && mouseY < 230 + play.height * 0.5) {
//     state = "home";
//   }

// }

// function displayTypingDialogue(x, y, width, height, dialogue, frameCounter, typingSpeed) {
//   // Track the current character index
//   let charIndex = Math.floor(frameCounter / typingSpeed);

//   // Ensure we don't exceed the length of the dialogue
//   charIndex = min(charIndex, dialogue.length);

//   // Draw the dialogue box
//   fill(50, 50, 50, 200); // Semi-transparent gray
//   rect(x, y, width, height, 10); // Rounded box

//   // Display the text up to the current character index
//   fill(255);
//   textSize(20);
//   textAlign(LEFT, TOP);
//   text(dialogue.substring(0, charIndex), x + 10, y + 10, width - 20, height - 20);

//   // Return true if typing is complete
//   return charIndex === dialogue.length;
// }

// function nextDialogue(newDialogue) {
//   currentDialogue = newDialogue;
//   frameCounter = 0; // Reset frame counter for typing effect
// }

// function homeBase() {
//   image(room, 0, 0, windowWidth, windowHeight);

//   // Example of how to call the dialogue
//   if (!dialogueComplete) {
//     dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentDialogue, frameCounter, typingSpeed);
//     frameCounter++; // Increment manually for the typing effect
//   }

//   if (dialogueComplete) {
//     nextDialogue(dialogue2);
//   }

// }


// function levelOne() {

// }

// Project Title
// Your Name
// Date

// Extra for Experts:

// Set state to enable start screen
let state = "start";
let time = "day";

// Set image variables 
let nightStart;
let dayStart;
let play;
let room;
let book;
let cd;
let cake;


let displayMode;
let heartCount = 0;

// Home base dialogue
let frameCounter = 0;
let typingSpeed = 3; 
let dialogue1 = "Hey there! Welcome to your cozy little corner of the world. This is your home base—a place where you can relax and get ready for your next adventure.";
let dialogue2 = "The world is your oyster, there are spirits to help, challenges to overcome, and mysteries to uncover.";
let dialogue3 = "To get started, click on the book icon at the top left. But before you do, take a moment to explore the room. Maybe check out your favorite playlist on the CD player, or fuel up with a snack. Have fun!"
let dialogueComplete = false;
let currentDialogue = dialogue1;

function preload() {
  // Load all image files
  nightStart = loadImage("nightstart.gif");
  dayStart = loadImage("daystart.gif");
  play = loadImage("play.png");
  room = loadImage("room.gif");
  book = loadImage("book.png");
  cd = loadImage("cd.png");
  cake = loadImage("cake.png");
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
  else if (state === "home") {
    homeBase();
  } 
  else if (state === "one") {
    quests();
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

  // If user clicks play button, screen will switch to instructions 
  if (mouseIsPressed && mouseX > 455 && mouseX < 455 + play.width * 0.5 && mouseY > 230 && mouseY < 230 + play.height * 0.5) {
    state = "home";
  }

  if (state === "quests") {
    quests();
  }
}

function displayTypingDialogue(x, y, width, height, dialogue, frameCounter, typingSpeed) {
  // Track the current character index
  let charIndex = Math.floor(frameCounter / typingSpeed);

  // Ensure we don't exceed the length of the dialogue
  charIndex = min(charIndex, dialogue.length);

  // Draw the dialogue box
  noStroke();
  fill(50, 50, 50, 200); // Semi-transparent gray
  rect(x, y, width, height, 10); // Rounded box

  // Display the text up to the current character index
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text(dialogue.substring(0, charIndex), x + 10, y + 10, width - 20, height - 20);

  // Return true if typing is complete
  return charIndex === dialogue.length;
}

function nextDialogue(newDialogue) {
  currentDialogue = newDialogue;
  frameCounter = 0; // Reset frame counter for typing effect
  dialogueComplete = false; // Reset completion status for next dialogue
}

function homeBase() {
  image(room, 0, 0, windowWidth, windowHeight);
  image(book, 9, 9, book.width * 0.12, book.height * 0.12);
  image(cd, 1170, -14, cd.width * 0.22, cd.height * 0.22);
  image(cake, 1182, 67, cake.width * 0.17, cake.height * 0.17);

  // Example of how to call the dialogue
  if (!dialogueComplete) {
    dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentDialogue, frameCounter, typingSpeed);
    frameCounter++; // Increment manually for the typing effect
  }

  if (dialogueComplete && currentDialogue === dialogue1) {
    // After dialogue1 is complete, switch to dialogue2
    nextDialogue(dialogue2);
  }

  if (dialogueComplete && currentDialogue === dialogue2) {
    // After dialogue1 is complete, switch to dialogue2
    nextDialogue(dialogue3);
  }

  // If book icon is clicked, go to quests function
  if (mouseIsPressed && mouseX > 9 && mouseX < 9 + play.width * 0.12 && mouseY > 9 && mouseY < 9 + play.height * 0.12) {
    state = "quests";
  }
}

function quests(x, y, width, height) {
  noStroke();
  fill(50, 50, 50, 100); // Semi-transparent gray
  rect(x, y, width, height, 10); // Rounded box
  




}


function levelOne() {
  rect(10, 10, 20, 20);

}

function {

}