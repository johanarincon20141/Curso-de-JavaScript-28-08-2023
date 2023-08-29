function generarEnteroAleatorio(limiteSuperior) {
    // generar un entero aleatorio entre o y el limite
    //superior (sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}
for (var i = 0; i < 15; i++); {
    console.log(generarEnteroAleatorio(6));

}



//console.log(generarEnteroAleatorio(6));
