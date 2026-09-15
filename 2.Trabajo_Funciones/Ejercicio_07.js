const prompt = require("prompt-sync")();

// toUpperCase() convierte los caracteres de un string a mayúsculas.

function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

let texto = prompt("Ingrese un texto en minúsculas: ");

console.log(convertirAMayusculas(texto));
