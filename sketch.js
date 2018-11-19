// POINT LINE & ARC
p = 5;

lat = 42.3736; // latitude Cambridge MA 42.3736° N
deglat = 15;
deglatbelow = -6;
degazi = 15;

function preload() {
  img = loadImage('assets/earthmoon.jpg');
}

// ***********************************
function setup() {
  
  
	planets();
	s0 = 255;
	s1 = 40;
	s2 = 60;
	s3 = 80;
	s4 = 160;

	s1 = 255;
	s2 = 255;
	s3 = 255;
	s4 = 255;

	ts = 40; // large images
	ts = 60; // small images (panel)
	ts2 = 16;

	w = 1800;
	h = 1100;
	createCanvas(w, h);

	tcap = 360;
	v1 = 255;
	v2 = v1 + 210;
	symv = 100;

	angleMode(DEGREES);
	alpha1 = (90 - inc) / 2;
	tcap = 360;
	radcap = tcap / 2;
	radequ = radcap * tan(alpha1);
	radcan = radequ * tan(alpha1);

	radecl = (radcap + radcan) / 2; // ecliptic radius
	xpol = -radequ * tan(inc / 2); // ecliptic pole
	xecl = -radcap + (radcap + radcan) / 2; // ecliptic center
}

// ***********************************
function ringtop() {
	push();
	ellipse(0, 0, 2 * radequ, 2 * radequ);
	//line(-radcap, 0, radcap, 0); // hieaxis
	pop();
}

// ***********************************
function ringbot() {
	strokeWeight(2);
	//stroke(184, 115, 51);
	ellipse(0, 0, tcap, tcap);
	ellipse(0, 0, radequ * 2, radequ * 2);
	ellipse(0, 0, radcan * 2, radcan * 2);

	strokeWeight(1);
	//stroke(s3);
	ellipse(0, 0, tcap + 20, tcap + 20); // cap ring in
	ellipse(0, 0, tcap + 20, tcap + 20); // cap ring in
	ellipse(0, 0, tcap + 20, tcap + 20); // cap ring in (0, 0, tcap, tcap);
	ellipse(0, 0, tcap + 40, tcap + 40); // cap ring out
	ellipse(0, 0, tcap + 40, tcap + 40); // cap ring out
	ellipse(0, 0, tcap + 40, tcap + 40); // cap ring out
}

// ***********************************
function lati() {
	for (i = 0; i <= 7; i++) {
		alpha1 = (90 - lat - deglat * i) / 2;
		alpha2 = (90 + lat - deglat * i) / 2;
		xl = radequ * tan(alpha1); // left dropline line x
		xr = radequ * tan(alpha2); // right dropdown line x

		translate(-(xl - xr) / 2, 0);
		noFill();
		//fill(0, 0, 140); // BLUE SKY FILL
		ellipse(0, v2, xl + xr, xl + xr);
		translate((xl - xr) / 2, 0); // reverse origin of horizon
	}
}


// ***********************************
function latliines() {
	for (i = 0; i <= 8; i++) {
		alpha3 = (90 - lat - deglat * i) / 2;
		beta3 = (90 + lat - deglat * i) / 2;
		xl = radequ * tan(alpha3); // left dropline line x
		xr = radequ * tan(beta3); // right dropdown line x

		//stroke(s1);
		line(-xl, 0, -xl, v2); // left drop line
		line(xr, 0, xr, v2); // right drop line
		//stroke(s2);

		//stroke(255,0,0);
		//line(-xl, 0, xr, 0); // top ring hor
		line(-xl, v2, xr, v2); // bot ring hor
		//stroke(s2);
		// upper latitudes
		line(-radequ * cos(lat + deglat * i), -radequ * sin(lat + deglat * i), radequ * cos(lat - deglat * i), radequ * sin(lat - deglat * i)); // par upper white
		// south celestrial pole to latitudes
		line(-radequ * cos(lat + deglat * i), -radequ * sin(lat + deglat * i), 0, radequ); // lower white
		// bottom angle line
		line(0, radequ, xr, 0);
	}
}

// ***********************************
function latibelow() {
	for (i = 0; i <= 3; i++) {
		alpha1 = (90 - lat - deglatbelow * i) / 2;
		alpha2 = (90 + lat - deglatbelow * i) / 2;
		xl = radequ * tan(alpha1); // left dropline line x
		xr = radequ * tan(alpha2); // right dropdown line x

		translate(-(xl - xr) / 2, 0);
		//stroke(255,0,0);
		ellipse(0, v2, xl + xr, xl + xr); // ellipse
		//stroke(s1);
		translate((xl - xr) / 2, 0); // return to origin
	}
}

// ***********************************
function latliinesbelow() {
	for (i = 0; i <= 3; i++) {
		alpha3 = (90 - lat - deglatbelow * i) / 2;
		beta3 = (90 + lat - deglatbelow * i) / 2;
		xl = radequ * tan(alpha3); // left dropline line x
		xr = radequ * tan(beta3); // right dropdown line x

		//stroke(s3);
    //stroke(140);
		line(-xl, 0, xr, 0); // top ring hor
		line(-xl, v2, xr, v2); // bot ring hor
		//stroke(s1);
		line(-xl, 0, -xl, v2); // left drop line
		line(xr, 0, xr, v2); // right drop line

		// upper latitudes
		line(-radequ * cos(lat + deglat * i), -radequ * sin(lat + deglat * i), radequ * cos(lat - deglat * i), radequ * sin(lat - deglat * i)); // par upper white
		// south celestrial pole to latitudes
		line(-radequ * cos(lat + deglat * i), -radequ * sin(lat + deglat * i), 0, radequ); // lower white
		// bottom angle line
		line(0, radequ, xr, 0);
		//stroke(s1);
	}
}

// ***********************************
function azi() {
	for (ii = -5; ii <= 5; ii++) {
		//stroke(s1);
		if (ii == -5 || ii == 5) {
		   stroke(64,224,208);
		}

		xxl = -tan((180 - lat) / 2) * radequ;
		xxr = tan(lat / 2) * radequ;
		xxt = xxl + xxr;
		xxm = xxt / 2;
		//xxm = (-xxl + xxr) / 2 + xxl;
		//noprotect

		translate(xxm, v2);
		//noFill();
		ellipse(xxr, tan(degazi * ii) * xxm, 2 * xxm / cos(degazi * ii));
		translate(-xxm, -v2);
	}
}


// ***********************************
function aziliines() {
	for (ii = -6; ii <= 6; ii++) {
		xxl = -tan((180 - lat) / 2) * radequ;
		xxr = tan(lat / 2) * radequ;
		xxt = xxl + xxr;
		xxm = xxt / 2;

	//	stroke(160);
		//line(0, radequ, 0, -radequ); // vertical top
		line(xxl, 0, xxr, 0); // horizontal top
		//line(0, -radcap + v2, 0, radcap + v2); // vertical bot
		//line(xxl, v2, radcap, v2); // horizontal bot

		line(0, 0, -cos(90 - lat) * radequ, sin(90 - lat) * radequ); // zenith nadir axis
		line(0, 0, cos(90 - lat) * radequ, -sin(90 - lat) * radequ); // zenith nadir axis

		line(0, radequ, xxl, 0); // top left angle
		line(0, radequ, cos(90 - lat) * radequ, -sin(90 - lat) * radequ); // right angle

		line(xxl, 0, xxl, v2); // left drop
		line(xxr, 0, xxr, v2); // right drop
		//line(xxm, 0, xxm, v2); // mid drop

		translate(0, v2);
		//mid drop
		//line(xxm, tan(90 - degazi * 1) * -xxm, xxm, -tan(90 - degazi * 1) * -xxm); // mid drop

		//stroke(s1);
		//line(xxl, 0, xxm, tan(90 - degazi * ii) * xxm); // left side of triangle
		//line(xxr, 0, xxm, tan(90 - degazi * ii) * xxm); // right side of triangle

		translate(0, -v2);
		noLoop();
	}
}

// ***********************************
function rete() {
	// radcap = radius of tropic of capricorn
	// radequ = radius of equator
	// radcan = radius of tropic of cancer
	// radecl = radius of ecliptic
	// inc = obliquity of ecliptic

	// 0,0 = equator center
	radecl = (radcap + radcan) / 2; // ecliptic radius
	xpol = -radequ * tan(inc / 2); // ecliptic pole
	xecl = -radcap + (radcap + radcan) / 2; // ecliptic center

	strokeWeight(1);
//	stroke(s2);
	//line(0, radcap, 0, -v2); // ver bot
	//line(-radcap, 0, radcap, 0); // hor bot

	noFill();
	//stroke(255, 223, 0);
	//stroke(180);
	//stroke(255, 255, 10);
//	stroke(s4);
	for (i = 1; i <= 6; i++) {
		ellipse(xecl, 0, 2 * radecl + -i); // ecliptic ring
	}
}

// ***********************************
function rete2() {
	radecl = (radcap + radcan) / 2; // ecliptic radius
	xpol = -radequ * tan(inc / 2); // ecliptic pole
	xecl = -radcap + (radcap + radcan) / 2; // ecliptic center

	strokeWeight(10);
//	stroke(255, 255, 0);
	//point(xecl, 0);
	//stroke(255, 0, 255);
	//point(xpol, 0);
	fill(255);
//	stroke(255);
	//point(xecl - radecl, 0);
	//point(xecl + radecl, 0);
	//point(0, radequ);
	//point(0, -radequ);

	// lines from ecliptic pole to equator degrees
	strokeWeight(1);
	//stroke(s2);
	for (i = 0; i <= 11; i++) {
		//line(xpol, 0, radequ * cos(i * 30), -radequ * sin(i * 30));
	}
}

// ***********************************
function rete3() {
	for (var gl = 0; gl <= 12; gl++) {
		if (gl == 1 || gl == 2 || gl == 4 || gl == 5) {
			m1 = (radequ * sin(gl * 30) + xpol) / (radequ * cos(gl * 30));
			qa = 1.0 + m1 * m1;
			qb = -2.0 * (xpol + xecl * m1 * m1);
			qc = xpol * xpol + m1 * m1 * (xecl * xecl - radecl * radecl);
			ac = 4.0 * qa * qc;
			b2 = qb * qb;
			f1 = -qb;
			f2 = sqrt(b2 - ac);
			f3 = 2.0 * qa;

			x2 = (f1 - f2) / f3;
			y2 = (x2 - xpol) / m1;

			strokeWeight(10);
			//stroke(255);
			//point(x2, y2);

			strokeWeight(1);
			//stroke(s2);
			//line(xpol, 0, x2, y2);
			//line(0, 0, x2, y2);
			//strokeWeight(10);
			//stroke(255);
			//point(x2, y2);
		}

		if (gl == 7 || gl == 8 || gl == 10 || gl == 11) {
			m1 = (radequ * sin(gl * 30) + xpol) / (radequ * cos(gl * 30));
			qa = 1.0 + m1 * m1;
			qb = -2.0 * (xpol + xecl * m1 * m1);
			qc = xpol * xpol + m1 * m1 * (xecl * xecl - radecl * radecl);
			ac = 4.0 * qa * qc;
			b2 = qb * qb;
			f1 = -qb;
			f2 = sqrt(b2 - ac);
			f3 = 2.0 * qa;

			x1 = (f1 + f2) / f3;
			y1 = (x1 - xpol) / m1;

			strokeWeight(1);
         stroke(64,224,208);
			//stroke(s2);
			//line(xpol, 0, x1, y1);
			//lne(0, 0, x1, y1);

			//strokeWeight(10);
			//stroke(255);
			//point(x1, y1);
		}
		noLoop();
	}
}

// ***********************************
function deg60() { // 60 marks
	// stroke(225, 127, 50);
     stroke(64,224,208);
	//stroke(s1);
	for (var d = 0; d < 360; d = d + 6) {
		//line(radcap * sin(d), radcap * cos(d), (radcap + 10) * sin(d), (radcap + 10) * cos(d)); // marks at 6 degrees
	}
}

// ***********************************
function deglday() { // length of day
	//stroke(184, 115, 51);
	//stroke(s1);
	hrs = round(lday / 2);
	for (var d = 0; d <= hrs; d++) {
		//line((radcap + 10) * sin(d * 360 / hrs), (radcap + 10) * cos(d * 360 / hrs), (radcap + 10 + 10) * sin(d * 360 / hrs), (radcap + 10 + 10) * cos(d * 360 / hrs));
	}
}

// ***********************************
function mask() {
	//stroke(s0);
	for (ii = 0; ii < 1200; ii++) {
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 0, 90);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 0, 90);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 270, 0);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 270, 0);

		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 90, 180);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 90, 180);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 180, 270);
		arc(0, 0, radcap * 2 + 1 + ii, radcap * 2 + 1 + ii, 180, 270);
	}
}

// ***********************************
function planets() {
	print(p);
	if (p == 1) {
		inc = 0.034;
		lday = 4222.6 / 100;
		orbper = 88;
	}
	if (p == 2) {
		inc = 177.4;
		lday = 2802.0 / 100;
		orbper = 224.7;
	}
	if (p == 3) {
		inc = 23.4;
		lday = 24.0;
		orbper = 365.2;
	}
	if (p == 4) {
		inc = 25.2;
		lday = 24.7;
		orbper = 687;
	}
	if (p == 5) {
		inc = 3.1;
		lday = 9.9;
		orbper = 4331;
	}
	if (p == 6) {
		inc = 26.7;
		lday = 10.7;
		orbper = 10747;
	}
	if (p == 7) {
		inc = 97.8;
		lday = 17.2;
		orbper = 30589;
	} else if (p == 8) {
		inc = 28.3;
		lday = 16.1;
		orbper = 59800;
	}
}



// ***********************************
function xpng() {
	if (p == 1) {
		save('1 LINE ARC Mercury.png');
	}
	if (p == 2) {
		save('2 LINE ARC Venus.png');
	}
	if (p == 3) {
		save('3 LINE ARC Earth.png');
	}
	/*if (p == 4) {
	  save("4 LINE ARC Mars.png");
	}
	if (p == 5) {
	  save("5 LINE ARC Jupiter.png");
	}
	if (p == 6) {
	  save("6 LINE ARC Saturn.png");
	}
	if (p == 7) {
	  save("7 LINE ARC Uranus.png");
	}
	if (p == 8) {
	  save("8 LINE ARC Neptune.png")
	}*/
}

function symbol() {
	textAlign(CENTER);
	textFont('Helvetica');
	fill(sym1);
	textSize(200);
	translate(w / 2, h / 4 * 3);

	if (p == 1) {
		text('☿', 0, 0);
	}
	if (p == 2) {
		text('♀', 0, 0);
	}
	if (p == 3) {
		text('♁', 0, 0);
	}
	if (p == 4) {
		text('♂', 0, 0);
	}
	if (p == 5) {
		text('♃', 0, 0);
	}
	if (p == 6) {
		text('♄', 0, 0);
	}
	if (p == 7) {
		text('♅', 0, 0);
	}
	if (p == 8) {
		text('♆', 0, 0);
	}
	translate(-w / 2, 0);
	pop();
}


// ***********************************
function draw() {
	background(255);
	fill(255);
  
  tint(0, 103, 255, 255);
  brightness(255);
  //scale(0.55)
  image(img, 400, 50);
	//stroke(200);
	//rect(0, 0, 1100 - 1, 1100 - 1);
   //stroke(64,224,208);
     stroke(200,255,255);
  //stroke(255,0,0);
	push();

	textAlign(CENTER);
	translate(w / 2, 1070);
	//translate(w / 2, h / 2);
	print(w / 2);
	textSize(60);
	//noStroke();
	//fill(160);
	//text('☿', 0, 0);
	pop();

  push();
	noFill();
	strokeWeight(1);
	//stroke(s1);

	//translate(w / 2 - 60, 30);
	translate(w / 2, 30);
	scale(0.65);
	//translate(23, 1100 / 2 - 470);
	translate(0, 1100 / 2 - 470);
	translate(0, v1);
	ringtop();
	lati();
	latibelow();
	azi();
	//xpng();

	translate(0, v2);
	//mask(); 

	translate(0, -v2);
	//latliines();
	//latliinesbelow();
	//aziliines();

	translate(0, v2);
	ringbot();
	deglday(); //clock (12 marks - 1 every hour)
	//deglday();
	deg60(); //compass (60 marks - 1 every 6°)
	//deg60();

	rete(); // eliptic
	ringbot();
	rete2(); // 0 90 180 270
	rete3(); // 30 60 120 150 210 240 300 330
	//ringtop();
  
	save('1 ASTRO Mercury.png');
  pop();
	noLoop();
}