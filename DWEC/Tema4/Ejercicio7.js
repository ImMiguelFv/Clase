/* 
Escribe una función recursiva que indique si la palabra que le pasa es como parámetro es
palíndroma o no.
Nota: palíndroma es una palabra o frase que se lee igual en un sentido que en otro, por
ejemplo: “aviva”, “sagas”, “amó la paloma”.
*/
function esPalindromo(palabra) {
    palabra = palabra.replace(` `,``).toLowerCase();  // Caso base: Si la palabra tiene 0 o 1 caracteres, es palíndroma por definición.
    if (palabra.length <= 1) {
        return true;
    }

    // Comparamos el primer y el último caracter de la palabra.
    if (palabra[0] === palabra[palabra.length - 1]) {
        
        // Si son iguales, llamamos recursivamente con la subcadena que excluye los extremos.
        console.log(palabra)

        
        return esPalindromo(palabra.slice(1, -1));
    } else {
        // Si no son iguales, la palabra no es palíndroma.
        console.log(palabra)
        console.log("No es palindroma");
    }
}

// Ejemplos

console.log(esPalindromo("sagas"));         // Devuelve true
console.log(esPalindromo("holah"));           // Devuelve No es palindroma
