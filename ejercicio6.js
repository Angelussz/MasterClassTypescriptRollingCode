var compras = [["queso", 16], ["paneton", 22], ["leche", 4]];
compras.forEach(function (compra) {
    console.log("Producto ".concat(compra[0], " con precio de S/.").concat(compra[1]));
});
