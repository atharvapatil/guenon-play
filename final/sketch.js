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
let startButton, nextButton, restartButton, finalButton;

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
let monkeyGrey1, monkeyGrey2, monkeyGrey3, monkeyGrey4, monkeyGrey5;

// Images on the intro screen.
let imgCenter, imgRightOne, imgRightTwo, imgRightThree, imgLeftOne, imgLeftTwo, imgLeftThree;
let monkeyStillOne, monkeyStillTwo, monkeyStillThree, monkeyStillFour;

// Jungle background image in the interactive
let jungleBackground;

let dragBG;
let finalMonkey;
let swingMonkey;

// Heading divs in different scenarios
let sliderHeading, sliderHelpText;
let interactiveHelpText;
let welcomeHeader, welcomeText;
let conclusionsHeader, conclusionText, conclusionTextTwo, monkeyFaceTime, dragText;
let noahsChoice;
// Drag and Drop stuff
let x = 1250;
let y = 200;
let w = 90;
let h = 106;
let offsetX, offsetY;
let dragging = false;
let intersection = false;


function preload() {

  monkeyRed1 = loadImage('./images/monkeyRed1.svg');
  monkeyRed2 = loadImage('./images/monkeyRed2.svg');
  monkeyRed3 = loadImage('./images/monkeyRed3.svg');
  monkeyRed4 = loadImage('./images/monkeyRed4.svg');
  monkeyRed5 = loadImage('./images/monkeyRed5.svg');

  //Base Monkey
  monkeyYellow1 = loadImage('./images/monkeyYellow1.svg');
  monkeyYellow2 = loadImage('./images/monkeyYellow2.svg');
  monkeyYellow3 = loadImage('./images/monkeyYellow3.svg');
  monkeyYellow4 = loadImage('./images/monkeyYellow4.svg');
  monkeyYellow5 = loadImage('./images/monkeyYellow5.svg');

  monkeyBrown1 = loadImage('./images/monkeyBrown1.svg');
  monkeyBrown2 = loadImage('./images/monkeyBrown2.svg');
  monkeyBrown3 = loadImage('./images/monkeyBrown3.svg');
  monkeyBrown4 = loadImage('./images/monkeyBrown4.svg');
  monkeyBrown5 = loadImage('./images/monkeyBrown5.svg');

  monkeyPink1 = loadImage('./images/monkeyPink1.svg');
  monkeyPink2 = loadImage('./images/monkeyPink2.svg');
  monkeyPink3 = loadImage('./images/monkeyPink3.svg');
  monkeyPink4 = loadImage('./images/monkeyPink4.svg');
  monkeyPink5 = loadImage('./images/monkeyPink5.svg');

  monkeyGrey1 = loadImage('./images/monkeyGrey1.svg');
  monkeyGrey2 = loadImage('./images/monkeyGrey2.svg');
  monkeyGrey3 = loadImage('./images/monkeyGrey3.svg');
  monkeyGrey4 = loadImage('./images/monkeyGrey4.svg');
  monkeyGrey5 = loadImage('./images/monkeyGrey5.svg');

  jungleBackground = loadImage('./images/background.png');
  dragBG = loadImage('./images/dragBG.png');
  finalMonkey = loadImage('./images/finalMonkey.jpg');
  swingMonkey = loadImage('./images/swingMonkey.png');

  imgCenter = loadImage('./images/intro/imgCenter.png');
  imgLeftOne = loadImage('./images/intro/imgLeftOne.png');
  imgLeftTwo = loadImage('./images/intro/imgLeftTwo.png');
  imgLeftThree = loadImage('./images/intro/imgLeftThree.png');
  imgRightOne = loadImage('./images/intro/imgRightOne.png');
  imgRightTwo = loadImage('./images/intro/imgRightTwo.png');
  imgRightThree = loadImage('./images/intro/imgRightThree.png');

  monkeyStillOne = loadImage('./images/intro/monkeyStillOne.png');
  monkeyStillTwo = loadImage('./images/intro/monkeyStillTwo.png');
  monkeyStillThree = loadImage('./images/intro/monkeyStillThree.png');
  monkeyStillFour = loadImage('./images/intro/monkeyStillFour.png');

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

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
  sliderHeading = createDiv('Final thoughts');
  sliderHeading.id('happyMonkey');
  sliderHeading.position(80, 40);
  sliderHeading.hide();

  // sub heading text in the interactive
  sliderHelpText = createDiv('Play with the species slider & time slider to see how guenon species who live together change their appearance over many generations.');
  sliderHelpText.id('sliderHelpHead');
  sliderHelpText.position(80, 290);
  sliderHelpText.hide();

  // Begin/start button on the first screen
  startButton = createButton('Begin -->');
  startButton.id('buttonStart');
  startButton.position(width/2 - startButton.width/2 , height - 200 );
  startButton.hide();

  // Begin/start button on the first screen
  finalButton = createButton('Restart -->');
  finalButton.id('buttonStart');
  finalButton.position(80 , height - finalButton.height - 60);
  finalButton.hide();

  // Next button on the interactive slide.
  nextButton = createButton('Next -->');
  nextButton.id('buttonStart');
  nextButton.position(80, height - nextButton.height- 60 );
  nextButton.hide();

  // Restart button on the conclusion slide
  restartButton = createButton('Next -->');
  restartButton.id('buttonStart');
  restartButton.position(80 , height - restartButton.height - 60);
  restartButton.hide();

  // Help text in the interactive which describes what is happening in the interacitve.
  interactiveHelpText = createDiv('');
  interactiveHelpText.id('interactiveHelpText');
  interactiveHelpText.position(80, height/2 + 30);
  interactiveHelpText.hide();

  // Welcome to Guenon interactive text.
  welcomeHeader = createDiv('Guenons : not  just another pretty face');
  welcomeHeader.id('welcomeHeader');
  welcomeHeader.position(width/2 - 700 , height/2 + 40);
  welcomeHeader.hide();

  // Sub heder for the welcome page
  welcomeText = createDiv('Guenons species often live in close knit communities and their colorful facial patterns help them steer clear of cross breeding.');
  welcomeText.id('sliderHelpHead');
  welcomeText.position(80 , 40);
  welcomeText.hide();

  // Conclusions screen header
  conclusionsHeader = createDiv('Moving in & out of range');
  conclusionsHeader.id('conclusionsHeader');
  conclusionsHeader.position( 80 , height/2);
  conclusionsHeader.hide();

  // Sub heder for the conclusions page
  conclusionText = createDiv('Guenons are famous for their complex, extraordinarily diverse facial patterns. These facial patterns are a form of visual signaling essential to each species’ reproductive health and genetic integrity.');
  conclusionText.id('conclusionText');
  conclusionText.position(0 , 180);
  conclusionText.hide();

  // Sub heder for the conclusions page
  conclusionTextTwo = createDiv('Unlike guenon species that live in isolation, species that live together in sympatry evolve increasingly diverse facial patterns over very long periods of time, an evolutionary outcome known as character displacement. Primatologists, believe guenon facial patterns play a large part in preventing crossbreeding.');
  conclusionTextTwo.id('conclusionText');
  conclusionTextTwo.position(0 , height/2 - 140);
  conclusionTextTwo.hide();

  noahsChoice = createDiv('This interactive is based on research conducted by Dr. James Higham and his fellow primatologists in the Primate Reproductive Ecology and Evolution Group at NYU’s Center for the Study of Human Origins (CSHO).');
  noahsChoice.id('conclusionText');
  noahsChoice.position(0 , height/2 + 140);
  noahsChoice.hide();

  // Sub heder for the conclusions page
  monkeyFaceTime = createDiv('To help foster a mental model of these concepts through group interaction, check out Monkey Face Time, a cooperative card game about clever monkeys with colorful face.');
  monkeyFaceTime.id('monkeyFaceTime');
  monkeyFaceTime.position(590 , height - 150);
  monkeyFaceTime.hide();

  // Sub heder for the conclusions page
  dragText = createDiv('Migrate the red monkey species between the three ranges to see different sympatric contexts impact character displacement.');
  dragText.id('dragText');
  dragText.position(0 , height/2 + 100);
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
  checkRollover();

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

      if (key == '3') {
       whichScreen = 3;
      }
  } else if(whichScreen == 3){

      drawConclusions();

      if (key == '0') {
       whichScreen = 0;
      }

  }

}

function drawConclusions(){
  background('black');

  conclusionsHeader.hide();
  dragText.hide();


  noahsChoice.show();
  conclusionText.show();
  conclusionTextTwo.show();
  restartButton.hide();

  sliderHeading.show();
  monkeyFaceTime.show();
  finalButton.show();
  image(finalMonkey, width/2 + 540, 210 , 375, 520);
  finalButton.mouseClicked(function(){
    // monkeySliderValue.reset();
    // evolutionSliderValue.reset();
    whichScreen = 0;
  });

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

    image(monkeyStillOne, 80 + 7*sin(frameCount), height - 100, 100, 100);
    image(monkeyStillTwo, 380 - 7*sin(frameCount), height - 100, 120, 100);
    image(monkeyStillThree, width - 580 + 7*sin(frameCount), height - 100, 120, 100);
    image(monkeyStillFour, width - 280 - 7*sin(frameCount), height - 100, 120, 100);

    noahsChoice.hide();
    sliderHeading.hide();
    finalButton.hide();
    conclusionsHeader.hide();
    conclusionText.hide();
    conclusionTextTwo.hide();
    monkeyFaceTime.hide();
    dragText.hide();


    welcomeHeader.show();
    welcomeText.hide();
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

    image(swingMonkey, 80, 0, 240, 450);

    if(x >= 1440 && x <= 1880 && y >= 25 && y <= 465){ // cirlce 1
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow1, 1720, 160, 90, 106);
      image(monkeyGrey1, 1610, 300, 90, 106);
      image(monkeyBrown1, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow4, 1280, 680, 90, 106);
      image(monkeyBrown4, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyGrey1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed3, x, y, w, h);
    } else if(x >= 1145 && x <= 1525 && y >= 450 && y <= 835){ // cirlce 2
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow2, 1720, 160, 90, 106);
      image(monkeyGrey2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow1, 1280, 680, 90, 106);
      image(monkeyBrown3, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyGrey1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed2, x, y, w, h);
    } else if(x >= 1535 && x <= 1850 && y >= 630 && y <= 950){ // cirlce 3
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow2, 1720, 160, 90, 106);
      image(monkeyGrey2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow4, 1280, 680, 90, 106);
      image(monkeyBrown4, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyGrey2, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed3, x, y, w, h);
    } else { // everywhere else, like literally everywhere else
      // Drag Background
      image(dragBG, width/2 + 150, 0, 800, 1000);

      // In cirlce 1
      image(monkeyYellow2, 1720, 160, 90, 106);
      image(monkeyGrey2, 1610, 300, 90, 106);
      image(monkeyBrown3, 1560, 90, 90, 106);

      // In circle 2
      image(monkeyYellow4, 1280, 680, 90, 106);
      image(monkeyBrown4, 1210, 540, 90, 106);

      // In circle 3
      image(monkeyGrey1, 1700, 780, 90, 106);

      // Dragged around monkey
      image(monkeyRed4, x, y, w, h);
    }

    fill(255, 90);
    textAlign(CENTER);
    text('move me', x + 45, y + 125);

    conclusionsHeader.show();
    // conclusionText.show();
    // conclusionTextTwo.show();
    // monkeyFaceTime.show();
    dragText.show();
    welcomeText.hide();

    restartButton.show();
    restartButton.mouseClicked(function(){
      // monkeySliderValue.reset();
      // evolutionSliderValue.reset();
      whichScreen =3;
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
  text((monkeySliderValue + 1) +  ' Guenons species' , width - 980, height - 120);
  pop();

  /// Year of evolution in the timescale
  push();
  textSize(30);
  textAlign(LEFT);
  textFont('Noto Sans');
  fill('orange');
  text('Time: ' + (evolutionSliderValue * 10000  - 10000)+ ' Years', width - 580, height - 120);
  pop();

  startButton.hide();
  welcomeHeader.hide();


  welcomeText.show();
  sliderMonkeys.show();
  sliderEvolution.show();
  sliderHelpText.show();
  nextButton.show();
  nextButton.mouseClicked(function(){
    whichScreen = 2;
  });

  // text('Evolution case' + evolutionCase, 30, 90);
}

function interactInstructions() {

  // sliderHeading.show();

  sliderHelpText.show();

}

// No monkeys & any evolution
function handleCaseOne() {
  image(monkeyYellow2, 1250 + 7*sin(frameCount), 390, 150, 176);
  interactiveHelpText.show();
  interactiveHelpText.html('Move sliders to see changes & hints');
}

// 1 other monkey and no(1) evolution
function handleCaseTwo() {

  image(monkeyYellow2, 1250 + 7*sin(frameCount), 390, 150, 176);
  image(monkeyBrown1, 1100 - 7*sin(frameCount), 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('Another species has joined your range. Now move the "Time" slider to see how your appearance changes over time.');

}

//  1 other monkey and 2 evolution
function handleCaseThree() {

  image(monkeyYellow2, 1250 + 7*sin(frameCount), 390, 150, 176);
  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The pink guenons new eyebrows help ensure cross-breeding doesn\'t happen.');

}

// 1 other monkey and 3 evolution
function handleCaseFour() {
  image(monkeyYellow1, 1250 + 7*sin(frameCount), 390, 150, 176);
  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new cheeks help ensure cross-breeding doesn\'t happen.');

}

// 1 other monkey and 4 evolution
function handleCaseFive() {
  image(monkeyYellow1, 1250 + 7*sin(frameCount), 390, 150, 176);
  image(monkeyBrown3, 1100 - 7*sin(frameCount), 150, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The pink guenons new nose shape help ensure cross-breeding doesn\'t happen.');

}

// 2 other monkeys and 1 evolution
function handleCaseSix() {
  image(monkeyYellow2 , 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown1 , 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed5 , 1550 + 7*sin(frameCount), 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('Another species has joined your range. Now move the "Time" slider to see how your appearance changes over time.');

}

// 2 other monkeys and 2 evolution
function handleCaseSeven() {
  image(monkeyYellow2, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed1, 1550 - 7*sin(frameCount), 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The pink guenons new eyebrows & the red guenons new nose help ensure cross-breeding doesn\'t happen.');

}

// 2 other monkeys and 3 evolution
function handleCaseEight() {
  image(monkeyYellow1, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed1, 1550 + 7*sin(frameCount), 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new cheeks help ensure cross-breeding doesn\'t happen.');

}

// 2 other monkeys and 4 evolution
function handleCaseNine() {
  image(monkeyYellow4, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed4, 1550 + 7*sin(frameCount), 220, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new nose & the red guenons new nose help ensure cross-breeding doesn\'t happen.');

}

// 3 other monkeys and 1 evolution
function handleCaseTen() {
  image(monkeyYellow2, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown1, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed5, 1550 + 7*sin(frameCount), 220, 150, 176);
  image(monkeyGrey1, 1600 - 7*sin(frameCount), 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('Another species has joined your range. Now move the "Time" slider to see how your appearance changes over time.');

}

// 3 other monkeys and 2 evolution
function handleCaseEleven() {
  image(monkeyYellow5, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown2, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed4, 1550 + 7*sin(frameCount), 220, 150, 176);
  image(monkeyGrey1,  1600 - 7*sin(frameCount), 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new face mask / nose & the red guenons new nose & pink monkeys eyebrows help ensure cross-breeding doesn\'t happen.');

}

// 3 other monkeys and 3 evolution
function handleCaseTwelve() {
  image(monkeyYellow3, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown3, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed3, 1550 + 7*sin(frameCount), 220, 150, 176);
  image(monkeyGrey2,  1600 - 7*sin(frameCount), 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new face mask/nose/cheeks & the red guenons new cheeks & pink monkeys new nose & grey monkeys face mask + nose help ensure cross-breeding doesn\'t happen.');

}

// 3 other monkeys and 4 evolution
function handleCaseThirteen() {
  image(monkeyYellow4, 1250 + 7*sin(frameCount), 390, 150, 176);

  image(monkeyBrown3, 1100 - 7*sin(frameCount), 150, 150, 176);
  image(monkeyRed3, 1550 + 7*sin(frameCount), 220, 150, 176);
  image(monkeyGrey4, 1600 - 7*sin(frameCount), 480, 150, 176);

  interactiveHelpText.show();
  interactiveHelpText.html('The yellow guenons new nose & grey monkeys new eyebrows help ensure cross-breeding doesn\'t happen.');

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
