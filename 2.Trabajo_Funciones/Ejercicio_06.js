// Función Expresada
// Función Flecha

const prompt = require("prompt-sync")();

function calculadorIMC(altura, peso) {
    return peso / (altura * altura);
}

let altura = Number(prompt("Ingrese su altura en metros: "));
let peso = Number(prompt("Ingrese su peso en kilogramos: "));

console.log(calculadorIMC(altura, peso));

//El resultado puede mostrar solo dos decimales:

console.log(calculadorIMC(altura, peso).toFixed(2));