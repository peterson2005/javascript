var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ");

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);
var pi = 3.14159;


var areaTriangulo = (A * C) / 2; //  área do triângulo retângulo que tem A por base e C por altura.
var areaCirculoraio = pi * ( C * C); // a área do círculo de raio C. (pi = 3.14159)
var areaTrapezio = ((A + B) * C) / 2 // a área do trapézio que tem A e B por bases e C por altura.
var areaQuadrado = B * B; // a área do quadrado que tem lado B.
var areaRetangulo = A * B; // a área do retângulo que tem lados A e B.





console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculoraio.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));

