var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoGastoViagem = parseInt(lines.shift()); 

var velocidadeMedia = parseInt(lines.shift()); 

var distancia = tempoGastoViagem * velocidadeMedia;

var gasto = distancia / 12;
 
console.log(gasto.toFixed(3));
