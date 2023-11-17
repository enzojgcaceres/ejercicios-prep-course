function filtrarObjetosPorPropiedad(arrayDeObjetos, propiedad) {
    return arrayDeObjetos.filter(objeto => objeto.hasOwnProperty(propiedad));
}

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", ciudad: "México" },
    { nombre: "Pedro", edad: 25, ciudad: "Madrid" }
];

const resultado = filtrarObjetosPorPropiedad(personas, "ciudad");
console.log(resultado);
// Debería mostrar [{ nombre: "Ana", ciudad: "México" }, { nombre: "Pedro", edad: 25, ciudad: "Madrid" }]
