var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(" ");
var p2 = lines.shift().split(" ");

var cp = parseInt(p1[0]);// Código de uma Peça.
var np = parseInt(p1[1]); // Número de uma Peças.
var valorUni = parseFloat(p1[2]); // Valor Unitário de cada peça.

var cp1 = parseInt(p2[0]); // Código de uma Peça.
var np1 = parseInt(p2[1]); // Número de uma Peças.
var valorUni1 = parseFloat(p2[2]); // Valor Unitário de cada peça.

var valorapagar = (np * valorUni) + (np1 * valorUni1);

console.log("VALOR A PAGAR: R$ " + valorapagar.toFixed(2));