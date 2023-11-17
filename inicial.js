function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:

    let letraAMayuscula = nombre.charAt(0).toUpperCase();

    let palabraSinInicial = nombre.slice(1);

    let palabraArreglada = letraAMayuscula + palabraSinInicial;

    return palabraArreglada;
}

console.log(mayuscula("enzo")); // devuelve "Enzo"