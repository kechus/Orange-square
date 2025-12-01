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
    const DIAMETER = 40;
    const RADIUS = DIAMETER / 2;
    circle(x, y, DIAMETER);

    triangle(x - 5, y - RADIUS,
      x + DIAMETER, y,
      x - 5, y + RADIUS);

    //if we are inside the square, draw eye
    if(x > 200 && x < 600){
      fill("orange")
      circle(x+5,y-5,10)
    }
  }
}

class BirdCreator extends Creator {
  constructor() {
    super(Bird);
  }
}