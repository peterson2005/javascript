var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoDuracaoS = parseInt(lines.shift());

var horas = Math.floor(tempoDuracaoS / 3600);
var resto = tempoDuracaoS % 3600;


var minutos = Math.floor(resto / 60);

var segundos = resto % 60;


console.log(horas + ":" + minutos + ":" + segundos);
