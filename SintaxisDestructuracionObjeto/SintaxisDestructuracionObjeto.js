const estadicas = {
    max: 56.78,
    desviacionEstadar: 4.34,
    mediana: 34.54,
    moda: 23.8,
    min: -0.75,
    promedio: 35.85

};
const mitad =({ max, min }) => (max + min) / 2.0;//variables y funciones
console.log(mitad(estadicas));
