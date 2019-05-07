//References
//https://p5js.org/reference/#/p5.Element/id
// https://p5js.org/reference/#/p5/createSlider

//Prevent default page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

// Determines the lifecycle of different DOM elements. 0 = Intro, 1 = interactive, 2 = Conclusion
let whichScreen;

// Sliders and button creation variables.
let sliderMonkeys, sliderEvolution;
let startButton, nextButton, restartButton;

// Slider Values.
let monkeySliderValue, evolutionSliderValue;
// let img, img2, img3;

// Enumerations variable
let evolutionCase;

// All different monkey images variables in the interactive scenario.
let monkeyBrown1, monkeyBrown2, monkeyBrown3, monkeyBrown4, monkeyBrown5;
let monkeyYellow1, monkeyYellow2, monkeyYellow3, monkeyYellow4, monkeyYellow5;
let monkeyRed1, monkeyRed2, monkeyRed3, monkeyRed4, monkeyRed5;
let monkeyPink1, monkeyPink2, monkeyPink3, monkeyPink4, monkeyPink5;

// Images on the intro screen.
let imgCenter, imgRightOne, imgRightTwo, imgRightThree, imgLeftOne, imgLeftTwo, imgLeftThree;
let monkeyStillOne, monkeyStillTwo, monkeyStillThree, monkeyStillFour;

// Jungle background image in the interactive
let jungleBackground;

let dragBG;

// Heading divs in different scenarios
let sliderHeading, sliderHelpText;
let interactiveHelpText;
let welcomeHeader, welcomeText;
let conclusionsHeader, conclusionText, conclusionTextTwo, monkeyFaceTime, dragText;

// Drag and Drop stuff
let x = 1250;
let y = 200;
let w = 90;
let h = 106;
let offsetX, offsetY;
let dragging = false;
let intersection = false;

function preload() {

  monkeyRed1 = loadImage('/images/monkeyRed1.svg');
  monkeyRed2 = loadImage('/images/monkeyRed2.svg');
  monkeyRed3 = loadImage('/images/monkeyRed3.svg');
  monkeyRed4 = loadImage('/images/monkeyRed4.svg');
  monkeyRed5 = loadImage('/images/monkeyRed5.svg');

  //Base Monkey
  monkeyYellow1 = loadImage('/images/monkeyYellow1.svg');
  monkeyYellow2 = loadImage('/images/monkeyYellow2.svg');
  monkeyYellow3 = loadImage('/images/monkeyYellow3.svg');
  monkeyYellow4 = loadImage('/images/monkeyYellow4.svg');
  monkeyYellow5 = loadImage('/images/monkeyYellow5.svg');

  monkeyBrown1 = loadImage('/images/monkeyBrown1.svg');
  monkeyBrown2 = loadImage('/images/monkeyBrown2.svg');
  monkeyBrown3 = loadImage('/images/monkeyBrown3.svg');
  monkeyBrown4 = loadImage('/images/monkeyBrown4.svg');
  monkeyBrown5 = loadImage('/images/monkeyBrown5.svg');

  monkeyPink1 = loadImage('/images/monkeyPink1.svg');
  monkeyPink2 = loadImage('/images/monkeyPink2.svg');
  monkeyPink3 = loadImage('/images/monkeyPink3.svg');
  monkeyPink4 = loadImage('/images/monkeyPink4.svg');
  monkeyPink5 = loadImage('/images/monkeyPink5.svg');

  jungleBackground = loadImage('/images/background.png');
  dragBG = loadImage('/images/dragBG.png');

  imgCenter = loadImage('/images/intro/imgCenter.png');
  imgLeftOne = loadImage('/images/intro/imgLeftOne.png');
  imgLeftTwo = loadImage('/images/intro/imgLeftTwo.png');
  imgLeftThree = loadImage('/images/intro/imgLeftThree.png');
  imgRightOne = loadImage('/images/intro/imgRightOne.png');
  imgRightTwo = loadImage('/images/intro/imgRightTwo.png');
  imgRightThree = loadImage('/images/intro/imgRightThree.png');

  monkeyStillOne = loadImage('/images/intro/monkeyStillOne.png');
  monkeyStillTwo = loadImage('/images/intro/monkeyStillTwo.png');
  monkeyStillThree = loadImage('/images/intro/monkeyStillThree.png');
  monkeyStillFour = loadImage('/images/intro/monkeyStillFour.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Monkey slider
  sliderMonkeys = createSlider(0, 3, 0);
  sliderMonkeys.position(width - sliderMonkeys.width - 850, height - 100);
  sliderMonkeys.id('slider');
  sliderMonkeys.hide();

  // Evolution slider
  sliderEvolution = createSlider(1, 4, 1);
  sliderEvolution.position(width - sliderEvolution.width - 450, height - 100);
  sliderEvolution.id('sliderEvolution');
  sliderEvolution.hide();

  // Help text heading in interactive
  sliderHeading = createDiv('Instructions');
  sliderHeading.id('welcomeHeader');
  sliderHeading.position(80, 40);
  sliderHeading.hide();

  // sub heading text in the interactive
  sliderHelpText = createDiv('Move the species & time sliders to see how monkeys evolve. Check out the text in the yellow box below to understand why.');
  sliderHelpText.id('sliderHelpText');
  sliderHelpText.position(80, 150);
  sliderHelpText.hide();

  // Begin/start button on the first screen
  startButton = createButton('Begin -->');
  startButton.id('buttonStart');
  startButton.position(width/2 - startButton.width/2 , height - 200 );
  startButton.hide();

  // Next button on the interactive slide.
  nextButton = createButton('Next -->');
  nextButton.id('buttonStart');
  nextButton.position(80, height - nextButton.height- 60 );
  nextButton.hide();

  // Restart button on the conclusion slide
  restartButton = createButton('Restart -->');
  restartButton.id('buttonStart');
  restartButton.position(80 , height - restartButton.height - 60);
  restartButton.hide();

  // Help text in the interactive which describes what is happening in the interacitve.
  interactiveHelpText = createDiv('');
  interactiveHelpText.id('interactiveHelpText');
  interactiveHelpText.position(80, height/2 - 80);
  interactiveHelpText.hide();

  // Welcome to Guenon interactive text.
  welcomeHeader = createDiv('The colorful world of Guenons');
  welcomeHeader.id('welcomeHeader');
  welcomeHeader.position(width/2 - 600 , height/2);
  welcomeHeader.hide();

  // Sub heder for the welcome page
  welcomeText = createDiv('These beautifully coloured guenon monkeys are a result of selective evolution between different monkey species. These colorful \'features\' help them avoid cross-breeding & live together. Click begin to see how it works.');
  welcomeText.id('welcomeText');
  welcomeText.position(width/2 - 900 , height/2 + 100);
  welcomeText.hide();

  // Conclusions screen header
  conclusionsHeader = createDiv('What did we learn?');
  conclusionsHeader.id('welcomeHeader');
  conclusionsHeader.position( 80 , 40);
  conclusionsHeader.hide();

  // Sub heder for the conclusions page
  conclusionText = createDiv('Different guenon monkey species evolve different features over time to <i>\"discriminate\"</i> themselves from others.');
  conclusionText.id('conclusionText');
  conclusionText.position(0 , 200);
  conclusionText.hide();

  // Sub heder for the conclusions page
  conclusionTextTwo = createDiv('This evolutionary phenomenon is called <i>\"character displacement\"</i> & helps them to avoid mating with other guenon species.');
  conclusionTextTwo.id('conclusionText');
  conclusionTextTwo.position(0 , height/2 - 100);
  conclusionTextTwo.hide();

  // Sub heder for the conclusions page
  monkeyFaceTime = createDiv('Checkout the Monkey Face Time card game to understand how they visually discriminate');
  monkeyFaceTime.id('monkeyFaceTime');
  monkeyFaceTime.position(0 , height - 280);
  monkeyFaceTime.hide();

  // Sub heder for the conclusions page
  dragText = createDiv('Drag the red monkey around to see how it changes in different environments.');
  dragText.id('dragText');
  dragText.position(width/2 + 560 , height/2);
  dragText.hide();

  // This variable controls which elements get shown or hidden on refreshing this starts with intro screen.
  whichScreen = 0;

}

function draw() {
  // Continiously checking for the values of the monkey and evolution slider.
  monkeySliderValue = sliderMonkeys.value();
  evolutionSliderValue = sliderEvolution.value();

  // Draws things based on the whichScreen variable
  switchScreens();

  // Check for rollover and drag events in the final screen
  checkRollover()


}

// Callback function to manage lifecycle of different elements
function switchScreens(){
  if(whichScreen == 0){

    drawStartBg();

    if (key == '1') {
     whichScreen = 1;
   }

 } else if(whichScreen == 1){

    drawMapBg();

    drawSliderTitles();

    // Check for the evolution Enumerations
    evolutionEnumerations();
    // Switch cases for different evolution cases
    evolutionSwitcher();

    interactInstructions();

    if (key == '2') {
     whichScreen = 2;
   }

 } else if(whichScreen == 2){

      drawRestartBg();

      if (key == '0') {
       whichScreen = 0;
     }
  }
}

// All intro screen elements go here
function drawStartBg(){

    background('black');
    image(imgCenter, width/2- 175, 100, 350, 350);

    image(imgRightOne, width/2 + 200, 125, 300, 300);
    image(imgRightTwo, width/2 + 520, 150, 250, 250);
    image(imgRightThree, width/2 + 780, 175, 200, 200);


    image(imgLeftOne, width/2 - 500, 125, 300, 300);
    image(imgLeftTwo, width/2 - 770, 150, 250, 250);
    image(imgLeftThree, width/2 - 990, 175, 200, 200);

    image(monkeyStillOne, 80, height - 100, 100, 100);
    image(monkeyStillTwo, 380, height - 100, 120, 100);
    image(monkeyStillThree, width - 580, height - 100, 120, 100);
    image(monkeyStillFour, width - 280, height - 100, 120, 100);

    restartButton.hide();
    conclusionsHeader.hide();
    conclusionText.hide();
    conclusionTextTwo.hide();
    monkeyFaceTime.hide();
    dragText.hide();

    welcomeHeader.show();
    welcomeText.show();
    startButton.show();
    startButton.mouseClicked(function(){
      whichScreen = 1;
    });

}

// All restart screen elements go here
function drawRestartBg(){

    background('black');

    nextButton.hide();
    sliderMonkeys.hide();
    sliderEvolution.hide();
    sliderHeading.hide();
    sliderHelpText.hide();
    interactiveHelpText.hide();

    if(x >= 1440 && x <= 1880 && y >= 25 && y <= 465){ // cirlce 1
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow2, 1720, 160, 90, 106);
      image(monkeyPink1, 1610, 300, 90, 106);
      image(monkeyBrown1, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow1, 1280, 680, 90, 106);
      image(monkeyBrown3, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyPink1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed1, x, y, w, h);
    } else if(x >= 1145 && x <= 1525 && y >= 450 && y <= 835){ // cirlce 2
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow1, 1720, 160, 90, 106);
      image(monkeyPink2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow4, 1280, 680, 90, 106);
      image(monkeyBrown4, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyPink1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed2, x, y, w, h);
    } else if(x >= 1145 && x <= 1525 && y >= 450 && y <= 835){ // cirlce 3
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow1, 1720, 160, 90, 106);
      image(monkeyPink2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow1, 1280, 680, 90, 106);
      image(monkeyBrown3, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyPink2, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed3, x, y, w, h);
    } else { // everywhere else, like literally everywhere else
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow1, 1720, 160, 90, 106);
      image(monkeyPink2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow1, 1280, 680, 90, 106);
      image(monkeyBrown3, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyPink1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed4, x, y, w, h);
    }

    fill(255, 90);
    textAlign(CENTER);
    text('move me', x + 45, y + 125);

    conclusionsHeader.show();
    conclusionText.show();
    conclusionTextTwo.show();
    monkeyFaceTime.show();
    dragText.show();

    restartButton.show();
    restartButton.mouseClicked(function(){
      // monkeySliderValue.reset();
      // evolutionSliderValue.reset();
      whichScreen = 0;
    });

}

// Draws the map for the first screen
function drawMapBg() {
  background('black');
  image(jungleBackground, width/2 - 120, 50, 1050, 700);
}

// These two functions manage lifecycle of the interactive screen
function drawSliderTitles(){
  // Number of monkeys slider header
  push();
  textSize(30);
  textAlign(LEFT);
  textFont('Noto Sans');
  fill('#00b0ff');
  text('Guenons species: ' + (monkeySliderValue + 1), width - 980, height - 120);
  pop();

  /// Year of evolution in the timescale
  push();
  textSize(30);
  textAlign(LEFT);
  textFont('Noto Sans');
  fill('orange');
  text('Time: ' + (evolutionSliderValue * 1000  - 1000)+ ' Years', width - 580, height - 120);
  pop();

  startButton.hide();
  welcomeHeader.hide();
  welcomeText.hide();

  sliderMonkeys.show();
  sliderEvolution.show();
  nextButton.show();
  nextButton.mouseClicked(function(){
    whichScreen = 2;
  });

  // text('Evolution case' + evolutionCase, 30, 90);
}

function interactInstructions() {

  sliderHeading.show();

  sliderHelpText.show();

}

// No monkeys & any evolution
function handleCaseOne() {
  image(monkeyYellow1, 1250, 390, 150, 176);
  interactiveHelpText.show();
  interactiveHelpText.html('Move sliders to see changes & \'Hints\'');
}

// 1 other monkey and no(1) evolution
function handleCaseTwo() {

  image(monkeyYellow1, 1250, 390, 150, 176);
  image(monkeyBrown1, 1100, 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('A new species is living with you. Move the \'Time\' slider to see how you would evolve over time.');

}

//  1 other monkey and 2 evolution
function handleCaseThree() {

  image(monkeyYellow1, 1250, 390, 150, 176);
  image(monkeyBrown2, 1100, 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The Pink species evolved yellow eyelashes to differentiate itself.');

}

// 1 other monkey and 3 evolution
function handleCaseFour() {
  image(monkeyYellow2, 1250, 390, 150, 176);
  image(monkeyBrown2, 1100, 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Yellow\' Monkey developed a brown facemask to differentiate itself more from the \'Pink\' Monkey.');

}

// 1 other monkey and 4 evolution
function handleCaseFive() {
  image(monkeyYellow2, 1250, 390, 150, 176);
  image(monkeyBrown3, 1100, 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 2 other monkeys and 1 evolution
function handleCaseSix() {
  image(monkeyYellow1, 1250, 390, 150, 176);

  image(monkeyBrown1, 1100, 150, 150, 176);
  image(monkeyRed1, 1550, 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('A new species is living with you. Move the \'Time\' slider to see how you would evolve over time.');

}

// 2 other monkeys and 2 evolution
function handleCaseSeven() {
  image(monkeyYellow2, 1250, 390, 150, 176);

  image(monkeyBrown2, 1100, 150, 150, 176);
  image(monkeyRed2, 1550, 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 2 other monkeys and 3 evolution
function handleCaseEight() {
  image(monkeyYellow3, 1250, 390, 150, 176);

  image(monkeyBrown2, 1100, 150, 150, 176);
  image(monkeyRed3, 1550, 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 2 other monkeys and 4 evolution
function handleCaseNine() {
  image(monkeyYellow4, 1250, 390, 150, 176);

  image(monkeyBrown3, 1100, 150, 150, 176);
  image(monkeyRed4, 1550, 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 3 other monkeys and 1 evolution
function handleCaseTen() {
  image(monkeyYellow1, 1250, 390, 150, 176);

  image(monkeyBrown1, 1100, 150, 150, 176);
  image(monkeyRed1, 1550, 220, 150, 176);
  image(monkeyPink1, 1600, 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('A new species is living with you. Move the \'Time\' slider to see how you would evolve over time.');

}

// 3 other monkeys and 2 evolution
function handleCaseEleven() {
  image(monkeyYellow2, 1250, 390, 150, 176);

  image(monkeyBrown2, 1100, 150, 150, 176);
  image(monkeyRed2, 1550, 220, 150, 176);
  image(monkeyPink2,  1600, 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 3 other monkeys and 3 evolution
function handleCaseTwelve() {
  image(monkeyYellow3, 1250, 390, 150, 176);

  image(monkeyBrown3, 1100, 150, 150, 176);
  image(monkeyRed3, 1550, 220, 150, 176);
  image(monkeyPink3,  1600, 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// 3 other monkeys and 4 evolution
function handleCaseThirteen() {
  image(monkeyYellow4, 1250, 390, 150, 176);

  image(monkeyBrown4, 1100, 150, 150, 176);
  image(monkeyRed4, 1550, 220, 150, 176);
  image(monkeyPink4, 1600, 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The \'Pink\' Monkey developed a nose shape to differentiate itself more from the \'Yellow\' Monkey.');

}

// Evolution Enumerations

// Monkey Slider goes from 0, 3  which is 1,2,3 other monkeys
// Evolution slider goes from 1,4 which is 1, 2, 3, 4

function evolutionEnumerations() {

  if (monkeySliderValue == 0 && (evolutionSliderValue == 1 || evolutionSliderValue == 2 || evolutionSliderValue == 3 || evolutionSliderValue == 4 || evolutionSliderValue == 5)) {
    evolutionCase = 1;
  } else if (monkeySliderValue == 1 && evolutionSliderValue == 1) {
    evolutionCase = 2;
  } else if (monkeySliderValue == 1 && evolutionSliderValue == 2) {
    evolutionCase = 3;
  } else if (monkeySliderValue == 1 && evolutionSliderValue == 3) {
    evolutionCase = 4;
  } else if (monkeySliderValue == 1 && evolutionSliderValue == 4) {
    evolutionCase = 5;
  } else if (monkeySliderValue == 2 && evolutionSliderValue == 1) {
    evolutionCase = 6;
  } else if (monkeySliderValue == 2 && evolutionSliderValue == 2) {
    evolutionCase = 7;
  } else if (monkeySliderValue == 2 && evolutionSliderValue == 3) {
    evolutionCase = 8;
  } else if (monkeySliderValue == 2 && evolutionSliderValue == 4) {
    evolutionCase = 9;
  } else if (monkeySliderValue == 3 && evolutionSliderValue == 1) {
    evolutionCase = 10;
  } else if (monkeySliderValue == 3 && evolutionSliderValue == 2) {
    evolutionCase = 11;
  } else if (monkeySliderValue == 3 && evolutionSliderValue == 3) {
    evolutionCase = 12;
  } else if (monkeySliderValue == 3 && evolutionSliderValue == 4) {
    evolutionCase = 13;
  } else {
    evolutionCase = 0;
  }

}

function evolutionSwitcher() {

  switch (evolutionCase) {
    case 1:
      handleCaseOne(); // Monkey Slider zero evolution case any
      // console.log(evolutionCase);
      break;
    case 2:
      handleCaseTwo(); // One other monkey and no evolution
      // console.log(evolutionCase);
      break;
    case 3:
      handleCaseThree();
      // console.log(evolutionCase);
      break;
    case 4:
      handleCaseFour();
      // console.log(evolutionCase);
      break;
    case 5:
      handleCaseFive();
      // console.log(evolutionCase);
      break;
    case 6:
      handleCaseSix();
      // console.log(evolutionCase);
      break;
    case 7:
      handleCaseSeven();
      // console.log(evolutionCase);
      break;
    case 8:
      handleCaseEight();
      // console.log(evolutionCase);
      break;
    case 9:
      handleCaseNine();
      // console.log(evolutionCase);
      break;
    case 10:
      handleCaseTen();
      // console.log(evolutionCase);
      break;
    case 11:
      handleCaseEleven();
      // console.log(evolutionCase);
      break;
    case 12:
      handleCaseTwelve();
      // console.log(evolutionCase);
      break;
    case 13:
      handleCaseThirteen();
      // console.log(evolutionCase);
      break;
    default:
      fill(255, 0, 0);
      text("Welcome to reality Agent Smith", width / 2, height / 2);
  }

}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;

}

function checkRollover(){
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    intersection = true;
  }
  else {
    intersection = false;
  }

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
}
