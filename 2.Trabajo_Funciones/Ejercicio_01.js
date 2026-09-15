const prompt = require("prompt-sync")();

function convertirPulgadasACentimetros(pulgadas) {
    return pulgadas * 2.54;
}

let pulgadas = Number(prompt("Ingrese la cantidad de pulgadas: "));

console.log(convertirPulgadasACentimetros(pulgadas));
