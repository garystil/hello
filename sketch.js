// Charis Pang Portfolio
// global variables, windowresize fxn, setup fxn, draw fxn
// draw fxn contains: (1) name fxn (2) bio & project txt fxn (3) project list fxn (4) project image fxn
// mousePressed fxn 

proj = 0;

h = 1000;
xx1 = 420; // name, bio & project text x adjustment from middle
xx2 = 470; // project list x adjustment from middle
yspace = 26; // space between lines of text


textsize1 = 32; // name
textsize2 = 18; // bio & project text
textsize3 = 14;
textfill1 = 0;
textfill2 = 0;

var blinkTime;
var blinkOn;
var project;

function preload() {
  font1 = loadFont('assets/font/Roboto-Light.ttf');
  font2 = loadFont('assets/font/Montserrat-Light.ttf');

  // home1 = loadImage('assets/home/home1.jpg');
  // home2 = loadImage('assets/home/home2.jpg');
  charis01 = loadImage('assets/home/charis01.jpg');
  charis02 = loadImage('assets/home/charis02.jpg');
  charis03 = loadImage('assets/home/charis03.jpg');
  // charis01 = loadImage('assets/home/charis001.png');


  brain01 = loadImage('assets/brain/brain01.jpg');
  /*brain02 = loadImage('assets/brain/brain02.jpg');
  brain03 = loadImage('assets/brain/brain03.jpg');
  brain04 = loadImage('assets/brain/brain04.jpg');
  brain05 = loadImage('assets/brain/brain05.jpg');
  brain06 = loadImage('assets/brain/brain06.jpg');
  brain07 = loadImage('assets/brain/brain07.jpg');
  brain08 = loadImage('assets/brain/brain08.jpg');
  brain09 = loadImage('assets/brain/brain09.jpg');
  brain10 = loadImage('assets/brain/brain10.jpg');
  brain11 = loadImage('assets/brain/brain11.jpg');
  brain12 = loadImage('assets/brain/brain12.jpg');
  brain13 = loadImage('assets/brain/brain13.jpg');
  brain14 = loadImage('assets/brain/brain14.jpg');
  brain15 = loadImage('assets/brain/brain15.jpg');
  brain16 = loadImage('assets/brain/brain16.jpg');
  brain17 = loadImage('assets/brain/brain17.jpg');
  brain18 = loadImage('assets/brain/brain18.jpg');
  brain19 = loadImage('assets/brain/brain19.jpg');
  brain20 = loadImage('assets/brain/brain20.jpg');
  
  drum01 = loadImage('assets/drum/drum01.jpg');
  drum02 = loadImage('assets/drum/drum02.jpg');
  drum03 = loadImage('assets/drum/drum03.jpg');
  drum04 = loadImage('assets/drum/drum04.jpg');
  drum05 = loadImage('assets/drum/drum05.jpg');
  drum06 = loadImage('assets/drum/drum06.jpg');
  drum07 = loadImage('assets/drum/drum07.jpg');
  drum08 = loadImage('assets/drum/drum08.jpg');
  drum09 = loadImage('assets/drum/drum09.jpg');
  drum10 = loadImage('assets/drum/drum10.jpg');
  drum11 = loadImage('assets/drum/drum11.jpg');
  drum12 = loadImage('assets/drum/drum12.jpg');

  wind01 = loadImage('assets/wind/wind01.jpg');
  wind02 = loadImage('assets/wind/wind02.jpg');
  wind03 = loadImage('assets/wind/wind03.jpg');
  wind04 = loadImage('assets/wind/wind04.jpg');
  wind05 = loadImage('assets/wind/wind05.jpg');
  wind06 = loadImage('assets/wind/wind06.jpg');
  wind07 = loadImage('assets/wind/wind07.jpg');
  wind08 = loadImage('assets/wind/wind08.jpg');
  wind09 = loadImage('assets/wind/wind09.jpg');
  wind10 = loadImage('assets/wind/wind10.jpg');
  */

  wear01 = loadImage('assets/sketch/wearable01.jpg');
  wear02 = loadImage('assets/sketch/wearable02.jpg');
  wear03 = loadImage('assets/sketch/wearable03.jpg');
  wear04 = loadImage('assets/sketch/wearable04.jpg');
  wear05 = loadImage('assets/sketch/wearable05.jpg');
  wear06 = loadImage('assets/sketch/wearable06.jpg');

  sketch01 = loadImage('assets/sketch/sketch01.jpg');
  sketch02 = loadImage('assets/sketch/sketch02.jpg');
  sketch03 = loadImage('assets/sketch/sketch03.jpg');
  sketch04 = loadImage('assets/sketch/sketch04.jpg');
  sketch05 = loadImage('assets/sketch/sketch05.jpg');
  sketch06 = loadImage('assets/sketch/sketch06.jpg');
  sketch07 = loadImage('assets/sketch/sketch07.jpg');
  sketch08 = loadImage('assets/sketch/sketch08.jpg');
  sketch09 = loadImage('assets/sketch/sketch09.jpg');
  sketch10 = loadImage('assets/sketch/sketch10.jpg');
  sketch11 = loadImage('assets/sketch/sketch11.jpg');
  sketch12 = loadImage('assets/sketch/sketch12.jpg');
}

function windowResized() {
  resizeCanvas(windowWidth, h);
}

function setup() {
  createCanvas(windowWidth, h);
  blinkTime = millis();
  blinkOn = true;
}

function draw() {
  push();
  background(255);
  translate(0, 10);
  button();
  project_list()
  wrap();

  if (proj == 0) {
    txt_home()
    img_home();
    title_home();
    blink();
  }
  if (proj == 1) {
    txt_brain();
    img_brain();
    title_brain();
  }
  if (proj == 2) {
    txt_drum();
    img_drum();
    title_drum();
  }
  if (proj == 3) {
    txt_wind()
    img_wind();
    title_wind();
  }
  if (proj == 4) {
    txt_wear();
    img_wear();
    title_wear();
  }
  if (proj == 5) {
    txt_install();
    img_install();
    title_install();
  }
  if (proj == 6) {
    txt_apps();
    img_apps();
    title_apps();
  }
  if (proj == 7) {
    txt_code();
    img_code();
    title_code();
  }
  if (proj == 8) {
    txt_hack();
    img_hack();
    title_hack();
  }
  if (proj == 9) {
    img_sketch();
    //txt_sketch();
    title_sketch();
  }
  if (proj == 10) {
    txt_site()
    img_site();
    title_site();
    //noLoop();
  }
  pop();
}

function button() {
  push();
  translate(0, 32);
  stroke(160);
  noFill();
  ellipse(windowWidth / 2 - xx2 - 16, 4, 16, 16);
  pop();
}

function project_list() { // 9 Projects
  push();
  translate(-10, 28 + 52);
  textAlign(RIGHT, CENTER);
  textFont(font1);
  fill(textfill1);
  noStroke();
  textSize(textsize3);
  text("Brain Wave Sonification", windowWidth / 2 - xx2, 0);
  text("Digital Drum Ball", windowWidth / 2 - xx2, yspace);
  text("Painting by Wind", windowWidth / 2 - xx2, yspace * 2);
  text("Wearables", windowWidth / 2 - xx2, yspace * 3);
  text("Installations", windowWidth / 2 - xx2, yspace * 4);
  text("Apps", windowWidth / 2 - xx2, yspace * 5);
  text("Creative Code", windowWidth / 2 - xx2, yspace * 6);
  text("MIT Hacking Arts", windowWidth / 2 - xx2, yspace * 7);
  text("Sketching & Painting", windowWidth / 2 - xx2, yspace * 8);
  text("p5.js Website", windowWidth / 2 - xx2, yspace * 9);
  pop();
}

// PROJECT BUTTONS
function mouseClicked() {
  push();
  if (mouseX > windowWidth / 2 - xx2 - 16 - 8 && mouseX < windowWidth / 2 - xx2 - 16 + 8 && mouseY > 36 && mouseY < 52) {
    proj = 0;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 * 1) && mouseY < 78 + 26) {
    proj = 1;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 1) && mouseY < 78 + 26 * 2) {
    proj = 2;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 2) && mouseY < 78 + 26 * 3) {
    proj = 3;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 3) && mouseY < 78 + 26 * 4) {
    proj = 4;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 4) && mouseY < 78 + 26 * 5) {
    proj = 5;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 5) && mouseY < 78 + 26 * 6) {
    proj = 6;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 6) && mouseY < 78 + 26 * 7) {
    proj = 7;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 7) && mouseY < 78 + 26 * 8) {
    proj = 8;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 8) && mouseY < 78 + 26 * 9) {
    proj = 9;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 9) && mouseY < 78 + 26 * 10) {
    proj = 10;
  }
  if (mouseX > windowWidth / 2 - xx2 + 13 - 170 && mouseX < windowWidth / 2 - xx2 + 13 && mouseY > (78 + 26 * 10) && mouseY < 78 + 26 * 11) {
    proj = 10;
  }
  pop();
  return false;
}


// 0 HOME **********************************

function img_home() {
  imageMode(CORNER);
  push()
  translate(-340.5, 260 + 13);
  image(charis02, windowWidth / 2, 0, 340.5, 300);
  translate(190.25, 0);
  image(charis01, windowWidth / 2, 0, 340.5, 300);
  translate(190.25, 0);
  image(charis03, windowWidth / 2, 0, 340.5, 300);
  pop();
}

function txt_home() {
  push();
  translate(0, 80);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);
  fill(textfill1);
  noStroke();

  text(">    Hello World, I’m Charis, a small potato from a small island.", windowWidth / 2 - xx1, 0);
  text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_home() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Designer';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Designer", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}

function blink() {
  push();
  translate(0, 80);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);
  if (blinkOn)
    text("|", windowWidth / 2 - xx1 + 24, yspace * 6);
  if (millis() - 500 > blinkTime) {
    blinkTime = millis();
    blinkOn = !blinkOn;
  }
  pop();
}


// 1 BRAIN **********************************

function img_brain() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  image(brain01, windowWidth / 2, 0, 800, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_brain() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the brain wave sonfication text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_brain() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Brain Wave Sonification';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Brain Wave Sonification", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}


// 2 DRUM **********************************

function img_drum() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  //image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_drum() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the drum ball text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_drum() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Digital Drum Ball';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Digital Drum Ball", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}



// 3 WIND **********************************

function img_wind() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  // image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_wind() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the wind text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_wind() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Painting by Wind';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Painting by Wind", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}


// 4 WEAR **********************************

function img_wear() {
  imageMode(CORNER);

  //translate(0, 380);
  push(); //row01
  translate(-400, 380);
  image(wear01, windowWidth / 2, 380, 800, 346);
  pop();

  //translate(0, 356);
  push(); //row02
  translate(-334.5, 0);
  image(wear02, windowWidth / 2, 380 + 356);
  image(wear02, windowWidth / 2 + 223, 380 + 356);
  image(wear02, windowWidth / 2 + 223 * 2, 380 + 356);
  pop();

  //translate(0, 210);
  push(); //row03
  //translate(-516, 0);
  image(wear03, windowWidth / 2 - 380, 380 + 356 + 210);
  image(wear04, windowWidth / 2 - 380 + 200 + 10, 380 + 356 + 210);
  image(wear05, windowWidth / 2 - 380 + 200 + 10, 380 + 356 + 210);
  image(wear06, windowWidth / 2 - 380 + 200 + 10, 380 + 356 + 210);

  pop();
  //translate(0, -210 - 210 - 380);
}

function txt_wear() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the wearables text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_wear() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//|  Wearables';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Wearables", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}



// 5 INSTALL **********************************

function img_install() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  //image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_install() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the installations text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_install() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Installations';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Installations", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}


// 6 APPS **********************************

function img_apps() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  //image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_apps() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the apps text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_apps() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Apps';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Apps", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}


// 7 CREATIVE CODE **********************************

function img_code() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  //image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_code() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the creative code text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_code() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Creative Code';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Creative Code", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}


// 8 MIT HACK **********************************

function img_hack() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  // image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_hack() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the MIT hackathon text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_hack() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  MIT Hacking Arts';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  MIT Hacking Arts", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}

// 9 SKETCHING & PAINTING **********************************

function img_sketch() {
  imageMode(CORNER);

  push();
  translate(-362.5, 93);
  image(sketch01, windowWidth / 2, 0);
  translate(232 + 10, 0);
  image(sketch02, windowWidth / 2, 0);
  translate(182 + 10, 0);
  image(sketch03, windowWidth / 2, 0);
  pop();

  push();
  translate(-416, 93 + 210);
  image(sketch04, windowWidth / 2, 0);
  translate(155 + 10, 0);
  image(sketch05, windowWidth / 2, 0);
  translate(156 + 10, 0);
  image(sketch06, windowWidth / 2, 0);
  translate(158 + 10, 0);
  image(sketch07, windowWidth / 2, 0);
  translate(156 + 10, 0);
  image(sketch08, windowWidth / 2, 0);
  pop();

  push();
  translate(-516, 93 + 210 + 210);
  image(sketch09, windowWidth / 2, 0);
  translate(287 + 10, 0);
  image(sketch10, windowWidth / 2, 0);
  translate(254 + 10, 0);
  image(sketch11, windowWidth / 2, 0);
  translate(271 + 10, 0);
  image(sketch12, windowWidth / 2, 0);
  pop();
}

function txt_sketch() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  /*
  //text(">    This will be the Sketching & Paintikng text", windowWidth / 2 - xx1, 0);
  */
  pop();
}

function title_sketch() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  Sketching & Painting';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  Sketching & Painting", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}



// 10 p5.js website **********************************

function img_site() {
  push();
  translate(0, 380);
  imageMode(CENTER);
  //image(maeda, windowWidth / 2, 0, 949, 200);
  //translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  translate(0, 210);
  //image(bamboo, windowWidth / 2, 0, 949, 200);
  pop();
}

function txt_site() {
  push();
  translate(0, 80);
  fill(textfill1);
  noStroke();
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize2);

  text(">    This will be the p5.js website text", windowWidth / 2 - xx1, 0);
  //text(">    I graduated from Hong Kong CityU with a BSc (Hons) in Creative Media and a minor in Psychology.", windowWidth / 2 - xx1, yspace);
  //text(">    My work bridges art and technology, solves problems and inspires joy.", windowWidth / 2 - xx1, yspace * 2);
  //text(">    I enjoy learning through exploration and helping others.", windowWidth / 2 - xx1, yspace * 3);
  //text(">    My ambition is to create inclusive products & services that serve those on the autism spectrum.", windowWidth / 2 - xx1, yspace * 4);
  //text(">    I look forward to attending grad school to build, test and share my ideas in a diverse design community.", windowWidth / 2 - xx1, yspace * 5);
  //text(">", windowWidth / 2 - xx1, yspace * 6);
  pop();
}

function title_site() {
  push();
  translate(0, 32);
  textAlign(LEFT, CENTER);
  textFont(font1);
  textSize(textsize1);
  noStroke();

  var t1String = 'Charis Pang  ';
  var t1Width = textWidth(t1String);
  var t2String = '//  p5.js Website';
  var t2Width = textWidth(t2String);
  home = t1Width + t2Width;
  fill(textfill1);
  text("Charis Pang ", windowWidth / 2 - home / 2, 0);
  fill(100);
  text("//  p5.js Website", windowWidth / 2 - home / 2 + t1Width, 0);
  pop();
}

// **********************************



function wrap() {
  push();
  noFill();
  stroke(140);
  strokeWeight(1);
  curveTightness(50);
  beginShape();
  //rect(windowWidth / 2 - xx2 + 13, 16, -170, 26);
  //translate(60, -42);
  if (proj > 0) {
    translate(windowWidth / 2 - xx2 - 136, +10 + (proj - 1) * 26);
    curveVertex(10, 50);
    curveVertex(10, 50);
    curveVertex(33, 44);
    curveVertex(56, 58);
    endShape();
  }
  //print(proj);
  pop();
}