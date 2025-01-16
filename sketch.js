
// THIRD VERSION
// Project Title
// Your Name
// Date

// Extra for Experts:

// Set state to enable start screen
let state = "start";
let time = "day";

// Set image/music variables 
let nightStart, dayStart, play, room, book, cd, q1, ocean, moira, seashell, chest, message, home, city, q2, driving, music;

let displayMode;

let musicPlaying = false; // To track the music state


// Home base dialogue
let frameCounter = 0;
let typingSpeed = 3.5; 
let dialogue11 = "Hey there! Welcome to your cozy little corner of the world. This is your home base—a place where you can relax and get ready for your next adventure.";
let dialogue12 = "The world is your oyster, there are spirits to help, challenges to overcome, and mysteries to uncover.";
let dialogue13 = "To get started, click on the book icon at the top left. But before you do, take a moment to explore the room. Maybe turn on the CD player. Have fun!";
let dialogueComplete = false;
let currentDialogue = dialogue11;

// Variables for Moira's dialogue
let dialogue21 = "Hello, dear traveller. My name is Moira. I am a spirit who is journeying to the afterlife.";
let dialogue22 = "The ocean holds a special place in my heart. It’s where my loved one and I shared our first date.";
let dialogue23 = "We walked along the shore, collecting seashells and talking about all the adventures we’d have together.";
let dialogue24 = "I wish to send my loved one something back to remind them of our first date. Can you help me choose the right item?";
let currentQuestDialogue = dialogue21;
let showDialogueBox = true;

// Variables for Quest 2 dialogue
let dialogue31 = "Welcome, kind soul. I am Melody, a musician who loved the city and its cherry blossoms.";
let dialogue32 = "The city was where I performed my favourite songs, under the falling blossoms.";
let dialogue33 = "Before I move on, I wish to leave a message for someone dear to me.";
let dialogue34 = "Will you help me put together the words I wish I could've said? Drag the words into a vertical formation.";

let fragments = [
  { text: "I never", x: 100, y: 200 },
  { text: "knew how much", x: 400, y: 300 },
  { text: "your presence", x: 700, y: 400 },
  { text: "shaped my life.", x: 500, y: 100 },
];
let draggingIndex = null;



function preload() {
  // Load all image files
  nightStart = loadImage("nightstart.gif");
  dayStart = loadImage("daystart.gif");
  play = loadImage("play.png");
  room = loadImage("room.gif");
  book = loadImage("book.png");
  cd = loadImage("cd.png");
  q1 = loadImage("q1.jpg");
  ocean = loadImage("ocean.gif");
  moira = loadImage("moira.png");
  seashell = loadImage("seashell.png");
  chest = loadImage("chest.png");
  message = loadImage("message.png");
  home = loadImage("home.png");
  city = loadImage("city.gif");
  q2 = loadImage("tree.png");
  driving = loadImage("driving.gif");

  // Load music
  music = loadSound("music.mp3");
}

let choiceMade = false;  // Track if a choice has been made
let choiceFeedback = ""; // Feedback for the choice made

function setup() {
  // Set canvas size based on window dimensions
  createCanvas(windowWidth, windowHeight);
  displayMode = createButton("NIGHT/DAY");
  displayMode.position(10, 10);
  displayMode.mousePressed(() => {
    if (time === "day") {
      time = "night";
    } else {
      time = "day";
    }
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
  else if (state === "quest2intro") {
    quest2intro();
  }
  else if (state === "quest2") {
    quest2();
  }
  else if (state === "end") {
    end();
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
  //drawTriangle(x + width - 30, y + height - 30, 20);

  // Draw triangle button only if not in the "end" state
  if (state !== "end") {
    drawTriangle(x + width - 30, y + height - 30, 20);
  }

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
  
  if (showDialogueBox) {
    dialogueComplete = displayTypingDialogue(50, 450, 700, 100, currentDialogue, frameCounter, typingSpeed);
    if (!dialogueComplete) {
      frameCounter++;
    }

    if (dialogueComplete && mouseIsPressed && isTriangleClicked(720, 520, 20, mouseX, mouseY)) {
      if (currentDialogue === dialogue11) {
        nextDialogue(dialogue12);
      } 
      else if (currentDialogue === dialogue12) {
        nextDialogue(dialogue13);
      } 
      else if (currentDialogue === dialogue13) {
        showDialogueBox = false; // Hide the dialogue box after the last dialogue
      }
    }
  }

  // Check if the CD image is clicked
  if (mouseIsPressed && mouseX > 1170 && mouseX < 1170 + cd.width * 0.22 && mouseY > -14 && mouseY < -14 + cd.height * 0.22) {
    userStartAudio();
    if (musicPlaying) {
      music.stop(); // Stop the music if it's currently playing
      musicPlaying = false;
    } else {
      music.loop(); // Start the music and loop it
      musicPlaying = true;
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
  rect(50, 50, 168, 100, 10);
  textSize(15);
  fill(255);
  text(" Quest 1        Quest 2 ", 60, 55);

  // Quest 1 Icon
  image(q1, 60, 80, q1.width * 0.08, q1.height * 0.08);
  if (mouseIsPressed && mouseX > 60 && mouseX < 60 + q1.width * 0.08 && mouseY > 80 && mouseY < 80 + q1.height * 0.08) {
    state = "quest1intro";
    showDialogueBox = true; // Reset for the quest dialogues
    currentQuestDialogue = dialogue21; // Ensure correct dialogue sequence starts
    frameCounter = 0; // Reset typing
  }

  // Quest 2 Icon
  image(q2, 147, 80, q2.width * 0.048, q2.height * 0.048);
  if (mouseIsPressed && mouseX > 147 && mouseX < 147 + q1.width * 0.048 && mouseY > 80 && mouseY < 80 + q1.height * 0.048) {
    state = "quest2intro";
    showDialogueBox = true; // Reset for the quest dialogues
    currentQuestDialogue = dialogue31; // Ensure correct dialogue sequence starts
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
    if (mouseX > 270 && mouseX < 270 + seashell.width * 0.4 && mouseY > 30 && mouseY < 30 + seashell.height * 0.4) {
      choiceMade = true;
      choiceFeedback = "The seashell is perfect! It'll remind my loved one of our first date at the beach. You've completed your quest! Now, click the home icon to go and finish your last quest. Farewell, traveller!";
    } 
    // Check if the player clicks the treasure chest (wrong choice)
    else if (mouseX > 150 && mouseX < 150 + chest.width * 0.6 && mouseY > 200 && mouseY < 200 + chest.height * 0.6) {
      choiceMade = true;
      choiceFeedback = "The treasure chest is a thoughtful gift, but it doesn’t hold the same memory. Try again!";
    } 
    // Check if the player clicks the message in a bottle (wrong choice)
    else if (mouseX > 500 && mouseX < 500 + message.width * 0.3 && mouseY > 200 && mouseY < 200 + message.height * 0.3) {
      choiceMade = true;
      choiceFeedback = "A message in a bottle is a nice gesture, but it’s not as meaningful. Try again!";
    }
  }
}


function quest2intro() {
  image(city, 0, 0, windowWidth, windowHeight);
  
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
      if (currentQuestDialogue === dialogue31) {
        currentQuestDialogue = dialogue32;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue32) {
        currentQuestDialogue = dialogue33;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue33) {
        currentQuestDialogue = dialogue34;
        frameCounter = 0;
      } else if (currentQuestDialogue === dialogue34) {
        showDialogueBox = false; // Hide the dialogue box after the last dialogue
        state = "quest2";
      }
    }
  }
  // Display the home icon
  homeIcon();
}

function quest2() {
  image(city, 0, 0, windowWidth, windowHeight);

  // Draw fragments
  for (let i = 0; i < fragments.length; i++) {
    fill(255, 200);
    rect(fragments[i].x, fragments[i].y, 200, 50, 10);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(fragments[i].text, fragments[i].x + 100, fragments[i].y + 25);
  }

  // Check if all fragments are in the correct order
  if (checkOrder()) {
    fill(50, 50, 50, 200);
    rect(50, 450, 700, 100, 10); // Background for feedback box
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("You did it! The message is complete. Thank you! Farewell, fellow kindred spirit.", 60, 460, 680, 90); // Display the feedback message

    // Draw triangle button
    drawTriangle(720, 520, 20);

    // Check if the triangle button is clicked
    if (state === "quest2" && mouseIsPressed && isTriangleClicked(720, 520, 20, mouseX, mouseY)) {
      state = "end";
    }
  }

  // Display the home icon
  homeIcon();
}

function mousePressed() {
  // Check if the mouse is over any fragment to start dragging
  for (let i = 0; i < fragments.length; i++) {
    if (
      mouseX > fragments[i].x &&
      mouseX < fragments[i].x + 200 &&
      mouseY > fragments[i].y &&
      mouseY < fragments[i].y + 50
    ) {
      draggingIndex = i;
      break;
    }
  }
}

function mouseDragged() {
  // Move the selected fragment with the mouse
  if (draggingIndex !== null) {
    fragments[draggingIndex].x = mouseX - 100;
    fragments[draggingIndex].y = mouseY - 25;
  }
}

function mouseReleased() {
  // Stop dragging
  draggingIndex = null;
}

function checkOrder() {
  // Define the correct positions for the fragments
  let correctOrder = ["I never", "knew how much", "your presence", "shaped my life."];
  let yPositions = fragments.map((frag) => frag.y);

  // Sort fragments by their Y position to check order
  let sortedFragments = fragments.slice().sort((a, b) => a.y - b.y);
  for (let i = 0; i < correctOrder.length; i++) {
    if (sortedFragments[i].text !== correctOrder[i]) {
      return false;
    }
  }
  return true;
}

function end() {
  image(driving, 0, 0, windowWidth, windowHeight);

  // End dialogue
  let endDialogue = "Now, as you drive into the horizon, know that the road ahead is filled with great things. May the stars guide your path, and may you always carry the memories of the souls you've touched. Until we meet again.";

  // Display the typing dialogue
  dialogueComplete = displayTypingDialogue(50, 450, 700, 100, endDialogue, frameCounter, typingSpeed);
  if (!dialogueComplete) {
    frameCounter++;
  }

  

}









