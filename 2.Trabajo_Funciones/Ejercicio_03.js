// Función Expresada
// Función Flecha

const prompt = require("prompt-sync")();

function agregarAdmiracion(frase) {
    return "¡" + frase + "!";
}

let frase = prompt("Ingrese una frase: ");

console.log(agregarAdmiracion(frase));