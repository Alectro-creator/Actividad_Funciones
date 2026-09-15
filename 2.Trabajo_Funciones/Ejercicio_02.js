const prompt = require("prompt-sync")();

function convertirAUrl(nombre) {
    return "http://www." + nombre + ".com";
}

let nombre = prompt("Ingrese un nombre: ");

console.log(convertirAUrl(nombre));
