//objetos como argumento
var nuevoPerfilCliente = {
    nombre: "johana",
    edad: 24,
    nacionaliadad: "Usd",
    ubicacion: "estado Florida"

};
const actualizaPerfil = ({ nombre, edad, nacionaliadad, ubicacion }) => {
    
    console.log(nombre);
    console.log(edad);
    console.log(nacionaliadad);
    console.log(ubicacion);

};
actualizaPerfil(nuevoPerfilCliente);