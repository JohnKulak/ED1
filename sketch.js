function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(3);
  frameRate(1);
}

function draw() {
  clear();
  background(210,210,210);
  stroke(255,255,255,240);
  
  var margin = 20;
  var width = innerWidth - 2*margin;
  var height = innerWidth - 2*margin;
  
  var shift = random(3,7);
  var space = 4;
  var numSquares = 6;
  var sideLen = width/numSquares;
  
  translate(margin,margin);
  for(var x=0; x<width; x=x+sideLen){
    for(var y=0; y<height; y=y+sideLen){
      d=random(200,255);
      e=random(200,255);
      f=random(200,255);
      fill(d,e,f,120);
    quad(x+space+random(-shift,shift), y+space+random(-shift,shift),x+sideLen-space+random(-shift,shift), y+space+random(-shift,shift),x+sideLen-space+random(-shift,shift),y+sideLen-space+random(-shift,shift),x+space+random(-shift,shift), y+sideLen-space+random(-shift,shift) )
      
      
  
  }
  }
}