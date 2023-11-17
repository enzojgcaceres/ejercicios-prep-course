function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:

    for (let i = 0; i < array.length; i++){
        cb(array[i]);
    }

}