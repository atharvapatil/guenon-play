//References
//https://p5js.org/reference/#/p5.Element/id
// https://p5js.org/reference/#/p5/createButton
// https://p5js.org/reference/#/p5/createSlider

//Prevent page scrolling
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

function preload(){
  img = loadImage('test.svg');
  img2 = loadImage('test.svg');
  img3 = loadImage('test.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderMonkeys = createSlider(0, 5, 0);
  sliderMonkeys.position(width - 200 - sliderMonkeys.width, height/2 );
  sliderMonkeys.id('slider');

  sliderEvolution = createSlider(1, 5, 1);
  sliderEvolution.position(width - 200 - sliderEvolution.width, height/2 + 50);
  sliderEvolution.id('slider');

}


function draw() {
  background(40);

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
      levelOne();
      console.log(evolutionCase);
      break;
    case 2:
      levelTwo();
      console.log(evolutionCase);
      break;
    case 3:
      levelThree();
      console.log(evolutionCase);
      break;
    default:
      fill(255);
      textSize(24);
      textAlign(CENTER);
      text("Welcome to reality, Agent Smith", width/2, height/2);
      // console.log(monkeySliderValue '+' evolutionSliderValue);
  }




}

function levelOne(){
  tint(140, 45, 200);
  image(img, 100, 100, 50, 60);
  r = 255;
  g = 20;
  b = 255;
}

function levelTwo(){
  tint(140,45, 200);
  image(img, 100, 100, 50, 60);
  tint(40, 145, 200);
  image(img2, 100, 300, 90, 60);
  r = 10;
  g = 255;
  b = 10;
}

function levelThree(){
  tint(40, 145, 200);
  image(img, 100, 100, 50, 60);
  tint(140, 45, 200);
  image(img2, 100, 300, 90, 60);
  tint(0, 245, 200);
  image(img3, 400, 300, 30, 60);
  r = 255;
  g = 10;
  b = 10;
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
