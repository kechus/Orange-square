const HEIGHT = 800;
const WIDTH = 800;

class PressController {
  constructor(keycode, creator) {
    this.keycode = keycode;
    this.creator = creator;
    this.lastTick = null;
  }
}

let CONTROLLERS = []

function setup() {
  createCanvas(WIDTH, HEIGHT);
  const startTick = millis();
  //for keycodes use https://www.toptal.com/developers/keycode
  CONTROLLERS = [
    new PressController(82, new RaindropCreator(startTick)),
    new PressController(84, new TireCreator(startTick)),
  ]
}

function draw() {
  background(0);
  fill("orange");
  rect(200, 200, 400, 400);

  const tick = millis();
  for (const controller of CONTROLLERS) {
    if (keyIsDown(controller.keycode)) {
      controller.lastTick = tick;
      controller.creator.animate();
    }
    if (millis() - controller.lastTick < 5000 && controller.lastTick !== tick && controller.lastTick !== null) {
      controller.creator.animate(false);
    }
  }
}