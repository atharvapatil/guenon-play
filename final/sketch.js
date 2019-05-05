//References
//https://p5js.org/reference/#/p5.Element/id
// https://p5js.org/reference/#/p5/createSlider

//Prevent default page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

let sliderMonkeys, sliderEvolution;
let button;
let monkeySliderValue, evolutionSliderValue;
let img, img2, img3;

// Enumerations variable
let evolutionCase;

let monkeyBrown1, monkeyBrown2, monkeyBrown3, monkeyBrown4, monkeyBrown5;
let monkeyYellow1, monkeyYellow2, monkeyYellow3, monkeyYellow4, monkeyYellow5;
let monkeyRed1, monkeyRed2, monkeyRed3, monkeyRed4, monkeyRed5;
let monkeyPink1, monkeyPink2, monkeyPink3, monkeyPink4, monkeyPink5;

let jungleBackground;
let imgBG;

let sliderHeading, sliderHelpText;

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

  imgBG = loadImage('/images/background.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Monkey slider
  sliderMonkeys = createSlider(0, 3, 0);
  sliderMonkeys.position(150, height - 100);
  sliderMonkeys.id('slider');
  // sliderMonkeys.hide();

  // Evolution slider
  sliderEvolution = createSlider(1, 4, 1);
  sliderEvolution.position(600, height - 100);
  sliderEvolution.id('sliderEvolution');
  // sliderEvolution.hide();

  sliderHeading = createDiv('Instructions', width - 600, 120);
  sliderHeading.id('sliderHeading');
  sliderHeading.position(width - 600, 100);
  sliderHeading.hide();

  sliderHelpText = createDiv('move the species & time sliders to see how monkeys evolve different charecteristics over time.', width - 600, 120);
  sliderHelpText.id('sliderHelpText');
  sliderHelpText.position(width - 600, 180);
  sliderHelpText.hide();

  button = createButton('Next');
  button.id('button');
  button.position(width - button.width - 100, height -button.height- 80 );

}

function draw() {

  drawBG();

  // Check for the
  monkeySliderValue = sliderMonkeys.value();
  evolutionSliderValue = sliderEvolution.value();

  // Number of monkeys slider header
  push();
  textSize(30);
  textFont('Noto Sans');
  fill('#00b0ff');
  text('guenons species: ' + (monkeySliderValue + 1), 150, height - 120);
  pop();

  /// Year of evolution in the timescale
  push();
  textSize(30);
  textFont('Noto Sans');
  fill('orange');
  text('Time: ' + evolutionSliderValue * 1000 + ' B.C', 600, height - 120);
  pop();


  text('Evolution case' + evolutionCase, 30, 90);

  // Check for the evolution Enumerations
  evolutionEnumerations();
  // Switch cases for different evolution cases
  evolutionSwitcher();

  interactInstructions();

}

function drawBG() {
  background('black');
  jungleBackground = image(imgBG, 100, 50, 1100, 700);
  // jungleBackground.hide();
}

function interactInstructions() {

  sliderHeading.show();

  sliderHelpText.show();

}

// No monkeys & any evolution
function handleCaseOne() {
  image(monkeyYellow1, 450, 390, 150, 176);
}

// 1 other monkey and no(1) evolution
function handleCaseTwo() {

  image(monkeyYellow1, 450, 390, 150, 176);
  image(monkeyBrown1, 300, 150, 150, 176);

  // sliderHelpText.html('With the arrival of a new monkey the original monkey will evolve new features. Jump into the future to see changes.')
}

//  1 other monkey and 2 evolution
function handleCaseThree() {

  image(monkeyYellow1, 450, 390, 150, 176);
  image(monkeyBrown2, 300, 150, 150, 176);

}

// 1 other monkey and 3 evolution
function handleCaseFour() {
  image(monkeyYellow2, 450, 390, 150, 176);
  image(monkeyBrown2, 300, 150, 150, 176);
}

// 1 other monkey and 4 evolution
function handleCaseFive() {
  image(monkeyYellow2, 450, 390, 150, 176);
  image(monkeyBrown3, 300, 150, 150, 176);
}

// 2 other monkeys and 1 evolution
function handleCaseSix() {
  image(monkeyYellow1, 450, 390, 150, 176);

  image(monkeyBrown1, 300, 150, 150, 176);
  image(monkeyRed1, 850, 220, 150, 176);

}

// 2 other monkeys and 2 evolution
function handleCaseSeven() {
  image(monkeyYellow2, 450, 390, 150, 176);

  image(monkeyBrown2, 300, 150, 150, 176);
  image(monkeyRed2, 850, 220, 150, 176);

}

// 2 other monkeys and 3 evolution
function handleCaseEight() {
  image(monkeyYellow3, 450, 390, 150, 176);

  image(monkeyBrown2, 300, 150, 150, 176);
  image(monkeyRed3, 850, 220, 150, 176);
}

// 2 other monkeys and 4 evolution
function handleCaseNine() {
  image(monkeyYellow4, 450, 390, 150, 176);

  image(monkeyBrown3, 300, 150, 150, 176);
  image(monkeyRed4, 850, 220, 150, 176);
}

// 3 other monkeys and 1 evolution
function handleCaseTen() {
  image(monkeyYellow1, 450, 390, 150, 176);

  image(monkeyBrown1, 300, 150, 150, 176);
  image(monkeyRed1, 850, 220, 150, 176);
  image(monkeyPink1, 800, 480, 150, 176);

}

// 3 other monkeys and 2 evolution
function handleCaseEleven() {
  image(monkeyYellow2, 450, 390, 150, 176);

  image(monkeyBrown2, 300, 150, 150, 176);
  image(monkeyRed2, 850, 220, 150, 176);
  image(monkeyPink2,  800, 480, 150, 176);

}

// 3 other monkeys and 3 evolution
function handleCaseTwelve() {
  image(monkeyYellow3, 450, 390, 150, 176);

  image(monkeyBrown3, 300, 150, 150, 176);
  image(monkeyRed3, 850, 220, 150, 176);
  image(monkeyPink3,  800, 480, 150, 176);

}

// 3 other monkeys and 4 evolution
function handleCaseThirteen() {
  image(monkeyYellow4, 450, 390, 150, 176);

  image(monkeyBrown4, 300, 150, 150, 176);
  image(monkeyRed4, 850, 220, 150, 176);
  image(monkeyPink4,  800, 480, 150, 176);

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
      console.log(evolutionCase);
      break;
    case 2:
      handleCaseTwo(); // One other monkey and no evolution
      console.log(evolutionCase);
      break;
    case 3:
      handleCaseThree();
      console.log(evolutionCase);
      break;
    case 4:
      handleCaseFour();
      console.log(evolutionCase);
      break;
    case 5:
      handleCaseFive();
      console.log(evolutionCase);
      break;
    case 6:
      handleCaseSix();
      console.log(evolutionCase);
      break;
    case 7:
      handleCaseSeven();
      console.log(evolutionCase);
      break;
    case 8:
      handleCaseEight();
      console.log(evolutionCase);
      break;
    case 9:
      handleCaseNine();
      console.log(evolutionCase);
      break;
    case 10:
      handleCaseTen();
      console.log(evolutionCase);
      break;
    case 11:
      handleCaseEleven();
      console.log(evolutionCase);
      break;
    case 12:
      handleCaseTwelve();
      console.log(evolutionCase);
      break;
    case 13:
      handleCaseThirteen();
      console.log(evolutionCase);
      break;

    default:
      fill(255);
      text("Evolution cases broke", width / 2, height / 2);
  }

}
