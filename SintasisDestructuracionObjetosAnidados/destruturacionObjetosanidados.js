const usuario = {
    johanarincon: {//propiedad
        edad: 34,//objetos edad, correo
        correo: "rinco@gmai.com",
    }
};
const { johanarincon: { edad, correo } } = usuario;
console.log(edad);
console.log(correo);
//nos muetra el correo, edad de una manera sencilla
