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
  stroke('rgb(0,255,0)');
  fill('rgb(0,255,0)');
  square(30,30,100);
  
  stroke('rgb(242,0,0)');
  fill('rgb(242,0,0)');
  square(160,30,45);
  square(210,30,45);
  square(160,80,45);
  square(210,80,45);
  
  
  
  
  
  
}