// Ejercicio 1: Map con Objetos
// Escribe una función que tome un arreglo de objetos, donde cada objeto representa a una
// persona con propiedades como nombre, edad, y ciudad. Utiliza el método map para crear un
// nuevo arreglo que contenga solo los nombres de todas las personas.

const personas = [
    { nombre: "Romario", edad: 30, ciudad: "México" },
    { nombre: "Rebeca", edad: 25, ciudad: "Madrid" },
];
  
function obtenerNombres(personas) {

   return personas.map(function (persona) {
       return persona.nombre;
})

}

const nombres = obtenerNombres(personas);
console.log(nombres); // Esto imprimirá un arreglo con los nombres ["Juan", "María", ...]

// let soloNombres = personas.map(function(persona){
//     return persona.nombre;
// })