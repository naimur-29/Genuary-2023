let FRAMERATE = 0;
let ANGLE = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(50);
}

function draw() {
  background(50, 1);

  noStroke();
  translate(width / 2, height / 2);

  rotate(ANGLE);

  let size = 20;
  let divergence = 10;

  fill(0, 220, 220, 100);
  rect(-width / divergence + size - 5, height / 5 + size - 70, -10, 120);
  fill(255);
  rect(-width / divergence, height / 5, size, size);

  fill(220, 0, 220, 100);
  rect(width / divergence + size - 5, -height / 5 + size - 70, -10, 120);
  fill(255);
  rect(width / divergence, -height / 5, size, size);

  divergence *= sin(ANGLE);
  fill(0, 220, 220, 100);
  rect(width / divergence + size - 5, -height / 5 + size - 70, -10, 120);
  fill(255);
  rect(width / divergence, -height / 5, size, size);

  fill(220, 0, 220, 100);
  rect(-width / divergence + size - 5, height / 5 + size - 70, -10, 120);
  fill(255);
  rect(-width / divergence, height / 5, size, size);

  ANGLE++;
  FRAMERATE++;
}

function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 360, {
      delay: 0,
      units: "frames",
    });
  }
}
keyPressed();
