/* 

Escribe la función flecha que reciba dos cadenas de caracteres e informe por consola de
aquella que contiene más vocales.*/
const contarVocales = cadena => {
    const vocales = "aeiouAEIOU";
    return cadena.split('').filter(letra => vocales.includes(letra)).length;
};

const compararCadenas = (cadena1, cadena2) => {
    const numVocalesCadena1 = contarVocales(cadena1);
    const numVocalesCadena2 = contarVocales(cadena2);
    console.log("Las cadenas son:"   + cadena1 + " y " +cadena2)
    if (numVocalesCadena1 > numVocalesCadena2) {
        console.log(`La primera cadena tiene más vocales.`);
    } else if (numVocalesCadena2 > numVocalesCadena1) {
        console.log(`La segunda cadena tiene más vocales.`);
    } else {
        console.log(`Ambas cadenas tienen la misma cantidad de vocales.`);
    }
};

compararCadenas("Hola, cómo estás?", "Este es un ejemplo de cadena.");
