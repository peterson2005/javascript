var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");
var valores1 = lines.shift().split(" ");

var x1 = parseFloat(valores[0]);
var y1 = parseFloat(valores[1]);
var x2 = parseFloat(valores1[0]);
var y2 = parseFloat(valores1[1]);

var distancia = ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

var raiz = Math.sqrt(distancia);

console.log(raiz.toFixed(4));