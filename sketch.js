
// THIRD VERSION
// Project Title
// Your Name
// Date

// Extra for Experts:

// Set state to enable start screen
let state = "start";
let time = "day";

// Set image variables 
let nightStart, dayStart, play, room, book, cd, cake, q1, ocean, moira, seashell, chest, message, home;

let displayMode;
let heartCount = 0;

// Home base dialogue
let frameCounter = 0;
let typingSpeed = 0; 
let dialogue11 = "Hey there! Welcome to your cozy little corner of the world. This is your home base—a place where you can relax and get ready for your next adventure.";
let dialogue12 = "The world is your oyster, there are spirits to help, challenges to overcome, and mysteries to uncover.";
let dialogue13 = "To get started, click on the book icon at the top left. But before you do, take a moment to explore the room. Maybe check out your favorite playlist on the CD player, or fuel up with a snack. Have fun!";
let dialogueComplete = false;
let currentDialogue = dialogue11;

// Variables for Moira's dialogue
let dialogue21 = "Hello, dear traveller. My name is Moira. I am a spirit who is journeying to the afterlife.";
let dialogue22 = "The ocean holds a special place in my heart. It’s where my loved one and I shared our first date.";
let dialogue23 = "We walked along the shore, collecting seashells and talking about all the adventures we’d have together.";
let dialogue24 = "Now, I wish to send something back to remind them of that day. Can you help me choose the right item?";
let currentQuestDialogue = dialogue21;
let showDialogueBox = true;

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
  ocean = loadImage("ocean.gif");
  moira = loadImage("moira.png");
  seashell = loadImage("seashell.png");
  chest = loadImage("chest.png");
  message = loadImage("message.png");
  home = loadImage("home.png");
}

let choiceMade = false;  // Track if a choice has been made
let choiceFeedback = ""; // Feedback for the choice made

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);
  displayMode = createButton("NIGHT/DAY");
  displayMode.position(10, 10);
  displayMode.mousePressed(() => {
    time = (time === "day") ? "night" : "day";
  });
}

function draw() {
  // Switch between start/home/quest screens
  swapState();

  // Adjust button visibility based on the state
  if (state === "start") {
    displayMode.show(); // Show the button on the start screen
  } else {
    displayMode.hide(); // Hide the button on all other screens
  }
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
  else if (state === "quest1intro") {
    quest1intro();
  }
  else if (state === "quest1") {
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

  // Draw triangle button
  drawTriangle(x + width - 30, y + height - 30, 20);

  return charIndex === dialogue.length;
}

function drawTriangle(x, y, size) {
  fill(255);
  noStroke();
  triangle(x, y, x + size, y + size / 2, x, y + size);
}

function isTriangleClicked(x, y, size, mouseX, mouseY) {
  return mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size;
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
  image(cake, 1186, 67, cake.width * 0.17, cake.height * 0.17);

  if (showDialogueBox) {
    dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentDialogue, frameCounter, typingSpeed);
    if (!dialogueComplete) {
      frameCounter++;
    }

    if (
      dialogueComplete &&
      mouseIsPressed &&
      isTriangleClicked(720, 520, 20, mouseX, mouseY)
    ) {
      if (currentDialogue === dialogue11) {
        nextDialogue(dialogue12);
      } else if (currentDialogue === dialogue12) {
        nextDialogue(dialogue13);
      } else if (currentDialogue === dialogue13) {
        showDialogueBox = false; // Hide the dialogue box after the last dialogue
      }
    }
  }

  if (mouseIsPressed && mouseX > 9 && mouseX < 9 + book.width * 0.12 && mouseY > 9 && mouseY < 9 + book.height * 0.12) {
    state = "quests";
  }
}

function homeIcon() {
  if (state !== "home") {
    // Display the home icon at the top-left corner
    image(home, 0, 0, home.width * 0.15, home.height * 0.15);

    // Check if the home icon is clicked
    if (mouseIsPressed && mouseX > 0 && mouseX < 0 + home.width * 0.15 && mouseY > 0 && mouseY < 0 + home.height * 0.15) {
      state = "home"; // Go back to the home base screen
    }
  }
}

function quests() {
  fill(50, 50, 50, 100);
  rect(50, 50, 360, 100, 10);
  textSize(15);
  fill(255);
  text(" Quest 1                     Quest 2                      Quest 3", 60, 55);

  // Quest 1 Icon
  image(q1, 60, 80, q1.width * 0.08, q1.height * 0.08);
  if (mouseIsPressed && mouseX > 60 && mouseX < 60 + q1.width * 0.08 && mouseY > 80 && mouseY < 80 + q1.height * 0.08) {
    state = "quest1intro";
    showDialogueBox = true; // Reset for the quest dialogues
    currentQuestDialogue = dialogue21; // Ensure correct dialogue sequence starts
    frameCounter = 0; // Reset typing
  }
}

function quest1intro() {
  image(ocean, 0, 0, windowWidth, windowHeight);
  image(moira, 780, 150, moira.width * 0.7, moira.height * 0.7);

  if (showDialogueBox) {
    dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentQuestDialogue, frameCounter, typingSpeed);
    if (!dialogueComplete) {
      frameCounter++;
    }

    if (
      dialogueComplete &&
      mouseIsPressed &&
      isTriangleClicked(720, 520, 20, mouseX, mouseY)
    ) {
      if (currentQuestDialogue === dialogue21) {
        currentQuestDialogue = dialogue22;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue22) {
        currentQuestDialogue = dialogue23;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue23) {
        currentQuestDialogue = dialogue24;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue24) {
        showDialogueBox = false; // Hide the dialogue box after the last dialogue
        state = "quest1";
      }
    }
  }
  // Display the home icon
  homeIcon();
}

function quest1() {
  // Set background image
  image(ocean, 0, 0, windowWidth, windowHeight);
  image(moira, 780, 150, moira.width * 0.7, moira.height * 0.7);

  // Three options for the player
  image(seashell, 270, 30, seashell.width * 0.4, seashell.height * 0.4); // Seashell
  image(chest, 150, 200, chest.width * 0.6, chest.height * 0.6);         // Treasure Chest
  image(message, 500, 200, message.width * 0.3, message.height * 0.3);    // Message in a Bottle

  // Call the function to check the player's choice
  checkChoice();

  // If a choice has been made, display the feedback
  if (choiceMade) {
    fill(50, 50, 50, 200);
    rect(50, 450, 700, 100, 10); // Background for feedback box
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text(choiceFeedback, 60, 460, 680, 90); // Display the feedback message
  }

  // Once a choice is made, you can advance the game or trigger the next dialogue
  if (choiceMade) {
    // Delay to let the player read the feedback before proceeding
    setTimeout(() => {
      if (choiceFeedback.includes("Try again")) {
        // If wrong choice is made, reset choice and feedback
        choiceMade = false;
        choiceFeedback = ""; // Clear the feedback so the player can try again
      } else {
        showDialogueBox = true; // Proceed with the next dialogue
        nextDialogue("Thank you for helping! The seashell is the perfect choice."); // Example feedback message
      }
    }, 2000); // Delay before resetting or moving forward
  }
  // Display the home icon
  homeIcon();
}

function checkChoice() {
  if (mouseIsPressed && !choiceMade) {
    // Check if the player clicks the seashell
    if (
      mouseX > 270 && mouseX < 270 + seashell.width * 0.4 &&
      mouseY > 30 && mouseY < 30 + seashell.height * 0.4
    ) {
      choiceMade = true;
      choiceFeedback = "The seashell is perfect! It'll remind my loved one of our first date at the beach. You've completed your quest! Now, click the home icon to go and finish your last quest. Farewell, traveller!";
    } 
    // Check if the player clicks the treasure chest (wrong choice)
    else if (
      mouseX > 150 && mouseX < 150 + chest.width * 0.6 &&
      mouseY > 200 && mouseY < 200 + chest.height * 0.6
    ) {
      choiceMade = true;
      choiceFeedback = "The treasure chest is a thoughtful gift, but it doesn’t hold the same memory. Try again!";
    } 
    // Check if the player clicks the message in a bottle (wrong choice)
    else if (
      mouseX > 500 && mouseX < 500 + message.width * 0.3 &&
      mouseY > 200 && mouseY < 200 + message.height * 0.3
    ) {
      choiceMade = true;
      choiceFeedback = "A message in a bottle is a nice gesture, but it’s not as meaningful. Try again!";
    }
  }
}
