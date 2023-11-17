// Ejercicio 1: Encontrar el máximo y el mínimo

// Escribe una función llamada encontrarMaximoMinimo que tome un arreglo de números como entrada y
// devuelva un objeto con dos propiedades: maximo y minimo, que representen el valor máximo y mínimo del arreglo, 
// respectivamente.
function encontrarMaximoMinimo (numeros = []) {
    let maximo = numeros[0];
    let minimo = numeros[0];
    
    if(numeros.length === 0){
        return {maximo: undefined, minimo: undefined};
    }
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] > maximo){
            maximo = numeros[i];
        }
        if(numeros[i] < minimo){
            minimo = numeros[i]
        }
    }
    return {maximo, minimo};

}
const numeros = [5, 2, 9, 1, 7, 3];
const resultado = encontrarMaximoMinimo(numeros);
console.log(resultado); // Debería mostrar { maximo: 9, minimo: 1 }