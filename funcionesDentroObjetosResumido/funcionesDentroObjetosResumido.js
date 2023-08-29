const persona = {
    nombre: "Isabel ",
    //propiedad de funcion
   // presentarse: function () {//
        presentarse () {//Se puede quitar esta parte : function ()
        return `Hola, mi nombre es ${this.nombre}.`;
    }
};
console.log(persona.presentarse());
