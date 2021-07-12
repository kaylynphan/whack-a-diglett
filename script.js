// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, createCanvas, ellipse, noFill, stroke, strokeWeight, rect, circle, fill, square, triangle
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
  
  //green square
  stroke('rgb(0,220,0)');
  fill('rgb(0,220,0)');
  square(30,30,100);
  
  //microsoft logo
  stroke('rgb(246,83,20)');
  fill('rgb(246,83,20)');
  square(160,30,45);
  stroke('rgb(124,187,0)');
  fill('rgb(124,187,0)');
  square(210,30,45);
  stroke('rgb(0,161,241)');
  fill('rgb(0,161,241)');
  square(160,80,45);
  stroke('rgb(255,187,0)');
  fill('rgb(255,187,0)');
  square(210,80,45);
  
  //target logo 
  stroke('rgb(204,0,0)');
  fill('rgb(204,0,0)');
  circle(340,80,100);
  stroke('rgb(220,220,220)');
  fill('rgb(220,220,220)');
  circle(340,80,67);
  stroke('rgb(204,0,0)');
  fill('rgb(204,0,0)');
  circle(340,80,33);
  
  //mitsubishi logo
  triangle(80,130,)
  
  
  
  
  
  
  
}