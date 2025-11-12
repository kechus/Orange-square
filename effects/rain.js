class Raindrop extends Figure {
  constructor() {
    super({
      sound: SOUNDS.rain,
      volume: 1,
      pattern: PATTERNS.top
    })
  }

  drawFigure(x, y) {
    const diameter = 10;
    fill(0, 0, 0);
    circle(x, y, diameter);
    const RADIUS = diameter / 2;
    triangle(x - RADIUS, y,
      x, y - 10,
      x + RADIUS, y);
  }
}

class RaindropCreator extends Creator {
  constructor(){
    super(Raindrop)
  }
}