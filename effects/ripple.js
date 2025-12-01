class Ripple extends Figure {
  constructor() {
    super({
      sound: SOUNDS.ripple,
      volume: 0.6,
      pattern: PATTERNS.grow
    })
    this.diameter = 10;
  }

  drawFigure(x, y) {
    fill(0);
    circle(x, y, this.diameter);
    this.diameter += 1;
  }
}

class RippleCreator extends Creator {
  constructor(){
    super(Ripple)
  }
}