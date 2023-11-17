// Ejercicio 3: Reduce con Objetos
// Escribe una función que tome un arreglo de objetos, donde cada objeto representa
// una transacción con propiedades como monto y tipo (que puede ser "ingreso" o "egreso"). 
// Utiliza el método reduce para calcular el saldo total, teniendo en cuenta los ingresos y egresos. 
// Deberás sumar los montos de ingresos y restar los montos de egresos para obtener el saldo final.

function calcularMontos (transacciones) {
    
   return transacciones.reduce(function (acumulador, actual){
        if(actual.tipo === "ingreso"){
            acumulador += actual.monto
        } else {
            acumulador -= actual.monto;
        }
        return acumulador
    }, 0)
    
}

const transacciones = [
    {monto: 300, tipo: "ingreso"},
    {monto: 200, tipo: "egreso"},
    {monto: 300, tipo: "ingreso"},
    {monto: 300, tipo: "ingreso"},
]
console.log(calcularMontos(transacciones));