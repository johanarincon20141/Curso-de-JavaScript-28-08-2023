//combinar las operadores alternarios 
//compar numeros
/*function comprarNumeros(a, b) {
    if (a == b) {
       return "a y b son iguales";

   } else if (a > b) {
        return " a es mayor que b";

    } else {
        return "b es mayor que a "
    }
}*/
//condicional alternario
function comprarNumeros(a, b) {
    return a == b ? "a y b son iguales "
        : a > b ? "a es mayor que b"
         : "b Es mayor que a";
}
console.log(comprarNumeros(7, 7));//Ingresa los valores