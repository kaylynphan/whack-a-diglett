// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    createCanvas, colorMode, HSB, background
 */

// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

function setup(){
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
}

function draw(){
  background(220, 0, 90);
}