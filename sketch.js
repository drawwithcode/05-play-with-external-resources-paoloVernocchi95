var number;
var s=25;

function preload(){
  sound = loadSound('assets/Piano Music - Paradise - Sad Instrument Piano.mp3');
   myFont = loadFont('assets/Maddison.ttf');
  corpo  = loadImage('assets/corpo.png');
    bracciosotto  = loadImage('assets/braccio-sotto.png');
      bracciosopra  = loadImage('assets/braccio sopra.png');
}

function setup(){
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
  textAlign(CENTER);
}

function draw(){
  background(0);
  fill(213,169,64);
  textFont(myFont);
 textSize(windowWidth/15);
  text('Piano Piano',windowWidth*4/6,windowHeight/5*2);
  angleMode(DEGREES);



  var w=windowWidth/50;

  var spectrum = fft.analyze();

  stroke(0);
  for (var i = 0; i< spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp,0,256,windowHeight,0);
  //line(i*w,windowHeight,i*w,y);
  if (y>windowHeight/2 && y<windowHeight/4*3) {//premuti a metà
    fill(225);
  }
  else if ( y>windowHeight/4*3){//non premuti
    fill(255);
  }
  else {// premuti
    fill(200);
  }

  //rect(i*w,windowHeight/2,w,windowHeight);
    rect(i*w,y,w,windowHeight-y);

  // tasti neri
  if (y>windowHeight/2) {
    fill(0);
  }
  else {
    fill(50);
  }
  //tasti neri
  /*
  rect(s,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+3*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+4*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+5*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+7*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+8*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+10*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+11*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+12*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+14*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+15*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+17*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+18*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+19*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+21*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+22*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+24*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+25*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+26*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+28*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+29*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+31*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+32*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+33*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+35*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+36*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+38*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+39*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+40*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+42*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+43*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+45*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+46*w,windowHeight/2,w*4/6,windowHeight/4);
  rect(s+47*w,windowHeight/2,w*4/6,windowHeight/4);*/

  }
  for (var j = 0; j< spectrum.length; j+=50){
    var rot = spectrum[j];
    var ang = map(rot,0,256,0,100);
  r=-50;
  console.log(amp);
  push();
  translate(windowWidth/4+35,windowHeight/6+80);
  rotate(ang);
  image(bracciosotto, 0,0,bracciosotto.width/10,bracciosotto.height/10);
  pop();
  image(corpo, windowWidth/4,windowHeight/6,corpo.width/10, corpo.height/10);
  push();
  translate(windowWidth/4+35,windowHeight/6+80);
  rotate(ang);
  image(bracciosopra, 0,0,bracciosopra.width/10,bracciosopra.height/10);
  pop();


}

  /*var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();*/

  text('click to play/pause', 4, 10);

}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
