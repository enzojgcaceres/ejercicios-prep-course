const almuerzos = require('./mascomplejo.js');

// var platosPrincipales = [];

// for (let i = 0; i < almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal);
//  };

// console.log(platosPrincipales);

var platosPrincipales = almuerzos.map(function (almuerzo){
    return almuerzo.principal;
});

console.log(platosPrincipales);