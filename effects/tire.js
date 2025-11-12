class Tire extends Figure {
  constructor() {
    super({
      sound: SOUNDS.tire,
      volume: 0.1,
      pattern: PATTERNS.both
    })
  }

  drawFigure(x, y) {
    // fill("red")
    // circle(x, y, 10)
    // fill(255)

    fill(0)
    rect(x, y, 40, 20);
    const separation = 50;
    for (let i = 0; i < 2; i++) {
      const xOffset = i * separation;
      for (let j = 0; j < 2; j++) {
        const yOffset = j * separation;
        rect(x + xOffset, y - yOffset, 40, 20);
      }
    }
  }
}

class TireCreator extends Creator {
  constructor() {
    super(Tire)
  }
}