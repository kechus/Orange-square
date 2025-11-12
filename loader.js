const SOUNDS = {
    tire: null,
    rain:null,
}

function preload(){
    SOUNDS.tire = loadSound('assets/stretch.mp3') 
    SOUNDS.rain = loadSound('assets/drop.mp3')
}