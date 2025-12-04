var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
var π = 3.14159;
var area = π * (raio ** 2);
console.log("A=" + area.toFixed(4));