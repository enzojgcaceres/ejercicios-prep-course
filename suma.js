function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:

    let sumaArray = arrayOfNumbers.reduce(function(acc, actual){
        return acc + actual;
    }, 0)
    cb = (sumaArray);
}
