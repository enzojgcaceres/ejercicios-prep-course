function eliminarDuplicados(arr) {
    const arregloSinDuplicados = [];
    for (const elemento of arr) {
        if (!arregloSinDuplicados.includes(elemento)) {
            arregloSinDuplicados.push(elemento);
        }
    }
    return arregloSinDuplicados;
}

const numeros = [1, 2, 2, 3, 4, 4, 5];
const resultado = eliminarDuplicados(numeros);
console.log(resultado); // Debería mostrar [1, 2, 3, 4, 5]
