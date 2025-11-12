const SOUNDS = {
  tire: null,
  rain: null,
  bird: null,
}

function preload() {
  SOUNDS.tire = loadSound('assets/stretch.mp3')
  SOUNDS.rain = loadSound('assets/drop.mp3')
  SOUNDS.bird = loadSound('assets/chirp.mp3')
}