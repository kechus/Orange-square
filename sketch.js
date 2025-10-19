const HEIGHT = 800;
const WIDTH = 800;

class PressController {
  constructor(keycode,creator){
    this.keycode = keycode;
    this.creator = creator;
    this.lastTick = null;
  }
}

let CREATORS = []

function setup() {
  createCanvas(WIDTH, HEIGHT);
  const startTick = millis();
  CREATORS = [
   new PressController(82, new RaindropCreator(startTick)),
  ]
}

function draw() {
  background(0);
  fill("orange");
  rect(200,200,400,400);
  
  const tick = millis();
  for(const creator of CREATORS){
    if(keyIsDown(creator.keycode)){
      creator.lastTick = tick;
      creator.animate();
    }
    if(millis() - creator.lastTick < 2000 && creator.lastTick !== tick &&
        creator.lastTick !== null){
        creator.animate(false);
    }
  }
  
    
}