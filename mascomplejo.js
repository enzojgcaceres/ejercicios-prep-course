const almuerzos = [
    {principal: "Arepa", postre: "helado"},
    {principal: "tacos", postre: "Cheescake"},
    {principal: "pizza", postre: "frutas"}, 
    {principal: "sushi", postre:"galletas"},
    {principal: "Arepa", postre: "golfeados"},
    {principal: "Arepa", postre: "Churros"},
    {principal: "Arepa", postre: "Flan"}, 
];

var cantidadesDeArepa = almuerzos.reduce(function (contador, almuerzo){
    if(almuerzo.principal === "Arepa"){ // que pasaria en esta linea si en lugar de ser almuerzo.principal, fuera "almuerzo" simplemente?
        return contador + 1;
    } else {
        return contador;
    }
}, 0)

console.log(cantidadesDeArepa)

module.exports = almuerzos;