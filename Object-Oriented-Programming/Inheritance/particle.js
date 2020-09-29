class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(24);
    point(this.x, this.y);
  }
}
