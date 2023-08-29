var miArreglo = [2, 3, 4, 5, 45];
var total = 0;
for (var i = 0; i < miArreglo.length; i++) {
    console.log("Iteracion " + i);//separado por cada indice que al final va a sumar 
    console.log(miArreglo[i]);//elemento que acumula
    total += miArreglo[i];

}
console.log("La suma de los 5 datos de ingreso es :" + total);
