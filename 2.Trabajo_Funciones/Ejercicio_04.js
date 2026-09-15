// Función Expresada
// Función Flecha

const prompt = require("prompt-sync")();

function calcularEdadPerro(edadHumana) {
    return edadHumana * 7;
}

let edadHumana = prompt("Ingrese la edad en años humanos: ");

console.log(calcularEdadPerro(edadHumana));