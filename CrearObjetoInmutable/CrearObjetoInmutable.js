//impedir la mutacion de un objeto
let color={
    "verde":"#10e04b",
    "azul":"#b5oeo",
    "negro":"#000000",
    "blanco":"#ffffff"
};
//no lo permite cambiar la propriedad
Object.freeze(colores);
//colores.amarillo = "#fff200";
//console.log(colores);