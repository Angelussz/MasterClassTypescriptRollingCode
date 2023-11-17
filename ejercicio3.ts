// Union de tipos
const unionTipos = (argumento: string | number)=>{
    if( typeof argumento === "string"){
        return argumento.length
    }
    else{
        return Math.abs(argumento)
    }
}

console.log(unionTipos("Jose Luis"))
console.log(unionTipos(-14))