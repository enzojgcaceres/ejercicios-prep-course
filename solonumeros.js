function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
    let soloEnteros = [];
    for(let i = 0; i < array.length; i++){
        if (typeof(array[i]) === "number"){
            soloEnteros.push(array[i]);
        }
    }
    return soloEnteros;
  
  }

var miFuncion = new Function("5+2");
var forma = "redonda";
var tamano = 1;
var hoy = new Date();
let megaArray = [miFuncion, forma, tamano, hoy, 3, 4, 6, 135786, "Tea"];

console.log(soloNumeros(megaArray));