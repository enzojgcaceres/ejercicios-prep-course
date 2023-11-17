// Ejercicio 2: Filter con Objetos
// Escribe una función que tome un arreglo de objetos, donde cada objeto representa
// a un producto con propiedades como nombre, precio, y disponible. Utiliza el método 
// filter para crear un nuevo arreglo que contenga solo los productos que estén disponibles 
// (es decir, aquellos cuya propiedad disponible sea true).

// 


function estaDisponible (productos){
    var productosDisponibles = [];
    productos.filter(function (producto) {
        if (producto.disponible === true){
            productosDisponibles.push(producto)
        }
    })
    return  productosDisponibles;

}

let productos = [
    { nombre: "Tv 2000", precio: 2000, disponible: false },
    { nombre: "laptop 2000", precio: 2000, disponible: true }
  ];
console.log(estaDisponible(productos));
