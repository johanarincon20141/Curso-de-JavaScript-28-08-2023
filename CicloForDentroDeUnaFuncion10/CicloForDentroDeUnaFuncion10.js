function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.length; i++) {//contar numeros pares 
        if (arreglo[i] % 2 == 0) { // logica 
            total++;

            }
        }

        return total;

    }
//mostrar la cantida de numeros pares que ingresas el resulta es la cantidad 
console.log(contarNumerosPares([2,4,6,11,2,3,5,6,7,7,8,12]));