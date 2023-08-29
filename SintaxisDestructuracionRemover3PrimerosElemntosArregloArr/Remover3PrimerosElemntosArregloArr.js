const arregloIncial = [1, 2, 3, 4, 5, 6, 7];
function removerTresPrimerosElementos(arreglo) {

    //var nuevoAreglo;

    const [, , , ,...nuevoAreglo] = arreglo;
    return nuevoAreglo;


}
const arregloFinal = removerTresPrimerosElementos(arregloIncial);
console.log(arregloFinal);