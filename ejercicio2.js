var mostrar = function (auto) {
    console.log("Auto con nombre ".concat(auto.nombre, ", modelo: ").concat(auto.modelo, ", anio ").concat(auto.anio, " y color ").concat(auto.color, " "));
};
var mostrar2 = function (_a) {
    var nombre = _a.nombre, modelo = _a.modelo, anio = _a.anio, color = _a.color;
    console.log("Auto con nombre ".concat(nombre, ", modelo: ").concat(modelo, ", anio ").concat(anio, " y color ").concat(color, " "));
};
var auto1 = {
    nombre: "BMW",
    modelo: "XYY-1",
    anio: 2021,
    color: "rojo"
};
var auto2 = {
    nombre: "TOYOTA",
    modelo: "YTEWQ-332",
    anio: 2000,
    color: "azul"
};
var auto3 = {
    nombre: "NISSAN",
    modelo: "RWWSW-664",
    anio: 2010,
    color: "verde"
};
mostrar(auto1);
mostrar(auto2);
mostrar2(auto3);
