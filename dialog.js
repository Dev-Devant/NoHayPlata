
class dialog {
  constructor(a, b, c, g) {
    this.main = a;
    this.parta = b;
    this.partb = c;
    this.good = g;
    var ang = random(0, 2 * PI);
    this.x = 2 * width * cos(ang);
    this.y = 2 * width * sin(ang);
    var d = dist(width / 2, height / 2, this.x, this.y);
    this.vx = (width / 2 - this.x) / (d * random(1, 5));
    this.vy = (height / 2 - this.y) / (d * random(1, 5));

    var intenc = random(10, 15);
    this.vx *= intenc;
    this.vy *= intenc;
    this.time = 0;
    this.live = true;
  }
  show() {
    if (this.live) {
      image(this.main, this.x, this.y);

      if (dist(width / 2, height / 2, this.x, this.y) > 2 * width) {
        var ang = random(0, 2 * PI);
        this.x = 2 * width * cos(ang);
        this.y = 2 * width * sin(ang);
        var d = dist(width / 2, height / 2, this.x, this.y);
        this.vx = (width / 2 - this.x) / (d * random(1, 5));
        this.vy = (height / 2 - this.y) / (d * random(1, 5));

        var intenc = random(10, 15);
        this.vx *= intenc;
        this.vy *= intenc;
      }
      if (mouseIsPressed && dist(mouseX, mouseY, this.x, this.y) < 50) {
        if (this.good) {
          cnt += 1;
          current = fine;
          derogText = "Afuera!";
        } else {
          cnt -= 1;
          current = bad;
          derogText = "No, tu no";
        }
        this.live = false;
        this.vx *= 2;
        this.vy *= 2;
      }
    } else {
      this.time += 4;
      derogated = this.main;
      if (!this.good) {
        tint(255, 0, 0, 255 - this.time);
      } else {
        tint(0, 255, 0, 255 - this.time);
      }

      image(this.parta, this.x, this.y + this.time / 4);
      image(this.partb, this.x, this.y);
      noTint();
      if (this.time > 255) {
        this.live = true;
        this.time = 0;
        var ang1 = random(0, 2 * PI);
        this.x = 2 * width * cos(ang1);
        this.y = 2 * width * sin(ang1);
        var d1 = dist(width / 2, height / 2, this.x, this.y);
        this.vx = (width / 2 - this.x) / (d1 * random(1, 5));
        this.vy = (height / 2 - this.y) / (d1 * random(1, 5));

        var intenc1 = random(10, 15);
        this.vx *= intenc1;
        this.vy *= intenc1;
      }
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
