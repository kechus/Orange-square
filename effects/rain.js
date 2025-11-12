function rain(x,y){
  const diameter = 10;
  fill(0, 0, 0);
  circle(x,y,diameter);
  const RADIUS = diameter/2;
  triangle(x-RADIUS,y, 
           x, y-10, 
           x+RADIUS, y);
}

class Raindrop{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.sound = SOUNDS.rain;
  }
  
  animate(){
    rain(this.x,this.y);
    this.y = this.y + 20;
    if((this.y > random(500,600) && this.y < 600) && (0.3 > random())){
      this.sound.play();
    }
  }
}

class RaindropCreator{
  constructor(startTime){
    this.startTime = startTime;
    this.raindrops = [];
    this.limit = 30;
    for(let i = 0; i < this.limit; i++){
      this.raindrops.push(new Raindrop(random(200,600), random(-200,200)));
    }
    this.limit = 4;
  }
  
  animate(shouldSpawn=true){
    let elapsedTime = millis() - this.startTime;
    if (elapsedTime > 1000){
      this.limit = 8;
    }
    if(elapsedTime > 3000){
      this.limit = 16;
    }
    
    for(let i = 0; i < this.limit; i++){
      this.raindrops[i].animate();
      if(this.raindrops[i].y >= 600 && shouldSpawn){
        this.raindrops[i] = new Raindrop(random(200,600),random(-200,200));
      }
    }
  }
}