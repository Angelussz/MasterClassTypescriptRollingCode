// Funciones y retorno de tipado

const numeroMayor = (numeros:number[]):number=>{
    return Math.max(...numeros);
}

const mayor:number[] = [12,17,2,33,11,44,2,6,21]

console.log(numeroMayor(mayor));