var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift()); // Distância total percorrida (em Km)
var Y = parseFloat(lines.shift()); // total de combustível gasto

var consumo = X / Y;

console.log(consumo.toFixed(3) + " km/l");