var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

console.log(N);

var cem = Math.floor(N / 100);
N = N % 100;

var cinquenta = Math.floor(N / 50);
N = N % 50;

var vinte = Math.floor(N / 20);
N = N % 20;

var dez = Math.floor(N / 10);
N = N % 10;

var cinco = Math.floor(N / 5);
N = N % 5;

var dois = Math.floor(N / 2);
N = N % 2;

var um = Math.floor(N / 1);


console.log(cem + " nota(s) de R$ 100,00");
console.log(cinquenta + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00");
console.log(cinco + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");