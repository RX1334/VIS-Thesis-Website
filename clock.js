var font = 'assets/DMSerifDisplay-Regular.ttf';
var date;
var time;

document.addEventListener('DOMContentLoaded', function() {
  let myp5 = new p5(clock, document.getElementById("clock"));
}, false);

// set up for instance-based p5js
const clock = ( sketch ) => {

  let x = 64;
  let y = 64;

  let typeface;
  sketch.preload = () => {
    typeface = sketch.loadFont(font);
  }

  sketch.setup = () => {
    sketch.createCanvas(960, 400);
    sketch.textFont(typeface);
    sketch.textSize(180);
    sketch.textAlign(sketch.LEFT);
    sketch.frameRate(1);
  };

  sketch.draw = () => {
    date = new Date();
    time = date.toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric",
                                             second: "numeric"});
    var myrng = new Math.seedrandom(date.toString());

    sketch.background(255);
    sketch.fill(32);
    sketch.text(time, 248, 170, 600);
    sketch.noStroke();

    for (let i = 0; i < 4; i++) {
      let col = Math.floor(i / 2);
      let row = i % 2;

      sketch.fill(Math.floor(255 * myrng()));
      sketch.ellipse(x + col * 96, y + row * 96, 64);
    }
  };
};
