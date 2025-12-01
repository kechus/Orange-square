const SOUNDS = {
  tire: null,
  rain: null,
  bird: null,
  ripple: null,
}

function preload() {
  SOUNDS.tire = loadSound('assets/stretch.mp3')
  SOUNDS.rain = loadSound('assets/drop.mp3')
  SOUNDS.bird = loadSound('assets/chirp.mp3')
  SOUNDS.ripple = loadSound('assets/hey.wav')
}