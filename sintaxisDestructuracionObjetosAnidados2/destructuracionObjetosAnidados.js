//sintaxis para a objetos anidades de destructuracion

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 73
    },
    "hoy": {
        minima: 68,
        maxima: 77
    },
    "manaNa": {
        minima: 47,
        maxima: 56
    }

};
//const minimoHoy=PRONOSTICO_LOCAL.hoy.minima;
//const maximaHoy=PRONOSTICO_LOCAL.hoy.maxima;
//console.log(minimoHoy,maximaHoy);
const { hoy: { minima: minimoHoy } } = PRONOSTICO_LOCAL;
console.log(minimoHoy);//le cambia el nombre de la variable con los :

const { hoy: { minina } } = PRONOSTICO_LOCAL;
console.log(minimoHoy);
//diferente manera de mostar el resultado 
const { manaNa: { minima, maxima } }=PRONOSTICO_LOCAL;
console.log(minima,maxima);
