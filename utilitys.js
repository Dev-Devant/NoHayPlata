
function reset() {
  for (var i = 0; i < 15; i++) {
    var index = int(random(0, 9));
    if (index == 0) {
      fraz[i] = new dialog(a[0], a[1], a[2], true);
    }
    if (index == 1) {
      fraz[i] = new dialog(b[0], b[1], b[2], true);
    }
    if (index == 2) {
      fraz[i] = new dialog(c[0], c[1], c[2], true);
    }
    if (index == 3) {
      fraz[i] = new dialog(d[0], d[1], d[2], true);
    }
    if (index == 4) {
      fraz[i] = new dialog(e[0], e[1], e[2], true);
    }
    if (index == 5) {
      fraz[i] = new dialog(f[0], f[1], f[2], true);
    }
    if (index == 6) {
      fraz[i] = new dialog(g[0], g[1], g[2], false);
    }
    if (index == 7) {
      fraz[i] = new dialog(h[0], h[1], h[2], false);
    }
    if (index == 8) {
      fraz[i] = new dialog(j[0], j[1], j[2], false);
    }
  }
}

function boton(txt, x, y, xl, yl) {
  var output = false;
  fill(0, 120);

  textSize(yl * 0.7);
  noStroke();
  if (onArea(mouseX, mouseY, x, y, xl, yl)) {
    fill(50, 120);

    textSize(yl * 0.6);
    output = true;
  }
  rect(x, y, xl, yl);
  fill(209, 140, 36);
  text(txt, x, y);
  textSize(15);
  return output;
}

function onArea(x, y, xc, yc, xl, yl) {
  if (x < xc + xl / 2 && x > xc - xl / 2) {
    if (y < yc + yl / 2 && y > yc - yl / 2) {
      return true;
    }
  }
  return false;
}