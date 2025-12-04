var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var F = parseInt(lines.shift()); // Funcionário.
var numHorasTraba = parseInt(lines.shift()); // Número de horas trabalhadas.
var varPHoraT = parseFloat(lines.shift());  // Valor por hora trabalhada.

var salario = numHorasTraba * varPHoraT;

console.log("NUMBER = " + F);
console.log("SALARY = U$ " + salario.toFixed(2));
