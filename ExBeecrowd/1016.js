var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distanciaemKm = parseInt(lines.shift());

var distanciaemKm = distanciaemKm * 2;

console.log(distanciaemKm + " minutos");