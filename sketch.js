var i = 1;

function setup() {
  createCanvas(800, 400);
  fill(0, 0, 255);
  rect(0, 0, width, height);

}

function draw() {
  //translate(0, height);
  stroke(240);

  x1 = -100;
  x3 = 900;
  x2 = random(0, width);
  y = random(100,height);
  s=(1*height-y)*10/y;

  if (x1 < x2 && x2 < x3 && (x3 - x1)>100 && i < 40) {
    strokeWeight(s);
    fill(12, 77, 105);
    triangle(x1, height, x2, y, x3, height);
    i++;
    print(x3 - x1);

  }
//save('myCanvas.jpg')

}