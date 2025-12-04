var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var A = A * 2;
var B = B * 3;
var C = C * 5;

var media = (A + B + C) / 10; 

console.log("MEDIA = " + media.toFixed(1));