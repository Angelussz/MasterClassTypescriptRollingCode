// Uso de interfaces
interface Auto{
    nombre:string,
    modelo:string,
    anio: number,
    color: string
}
const mostrar = (auto: Auto):void=>{
    console.log(`Auto con nombre ${auto.nombre}, modelo: ${auto.modelo}, anio ${auto.anio} y color ${auto.color} `)
}

const mostrar2 = ({nombre,modelo,anio,color}:Auto):void=>{
    console.log(`Auto con nombre ${nombre}, modelo: ${modelo}, anio ${anio} y color ${color} `)
}

let auto1: Auto = {
    nombre:"BMW",
    modelo:"XYY-1",
    anio:2021,
    color:"rojo"
}

let auto2:Auto = {
    nombre:"TOYOTA",
    modelo:"YTEWQ-332",
    anio:2000,
    color:"azul"
}
let auto3:Auto = {
    nombre:"NISSAN",
    modelo:"RWWSW-664",
    anio:2010,
    color:"verde"
}

mostrar(auto1);
mostrar(auto2);
mostrar2(auto3);
