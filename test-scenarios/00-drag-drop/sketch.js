// Reference: http://coursescript.com/notes/interactivecomputing/mobile/dragdrop/

//Prevent page scrolling
document.ontouchmove = function(event){
  event.preventDefault();
}

var dragging = false; // Is the object being dragged?
var intersection = false; // Is the mouse over the ellipse?

var x, y, r;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Starting location
  x = 50;
  y = 50;
  // Dimension
  r = 50;

}

function otherSide(){

  noStroke();

  if(x > 0 && x <= width/4){
    fill(255, 0, 0);
  } else if(x > width/4 && x <= width/2){
    fill(0, 255, 0);
  } else if(x > width/2 && x <= 3*width/4){
    fill(0, 0, 255);
  } else if(x > 3*width/4 && x <= width){
    fill(125, 62, 25);
  }
  ellipse(50, 200, 50);
}

function draw() {
  background(20);

  // Is mouse over object
  if (mouseX > x - r && mouseX < x + r && mouseY > y - r && mouseY < y + r) {
    intersection = true;
  }
  else {
    intersection = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  noStroke();
  // Different fill based on state
  if (dragging) {
    fill (190);
  } else if (intersection) {
    fill(210);
  }

  changeColour();
  ellipse(x, y, r);

  //Drawing seperators on the screen
  drawSeperators();

  otherSide()

}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x - r && mouseX < x + r && mouseY > y - r && mouseY < y + r) {
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

function changeColour(){
  if(x > 0 && x <= width/4){
    fill(255, 0, 0);
  } else if(x > width/4 && x <= width/2){
    fill(0, 255, 0);
  } else if(x > width/2 && x <= 3*width/4){
    fill(0, 0, 255);
  } else if(x > 3*width/4 && x <= width){
    fill(125, 62, 25);
  }
}

function drawSeperators(){
  fill(220);
  stroke(150);
  line(width/4, 0, width/4, height);
  line(width/2, 0, width/2, height);
  line(3*width/4, 0, 3*width/4, height);
}
