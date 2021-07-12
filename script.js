// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, createCanvas, ellipse, noFill, stroke, strokeWeight, rect
 */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup(){
  // Code here runs only once
  createCanvas(500, 300);
}

function draw(){
  // Code here runs continuously
  background(220);

  strokeWeight(8);
  
  ellipse(100, 100, 80);
  
  noFill();

  stroke(60,123,219);
  
  ellipse(200, 100, 80);
  
  strokeWeight(4);
  
  
  
}