class Bird extends Figure {
  constructor() {
    super({
      sound: SOUNDS.bird,
      volume: 0.1,
      pattern: PATTERNS.sides
    });
  }
  drawFigure(x, y) {
    fill(0);
    circle(x, y, 50);
  }
}

class BirdCreator extends Creator {
  constructor() {
    super(Bird);
  }
}