var contactos = [ //arreglo
    {
        "nombre": "nora",
        "apellido": "suarez",
        "numero": "12345",
        "gustos": ["pizza", "programacion"]
    },
    {
        "nombre": "jhon",
        "apellido": "rincon",
        "numero": "3102771975",
        "gustos": ["Cantar", "Leer"]
    },
    {
        "nombre": "pedro",
        "apellido": "rmayorga",
        "numero": "3123245493",
        "gustos": ["estudiar", "violin"]
    },
];
function buscarPerfil(nombre, propiedad) {//objetos
    for (var i = 0; i < contactos.length; i++) {//condicionales
        if (contactos[i].nombre === nombre) { //igualdades
            return contactos[i][propiedad] || "la propiedad no existe.";//sentencia return
        }
    }
    return "el contacto no esta el la lista de contatos ";
}
console.log("las propiedades de Nora");
console.log(buscarPerfil("nora", "apellido"));
console.log(buscarPerfil("nora", "numero"));
console.log(buscarPerfil("nora", "gustos"));
console.log("las propiedadades de John :")
console.log(buscarPerfil("jhon", "apellido"));
console.log(buscarPerfil("jhon", "numero"));
console.log(buscarPerfil("jhon", "gustos"));

console.log("Las propiedades  de pedro son: ")
console.log(buscarPerfil("pedro", "apellido"));
console.log(buscarPerfil("pedro", "numero"));
console.log(buscarPerfil("pedro", "gustos"));

console.log("cuando no existen las propiedades")
console.log(buscarPerfil("pedro", "direccion"));
console.log("Cuando la propiedad no estrictrictamente igual: ");
console.log(buscarPerfil("Nora", "otro"));
