const prompt = require("prompt-sync")();

function calcularValorHora(sueldoMensual) {
    return sueldoMensual / 40;
}

let sueldoMensual = Number(prompt("Ingrese su sueldo mensual: "));

console.log(calcularValorHora(sueldoMensual));
