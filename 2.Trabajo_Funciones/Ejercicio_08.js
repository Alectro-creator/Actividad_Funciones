const prompt = require("prompt-sync")();

// typeof permite conocer el tipo de dato de un valor.
function identificarTipoDato(valor) {
    return typeof valor;
}

let valor = prompt("Ingrese un valor: ");

console.log(identificarTipoDato(valor));
