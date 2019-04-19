//Prevent page scrolling
document.addEventListener('touchstart', function(e) {e.preventDefault()}, false);
document.addEventListener('touchmove', function(e) {e.preventDefault()}, false);

//https://codepen.io/DonKarlssonSan/pen/wgWyWx

let dragging = false; // Is the object being dragged?
let rollover = false; // Is the mouse over the ellipse?

let dragging2 = false; // Is the object being dragged?
let rollover2 = false; // Is the mouse over the ellipse?


let x, y;
var offsetX, offsetY;
let w = 100;
let h = 100;

let x2, y2;
var offsetX2, offsetY2;
let w2 = 30;
let h2 = 30;

let face, nose;

function preload(){
  face = loadImage('test.svg');
  nose = loadImage('nose.svg');
}

function setup(){

  createCanvas(windowWidth, windowHeight);

  x = 100;
  y = 100;

  x2 = 200;
  y2 = 200;

}

function draw(){
  background(220);

  push();
    // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;

  }
  else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }


  if(x > 0 && x <= width/4){
    tint(255, 0, 0);
  } else if(x > width/4 && x <= width/2){
    tint(0, 255, 0);
  } else if(x > width/2 && x <= 3*width/4){
    tint(0, 0, 255);
  } else if(x > 3*width/4 && x <= width){
    tint(125, 62, 25);
  }
  image(face, x, y, w, h);
  // console.log(rollover);
  pop();

  if (mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2) {
    rollover2 = true;
  }
  else {
    rollover2 = false;
  }

  if (dragging2) {
    x2 = mouseX + offsetX2;
    y2 = mouseY + offsetY2;
  }

  image(nose, x2, y2, w2, h2);

}

// function drawImage(){
//   // push();
//   // translate(x,y);
//   // rotate(frameCount/30);
//   // rect(0, 0, 250, 330);
//   image(face, x, y, w, h);
//   // pop();
// }

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }

  if (mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2) {
    dragging2 = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX2 = x2-mouseX;
    offsetY2 = y2-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;

  dragging2 = false;
}
