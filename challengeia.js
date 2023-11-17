// Escribe una función llamada filtrarObjetosPorPropiedad que tome un array de objetos 
// y una propiedad como entrada, y devuelva un nuevo array que contenga solo los objetos
// que tienen esa propiedad.

function filtrarObjetosPorPropiedad (arrayDeObjetos, propiedad){
    let objetosConPropiedad = [];
    for(let i = 0; i < arrayDeObjetos.length; i++){
        if (arrayDeObjetos[i].hasOwnProperty(propiedad)){
            objetosConPropiedad.push(arrayDeObjetos[i])
        }
    }
    return objetosConPropiedad;
}

const personas = [
    {nombre: "Genaro", edad: 24},
    {nombre: 'Luisa', ciudad: "Praga"},
    {nombre: "Gertrudis", edad: 90, ciudad: "Ciudad de Mexico"},
];

const resultado = filtrarObjetosPorPropiedad(personas, "ciudad")
console.log(resultado);