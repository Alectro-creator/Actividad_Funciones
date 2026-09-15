const prompt = require("prompt-sync")();

let pulgadas = Number(prompt("Ingrese la cantidad de pulgadas: "));

// Función expresada
const convertirPulgadasExpresada = function(pulgadas) {
    return pulgadas * 2.54;
};

// Función flecha
const convertirPulgadasFlecha = (pulgadas) => {
    return pulgadas * 2.54;
};

console.log("Función expresada:", convertirPulgadasExpresada(pulgadas));
console.log("Función flecha:", convertirPulgadasFlecha(pulgadas));
