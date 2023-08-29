//estructuras multidimensionales
//ciclos anidados
var miArreglo = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < miArreglo.length; i++) {
    console.log("mi arreglo anidado " + miArreglo[i]);

    var arregloAnidado = miArreglo[i];
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(">>ciclo anidado");
        console.log("Elemento :"+ arregloAnidado[j]);
        console.log(arregloAnidado[j] + "elemento"); // elemento
        //console.log("Mi arreglo anidado J " + arregloAnidado[j]);

    }
}
console.log(miArreglo);
console.log("Arreglo posicion 0");
console.log(miArreglo[0]);//muestra el valor del arreglo en la posion o
console.log("Arreglo posicion 1");
console.log(miArreglo[1]);
console.log("Arreglo posicion 3");
console.log(miArreglo[2]);
//arreglo 0
console.log("Arreglo o indices ");
console.log(miArreglo[0][0]);//posicion 0 del subindice 0
console.log(miArreglo[0][1]);
console.log(miArreglo[0][2]);
//arreglo 1
console.log("Arreglo 1");
console.log( miArreglo[1][0]);
console.log(miArreglo[1][1])
console.log(miArreglo[1][2])
//arreglo 2
console.log("Arreglo 2");
console.log(miArreglo[2][0])
console.log(miArreglo[2][1])
console.log(miArreglo[2][2])




