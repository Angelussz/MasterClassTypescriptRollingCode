// Funciones y retorno de tipado
var numeroMayor = function (numeros) {
    return Math.max.apply(Math, numeros);
};
var mayor = [12, 17, 2, 33, 11, 44, 2, 6, 21];
console.log(numeroMayor(mayor));
