function cuadrado(numero) {
    return numero * numero;
  }

function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
   

    let newArray = []

    for(let i = 0; i< array.length; i++){
        newArray.push(cb(array[i]));
    }
    return newArray;
} 

const numeros = [1, 2, 3, 4, 5];

const resultado = map(numeros, cuadrado);

console.log(resultado);
