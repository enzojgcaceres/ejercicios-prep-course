// Ejercicio 3: Reduce
// Escribe una función que tome un arreglo de números como entrada y use el método reduce para devolver
// la suma de todos los números en el arreglo.

var numeros = [1, 2, 3, 4, 5, 6]

let sumaDeTodos = numeros.reduce(function (acc, numero) {
    return acc + numero;
}, 0);


console.log(sumaDeTodos);
