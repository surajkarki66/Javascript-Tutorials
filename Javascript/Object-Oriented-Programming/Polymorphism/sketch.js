let particles = [];
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    if (random(1) < 0.5) {
      particles[i] = new Particle(300, 300);
    } else {
      particles[i] = new SquareP(300, 300);
    }
  }
}

function draw() {
  background(0);
  for (let p of particles) {
    p.update();
    p.show();
  }
}
