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
  square(50,50,80);
  
  
  
  
  stroke('rgb(200,0,90)');
  fill('rgb(200,0,90)');
  triangle(100,200,190,200,145,200 - 90 + (90/1.71));
  
  stroke('rgb(200,100,0)');
  fill('rgb(200,100,0)');
  triangle(100,200,190,200,145,200 - 90 + (90/1.71));
  rotate(60);
  
  
}