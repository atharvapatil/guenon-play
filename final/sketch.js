//References
//https://p5js.org/reference/#/p5.Element/id
// https://p5js.org/reference/#/p5/createSlider

//Prevent default page scrolling
// document.ontouchmove = function(event){
//   event.preventDefault();
// }

let sliderMonkeys, sliderEvolution;
let button;
let r, g, b;
let monkeySliderValue, evolutionSliderValue;
let img, img2, img3;

// Enumerations variable
let evolutionCase;

let monkeyBrown1, monkeyBrown2, monkeyBrown3, monkeyBrown4, monkeyBrown5;
let monkeyYellow1, monkeyYellow2, monkeyYellow3, monkeyYellow4, monkeyYellow5;
let monkeyRed1,  monkeyRed2,  monkeyRed3,  monkeyRed4,  monkeyRed5;
let monkeyPink1,  monkeyPink2,  monkeyPink3,  monkeyPink4,  monkeyPink5;

function preload(){

  monkeyRed1 = loadImage('/images/monkeyRed1.svg');
  monkeyRed2 = loadImage('/images/monkeyRed2.svg');
  monkeyRed3 = loadImage('/images/monkeyRed3.svg');
  monkeyRed4 = loadImage('/images/monkeyRed4.svg');
  monkeyRed5 = loadImage('/images/monkeyRed5.svg');

  monkeyYellow1 = loadImage('/images/monkeyYellow1.svg');
  monkeyYellow2 = loadImage('/images/monkeyYellow2.svg');
  monkeyYellow3 = loadImage('/images/monkeyYellow3.svg');
  monkeyYellow4 = loadImage('/images/monkeyYellow4.svg');
  monkeyYellow5 = loadImage('/images/monkeyYellow5.svg');

  monkeyRed1 = loadImage('/images/monkeyRed1.svg');
  monkeyRed2 = loadImage('/images/monkeyRed2.svg');
  monkeyRed3 = loadImage('/images/monkeyRed3.svg');
  monkeyRed4 = loadImage('/images/monkeyRed4.svg');
  monkeyRed5 = loadImage('/images/monkeyRed5.svg');

  monkeyBrown1 = loadImage('/images/monkeyBrown1.svg');
  monkeyBrown2 = loadImage('/images/monkeyBrown2.svg');
  monkeyBrown3 = loadImage('/images/monkeyBrown3.svg');
  monkeyBrown4 = loadImage('/images/monkeyBrown4.svg');
  monkeyBrown5 = loadImage('/images/monkeyBrown5.svg');

  img = loadImage('/images/test.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Monkey slider
  sliderMonkeys = createSlider(0, 5, 0);
  sliderMonkeys.position(width - 200 - sliderMonkeys.width, height/2 );
  sliderMonkeys.id('slider');

  // Evolution slider
  sliderEvolution = createSlider(1, 5, 1);
  sliderEvolution.position(width - 200 - sliderEvolution.width, height/2 + 50);
  sliderEvolution.id('slider');

}


function draw() {

  drawBG();

  // Check for the
  monkeySliderValue = sliderMonkeys.value();
  evolutionSliderValue = sliderEvolution.value();

  text('Monkeys' + monkeySliderValue ,20,30);
  text('Time' + evolutionSliderValue ,20,60);

  // Check for the evolution Enumerations
  evolutionEnumerations();

  noStroke();
  fill(r, g, b);
  ellipse(width/2, height/2, 100);

  switch (evolutionCase){
    case 1:
      handleCaseOne();  // No other monkeys
      console.log(evolutionCase);
      break;
    case 2:
      handleCaseTwo();  // One other monkey and no evolution
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
    case 14:
      handleCaseFourteen();
      console.log(evolutionCase);
      break;
    case 15:
      handleCaseFifteen();
      console.log(evolutionCase);
      break;
    case 16:
      handleCaseSixteen();
      console.log(evolutionCase);
      break;
    case 17:
      handleCaseSeventeen();
      console.log(evolutionCase);
      break;
    case 18:
      handleCaseEighteen();
      console.log(evolutionCase);
      break;
    case 19:
      handleCaseNineteen();
      console.log(evolutionCase);
      break;
    case 20:
      handleCaseTwenty();
      console.log(evolutionCase);
      break;
    case 21:
      handleCaseTwentyOne();
      console.log(evolutionCase);
      break;

    default:
      fill(255);
      text("Evolution cases broke", width/2, height/2);
  }

}

function drawBG(){
    background(40);
}

// No other monkeys
function handleCaseOne(){

  image(img, 100, 100, 150, 176);
  r = 255;
  g = 20;
  b = 255;
}

// 1 monkey and 0 evolution
function handleCaseTwo(){

  image(img, 100, 100, 50, 60);
  image(img, 100, 300, 90, 60);
}

function handleCaseThree(){

  image(img, 100, 100, 50, 60);
  image(img, 100, 300, 90, 60);
  image(img, 400, 300, 30, 60);

}

function handleCaseFour(){

}

function handleCaseFive(){

}

function handleCaseSix(){

}

function handleCaseSeven(){

}

function handleCaseEight(){

}

function handleCaseNine(){

}

function handleCaseTen(){

}

function handleCaseEleven(){

}

function handleCaseTwelve(){

}

function handleCaseThirteen(){

}

function handleCaseFourteen(){

}

function handleCaseFifteen(){

}

function handleCaseSixteen(){

}


function handleCaseSeventeen(){

}

function handleCaseEighteen(){

}

function handleCaseNineteen(){

}

function handleCaseTwenty(){

}

function handleCaseTwentyOne(){

}


// Evolution Enumerations

function evolutionEnumerations(){

  if(monkeySliderValue == 0 && (evolutionSliderValue == 1 || evolutionSliderValue == 2 || evolutionSliderValue == 3 || evolutionSliderValue == 4 || evolutionSliderValue == 5)){
    evolutionCase = 1;
  } else if(monkeySliderValue == 1 && evolutionSliderValue == 1){
    evolutionCase = 2;
  } else if(monkeySliderValue == 2 && evolutionSliderValue == 1){
    evolutionCase = 3;
  } else if(monkeySliderValue == 3 && evolutionSliderValue == 1){
    evolutionCase = 4;
  } else if(monkeySliderValue == 4 && evolutionSliderValue == 1){
    evolutionCase = 5;
  } else if(monkeySliderValue == 5 && evolutionSliderValue == 1){
    evolutionCase = 6;
  } else if(monkeySliderValue == 1 && evolutionSliderValue == 2){
    evolutionCase = 7;
  } else if(monkeySliderValue == 2 && evolutionSliderValue == 2){
    evolutionCase = 8;
  } else if(monkeySliderValue == 3 && evolutionSliderValue == 2){
    evolutionCase = 9;
  } else if(monkeySliderValue == 4 && evolutionSliderValue == 2){
    evolutionCase = 10;
  } else if(monkeySliderValue == 5 && evolutionSliderValue == 2){
    evolutionCase = 11;
  } else if(monkeySliderValue == 1 && evolutionSliderValue == 3){
    evolutionCase = 12;
  } else if(monkeySliderValue == 2 && evolutionSliderValue == 3){
    evolutionCase = 13;
  } else if(monkeySliderValue == 3 && evolutionSliderValue == 3){
    evolutionCase = 14;
  } else if(monkeySliderValue == 4 && evolutionSliderValue == 3){
    evolutionCase = 15;
  } else if(monkeySliderValue == 5 && evolutionSliderValue == 3){
    evolutionCase = 16;
  } else if(monkeySliderValue == 1 && evolutionSliderValue == 4){
    evolutionCase = 17;
  } else if(monkeySliderValue == 2 && evolutionSliderValue == 4){
    evolutionCase = 18;
  } else if(monkeySliderValue == 3 && evolutionSliderValue == 4){
    evolutionCase = 19;
  } else if(monkeySliderValue == 4 && evolutionSliderValue == 4){
    evolutionCase = 20;
  } else if(monkeySliderValue == 5 && evolutionSliderValue == 4){
    evolutionCase = 21;
  } else{
    evolutionCase = 0;
  }

}
