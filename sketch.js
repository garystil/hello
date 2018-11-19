var img;
var s = 1.2; //scale
w = 480;
h = 360;

function preload() {
  img = loadImage('assets/earthmoon.jpg');
  myFont = loadFont('assets/Roboto-Light.ttf');
}

function setup() {
  createCanvas(w * s, h * s);
  background(0, 25, 80);
}

function draw() {
  tint(0, 153, 224, 255);
  brightness(0);
  scale(0.55)
  image(img, 0, 0);
  rect(0,0,400,h);


  textFont(myFont);
  noStroke();
  fill(255);
  textSize(60);
  text('Where is Here?', 40, 80);
  textSize(30);
  text("Imagine if the explorers in George Mieles", 40, 120);
  text("Imagine if the explorers in George Mieles", 40, 160);
  text("Imagine if the explorers in George Mieles", 40, 200);
  text("Imagine if the explorers in George Mieles", 40, 240);
  text("Imagine if the explorers in George Mieles", 40, 280);
  text("Imagine if the explorers in George Mieles", 40, 320);
  text("Imagine if the explorers in George Mieles", 40, 360);

  text("Imagine if the explorers in George Mieles", 40, 400);
  text("Imagine if the explorers in George Mieles", 40, 440);
  text("Imagine if the explorers in George Mieles", 40, 480);
  text("Imagine if the explorers in George Mieles", 40, 520);
  text("Imagine if the explorers in George Mieles", 40, 560);
  text("Imagine if the explorers in George Mieles", 40, 600);
  text("Imagine if the explorers in George Mieles", 40, 640);

  text("Imagine if the explorers in George Mieles", 40, 680);
  text("Imagine if the explorers in George Mieles", 40, 720);
  text("Imagine if the explorers in George Mieles", 40, 760);
    text("Gary Stilwell", 840, 760);





  //save('tintmoon.png');
  noLoop();
}