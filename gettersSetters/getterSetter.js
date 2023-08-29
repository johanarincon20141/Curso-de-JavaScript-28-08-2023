//getter- setter proteger la data 
class Libro {
    constructor(autor) {
        this._autor = autor;//varibles privadas por convension
    }
    //obtener el valor de una propiedad privada
    get autor() {//metodo obtener
        //console.log("getter");//tambien se muestra
        console.log("setter");
        return this._autor;
    }
    set autor(nuevoAutor) {
        console.log("setter");//llama el metodo setter
        this._autor = newAutor;
    }
}
const libro = new Libro("anomino");
console.log(libro.autor);
//setter para actualizar intemediarios

libro.autor = "gino smith";
console.log(libro.autor);
