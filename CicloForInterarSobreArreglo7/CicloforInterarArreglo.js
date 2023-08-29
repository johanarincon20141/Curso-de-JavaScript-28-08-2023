//interar sobre un arregelo.
var miArreglo = [9, 1, 2, 3];
var total = 0;
for (var i = 0; i < miArreglo.length; i++) {
    console.log("ietracion" +i);//para ver la iteraciones 
    console.log(miArreglo);//ver todo mi arrgelo
    console.log(miArreglo[i]);// ver la posicion de cada uno
    total += miArreglo[i]; //suma del arreglo
}
console.log(total); //muestra el resultado