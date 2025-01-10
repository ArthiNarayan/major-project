
//THIRD VERSION
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
let dialogue3 = "To get started, click on the book icon at the top left. But before you do, take a moment to explore the room. Maybe check out your favorite playlist on the CD player, or fuel up with a snack. Have fun!";
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
  q1 = loadImage("q1.jpg");
}

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);
  displayMode = createButton("NIGHT/DAY");
  displayMode.position(67, 20);
  displayMode.mousePressed(() => {
    time = (time === "day") ? "night" : "day";
  });
}

function draw() {
  // Switch from start screen to animal or plant cell diagram
  swapState();
}

function swapState() {
  // Display start screen or other states
  if (state === "start") {
    startScreen();
  } 
  else if (state === "home") {
    homeBase();
  } 
  else if (state === "quests") {
    quests();
  }
  else if (state = "quest1") {
    quest1();
  }
}

function startScreen() {
  if (time === "night") {
    image(nightStart, 0, 0, windowWidth, windowHeight);
  } else {
    image(dayStart, 0, 0, windowWidth, windowHeight);  
  }

  image(play, 455, 230, play.width * 0.5, play.height * 0.5);

  // If user clicks play button, screen will switch to instructions 
  if (mouseIsPressed && mouseX > 455 && mouseX < 455 + play.width * 0.5 && mouseY > 230 && mouseY < 230 + play.height * 0.5) {
    state = "home";
  }
}

function displayTypingDialogue(x, y, width, height, dialogue, frameCounter, typingSpeed) {
  let charIndex = Math.floor(frameCounter / typingSpeed);
  charIndex = min(charIndex, dialogue.length);

  noStroke();
  fill(50, 50, 50, 200);
  rect(x, y, width, height, 10);

  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text(dialogue.substring(0, charIndex), x + 10, y + 10, width - 20, height - 20);

  return charIndex === dialogue.length;
}

function nextDialogue(newDialogue) {
  currentDialogue = newDialogue;
  frameCounter = 0;
  dialogueComplete = false;
}

function homeBase() {
  image(room, 0, 0, windowWidth, windowHeight);
  image(book, 9, 9, book.width * 0.12, book.height * 0.12);
  image(cd, 1170, -14, cd.width * 0.22, cd.height * 0.22);
  image(cake, 1182, 67, cake.width * 0.17, cake.height * 0.17);

  if (!dialogueComplete) {
    dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentDialogue, frameCounter, typingSpeed);
    frameCounter++;
  }

  if (dialogueComplete && currentDialogue === dialogue1) {
    nextDialogue(dialogue2);
  } else if (dialogueComplete && currentDialogue === dialogue2 && currentDialogue !== dialogue3) {
    nextDialogue(dialogue3);
  }

  if (mouseIsPressed && mouseX > 9 && mouseX < 9 + book.width * 0.12 && mouseY > 9 && mouseY < 9 + book.height * 0.12) {
    state = "quests";
  }
}

function quests() {
  fill(50, 50, 50, 100);
  rect(50, 50, 360, 100, 10);
  textSize(15);
  fill(255);
  text(" Quest 1                     Quest 2                      Quest 3", 60, 55);
  //Quest 1 Icon
  image(q1, 60, 80, q1.width * 0.08, q1.height * 0.08);

  // Quest 1 Icon
  image(q1, 60, 80, q1.width * 0.08, q1.height * 0.08);
  if (mouseIsPressed && mouseX > 60 && mouseX < 60 + q1.width * 0.08 && mouseY > 80 && mouseY < 80 + q1.height * 0.08) {
    state = "quest1";
  }
}

function quest1() {
  
}

