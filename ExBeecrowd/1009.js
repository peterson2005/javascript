var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift(); // Vendedor.
var salarioFixo = parseFloat(lines.shift()); // Salário Fixo.
var vendasPMes = parseFloat(lines.shift()); // Total de vendas por Mês em dinheiro.

var salariototal = salarioFixo + (0.15 * vendasPMes); // salario total mais 15% de comissão.

console.log("TOTAL = R$ " + salariototal.toFixed(2));