class SquareP extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  // Overriding the parent method
  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
  update() {
    super.update();
    this.r += random(-2, 2);
  }
}
