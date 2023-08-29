class Mascota {

    constructor(nombre,edad,raza){
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;

    }
}
var miMascota=new Mascota("Nora",5, "lolo");
var miMascota= new Mascota("Juan", 4, "luka");
console.log(miMascota.nombre);
console.log(miMascota.edad);
console.log(miMascota.raza);
//otra
console.log("Datos de la segunta mascota");
console.log(miMascota.nombre);
console.log(miMascota.edad);
console.log(miMascota.raza);