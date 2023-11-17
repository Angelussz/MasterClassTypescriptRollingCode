// Arrays y tuplas
type CarritoCompras = [string,number];

const compras:CarritoCompras[] =[["queso",16],["paneton",22],["leche",4]];

compras.forEach(compra =>{
    console.log(`Producto ${compra[0]} con precio de S/.${compra[1]}`)
})