var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var A = A * 3.5;
var B = B * 7.5;

var media = (A + B) / 11; 

console.log("MEDIA = " + media.toFixed(5));