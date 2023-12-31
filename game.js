
function game() {
  image(bar, width / 2, height / 2);
  timer += 0.1;
  for (var i = 0; i < 15; i++) {
    fraz[i].show();
  }

  stroke(2);
  noFill();
  rect(105, 30, 200, 30);
  ///////////////// sequence //////////////////////////////////

  if (!inSequence) {
    for (var i = 0; i < 8; i++) {
      if (timestamps[i] == int(backgroundMusic.currentTime())) {
        inSequence = true;
        sequence = 0;
        seqTimer = 0;
      }
    }
  }
  if (inSequence) {
    if (sequence == 0) {
      image(no, width / 2, height / 2);
      if (seqTimer > 20) {
        sequence = 1;
      }
    }
    if (sequence == 1) {
      image(hay, width / 2, height / 2);
      if (seqTimer > 40) {
        sequence = 2;
      }
    }
    if (sequence == 2) {
      image(plata, width / 2, height / 2,plata.width*2 + sizer,plata.height*2+ sizer);
      if (seqTimer > 90) {
        sequence = 0;
        inSequence = false;
        seqTimer = 0;
      }
    }
    seqTimer += 1;
  }

  ////////////////////////////////////////////////////////////////////////////
  fill(255);
  rectMode(CORNER);
  rect(5, 15, timer, 30);
  image(tijera, timer, 30);
  rectMode(CENTER);
  noStroke();

  rect(55, 70, 100, 30);

  fill(0);
  text("Puntos " + cnt, 55, 70);

  image(
    current,
    width * 0.85,
    height * 0.75,
    current.width + sizer / 2,
    current.height + sizer / 2
  );
  if (derogated != null) {
    image(derogated, width * 0.75, height * 0.85);
    fill(255);
    rect(width * 0.85, height * 0.8, width * 0.1, height * 0.08);

    fill(255, 0, 0);
    text(derogText, width * 0.85, height * 0.8);
  }
}