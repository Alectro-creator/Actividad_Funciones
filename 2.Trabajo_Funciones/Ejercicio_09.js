const prompt = require("prompt-sync")();

// Math.PI representa el valor de π.

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

let radio = Number(prompt("Ingrese el radio del círculo: "));

console.log(calcularCircunferencia(radio).toFixed(2));
