const almuerzos = require('./mascomplejo.js');

// var postresParaPlatosConArepas = []

// for (let i = 0; i < almuerzos.length; i++){
//     if(almuerzos[i].principal === "Arepa"){
//         postresParaPlatosConArepas.push(almuerzos[i].postre)
//     }
// }

// console.log(postresParaPlatosConArepas);

var postresParaPlatosConArepas = almuerzos
    .filter(function (almuerzo){
        return almuerzo.principal === "Arepa"
})
    .map(function (almuerzo){
        return almuerzo.postre;
    })


console.log(postresParaPlatosConArepas);