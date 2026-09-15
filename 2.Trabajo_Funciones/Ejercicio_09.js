const prompt = require("prompt-sync")();

// Math.PI representa el valor de π.
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

let radio = Number(prompt("Ingrese el radio del círculo: "));

//2 × π × 5 ≈ 31.42

console.log(calcularCircunferencia(radio));
console.log(calcularCircunferencia(radio).toFixed(2));