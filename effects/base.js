const PATTERNS = {
  top:'top',
  sides:'sides',
  both:'both'
}

class Figure {
  constructor({ sound, volume , pattern}) {
    switch(pattern){
      case 'top':
        this.isFromSides = false;
        break;
      case 'sides':
        this.isFromSides = true;
        break;
      case 'both':
        const isFromSides = 0.5 > random()
        this.isFromSides = isFromSides;
        break
    }
    const coords = this.getInitialCoords()
    this.x = coords.x
    this.y = coords.y
    this.sound = sound;
    this.sound.setVolume(volume)
  }

  getInitialCoords() {
    //if from the sides
    let xLowerLimit = -200;
    let xUpperLimit = 0;

    let yLowerLimit = 200;
    let yUpperLimit = 600;

    if (!this.isFromSides) {
      return {
        x: random(yLowerLimit, yUpperLimit),
        y: random(xLowerLimit, xUpperLimit)
      }
    } else {
      return {
        x: random(xLowerLimit, xUpperLimit),
        y: random(yLowerLimit, yUpperLimit)
      }
    }
  }

  drawFigure(x, y) { }

  animate() {
    this.drawFigure(this.x, this.y);
    let threshold
    if (this.isFromSides) {
      this.x = this.x + 20;
      threshold = (this.x > random(500, 600) && this.x < 600);
    } else {
      this.y = this.y + 20;
      threshold = (this.y > random(500, 600) && this.y < 600)
    }

    if (
      (threshold) && (0.2 > random())
    ) {
      this.sound.play();
    }
  }

}

class Creator {
  constructor(classname) {
    this.classname = classname
    this.items = [];
    this.limit = 30;
    for (let i = 0; i < this.limit; i++) {
      this.items.push(new classname());
    }
    this.limit = 4;
    this.startedPressing = false;
    this.startTime = 0;
  }

  toggleStartPressing(shouldStart) {
    this.startedPressing = shouldStart;
  }
  setStartTime() {
    this.startTime = millis();
  }

  animate(shouldSpawn = true) {
    let elapsedTime = millis() - this.startTime;
    if (elapsedTime > 0 && elapsedTime < 1_000) {
      this.limit = 4;
    }
    if (elapsedTime > 1_000) {
      this.limit = 8;
    }
    if (elapsedTime > 3_000) {
      this.limit = 16;
    }

    for (let i = 0; i < this.limit; i++) {
      this.items[i].animate();
      if ((this.items[i].y >= 600 || this.items[i].x >= 600) && shouldSpawn) {
        this.items[i] = new this.classname()
      }
    }
  }
}