function singleTire(x, y) {
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

class Tire {
  constructor() {
    const isFromSides = 0.5 > random()
    this.isFromSides = isFromSides;
    const coords = this.getInitialCoords(isFromSides)
    this.x = coords.x
    this.y = coords.y
    this.sound = SOUNDS.tire;
    this.sound.setVolume(0.1)
  }

  getInitialCoords(isFromSides) {
    //if from the sides
    let xLowerLimit = -200;
    let xUpperLimit = 0;

    let yLowerLimit = 200;
    let yUpperLimit = 600;

    if (!isFromSides) {
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

  animate() {
    singleTire(this.x, this.y);
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

class TireCreator {
  constructor(startTime) {
    this.startTime = startTime;
    this.items = [];
    this.limit = 30;
    for (let i = 0; i < this.limit; i++) {
      this.items.push(new Tire());
    }
    this.limit = 4;
  }

  animate(shouldSpawn = true) {
    let elapsedTime = millis() - this.startTime;
    if (elapsedTime > 1000) {
      this.limit = 8;
    }
    if (elapsedTime > 3000) {
      this.limit = 16;
    }

    for (let i = 0; i < this.limit; i++) {
      this.items[i].animate();
      if ((this.items[i].y >= 600 || this.items[i].x >= 600) && shouldSpawn) {
        this.items[i] = new Tire()
      }
    }
  }
}