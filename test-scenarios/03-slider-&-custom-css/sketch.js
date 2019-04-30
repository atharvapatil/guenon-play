//References
//https://p5js.org/reference/#/p5.Element/id
// https://p5js.org/reference/#/p5/createButton
// https://p5js.org/reference/#/p5/createSlider


//Prevent page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

let slider;
let button;
let r, g, b;
let sliderValue;

let customSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(1, 10, 5);
  slider.position(100, 100);
  // slider.style('width', '200px');
  slider.id('slider');



  button = createButton('Change Colour');
  button.position(width/2 - button.width, 50);
  button.mousePressed(changeColour);
  button.id('button');
}


function draw() {

  sliderValue = slider.value();

  background(sliderValue);
  // console.log(sliderValue);
  noStroke();
  fill(r, g, b);
  ellipse(width/2, height/2, 100);

}

function changeColour(){
  console.log("button pressed")

  if(sliderValue >= 0 && sliderValue <= 3){
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  } else if(sliderValue > 3 && sliderValue <= 6){
    r = 10;
    g = 255;
    b = 10;
  } else if(sliderValue > 6 && sliderValue <= 10){
    r = 255;
    g = 10;
    b = 10;
  }
}
