var a = [],
  b = [],
  c = [],
  d = [],
  e = [],
  f = [],
  g = [],
  h = [],
  j = [];

var fraz = [];
var cnt = 0;
let tijera;
let bar;
var timer = 0;
let fine, bad, current, derogated;
var derogText = "Afuera!";

let back, logo;
let backgroundMusic;
var state = "Menu";
var eff = 0,
  effd = 15;
var sizer = 0,
  sizerv = 2;
var timepast = 0;
var sequence = 0;
let no, hay, plata;
var timestamps = [2, 31, 39, 47, 54, 125, 135, 145];
var inSequence = false;
var seqTimer = 0;
function preload() {
  no = loadImage("sequence/no.png");
  hay = loadImage("sequence/hay.png");
  plata = loadImage("sequence/Plata.png");
  backgroundMusic = loadSound("videoplayback.weba");
  logo = loadImage("title.png");
  back = loadImage("background.png");
  tijera = loadImage("tijera.png");
  bar = loadImage("cra.png");
  fine = loadImage("lions/lionup.png");
  bad = loadImage("lions/liondown.png");
  a[0] = loadImage("fraces/aa.png");
  a[1] = loadImage("fraces/ab.png");
  a[2] = loadImage("fraces/ac.png");
  b[0] = loadImage("fraces/ba.png");
  b[1] = loadImage("fraces/bb.png");
  b[2] = loadImage("fraces/bc.png");
  c[0] = loadImage("fraces/ca.png");
  c[1] = loadImage("fraces/cb.png");
  c[2] = loadImage("fraces/cc.png");
  d[0] = loadImage("fraces/da.png");
  d[1] = loadImage("fraces/db.png");
  d[2] = loadImage("fraces/dc.png");
  e[0] = loadImage("fraces/ea.png");
  e[1] = loadImage("fraces/eb.png");
  e[2] = loadImage("fraces/ec.png");
  f[0] = loadImage("fraces/fa.png");
  f[1] = loadImage("fraces/fb.png");
  f[2] = loadImage("fraces/fc.png");
  g[0] = loadImage("fraces/ga.png");
  g[1] = loadImage("fraces/gb.png");
  g[2] = loadImage("fraces/gc.png");
  h[0] = loadImage("fraces/ha.png");
  h[1] = loadImage("fraces/hb.png");
  h[2] = loadImage("fraces/hc.png");
  j[0] = loadImage("fraces/ia.png");
  j[1] = loadImage("fraces/ib.png");
  j[2] = loadImage("fraces/ic.png");
}

function setup() {
  createCanvas(700, 395);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  strokeWeight(1);
  noCursor();
  reset();
  textSize(15);
  tijera.resize(50, 50);
  bar.resize(width, height);
  back.resize(width, height);
  noStroke();
  frameRate(30);

  fine.resize(fine.width * 0.5, fine.height * 0.5);
  bad.resize(bad.width * 0.5, bad.height * 0.5);

  current = fine;
  var scl = 0.7;
  a[0].resize(a[0].width * scl, a[0].height * scl);
  a[1].resize(a[1].width * scl, a[1].height * scl);
  a[2].resize(a[2].width * scl, a[2].height * scl);
  b[0].resize(b[0].width * scl, b[0].height * scl);
  b[1].resize(b[1].width * scl, b[1].height * scl);
  b[2].resize(b[2].width * scl, b[2].height * scl);
  c[0].resize(c[0].width * scl, c[0].height * scl);
  c[1].resize(c[1].width * scl, c[1].height * scl);
  c[2].resize(c[2].width * scl, c[2].height * scl);
  d[0].resize(d[0].width * scl, d[0].height * scl);
  d[1].resize(d[1].width * scl, d[1].height * scl);
  d[2].resize(d[2].width * scl, d[2].height * scl);
  e[0].resize(e[0].width * scl, e[0].height * scl);
  e[1].resize(e[1].width * scl, e[1].height * scl);
  e[2].resize(e[2].width * scl, e[2].height * scl);
  f[0].resize(f[0].width * scl, f[0].height * scl);
  f[1].resize(f[1].width * scl, f[1].height * scl);
  f[2].resize(f[2].width * scl, f[2].height * scl);
  g[0].resize(g[0].width * scl, g[0].height * scl);
  g[1].resize(g[1].width * scl, g[1].height * scl);
  g[2].resize(g[2].width * scl, g[2].height * scl);

  backgroundMusic.loop();
}

function draw() {
  if (state == "Menu") {
    image(back, width / 2, height / 2);
    fill(0, 120);
    rect(width / 2, height / 2, width * 0.8, height * 0.8);
    image(
      logo,
      width / 2,
      height * 0.35,
      logo.width + sizer + timepast / 10,
      logo.height + sizer + timepast / 10
    );
    

    fill(200);
    text("¿Por donde pasara la motosierra?", width / 2, height * 0.6);
    if (
      boton("Jugar", width / 2, height * 0.75, width / 5, height / 9) &&
      mouseIsPressed
    ) {
      state = "Game";
    }
    eff += effd;
    if (eff > 255 || eff < 0) {
      effd *= -1;
    }
  }
  if (state == "Game") {
    game();
    if (timer > 200) {
      state = "GameOver";
    }
  }
  if (state == "GameOver") {
    image(back, width / 2, height / 2);
    fill(0, 120);
    rect(width / 2, height / 2, width * 0.8, height * 0.8);
    image(logo, width / 2, height * 0.3);
    fill(255);
    textSize(30);
    fill(255);
    text("Recortaste " + cnt + " puntos del PBI!", width * 0.4, height * 0.55);
    textSize(15);
    eff += effd;
    if (eff > 255 || eff < 0) {
      effd *= -1;
    }
    if (cnt <= 0) {
      image(bad, width * 0.75, height * 0.85,bad.width  + sizer,bad.height + sizer);
      fill(255);
      rect(width * 0.75, height * 0.86, width * 0.25, height * 0.08);

      fill(255, 0, 0);
      text("La livertad no avanza :c", width * 0.75, height * 0.85);
    } else {
      image(fine, width * 0.75, height * 0.85,fine.width  + sizer,fine.height + sizer);
      fill(255);
      rect(width * 0.75, height * 0.85, width * 0.25, height * 0.08);

      fill(255, 0, 0);
      text("Viva la libertad carajo!", width * 0.75, height * 0.85);
    }
 if (
      boton("Jugar", width / 4, height * 0.75, width / 5, height / 9) &&
      mouseIsPressed
    ) {
      state = "Game";
     cnt = 0
     timer = 0
    }
  }
if (timepast < 90) {
      timepast += 1;
    } else {
      sizer += sizerv;
      if (sizer > 10 || sizer < 0) {
        sizerv *= -1;
      }
    }
  image(tijera, mouseX, mouseY);
}
