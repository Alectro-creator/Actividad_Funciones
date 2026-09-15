const prompt = require("prompt-sync")();

function calculadorIMC(altura, peso) {
    return peso / (altura * altura);
}

let altura = Number(prompt("Ingrese su altura en metros: "));
let peso = Number(prompt("Ingrese su peso en kilogramos: "));

let imc = calculadorIMC(altura, peso);

console.log("Su IMC es:", imc.toFixed(2));
