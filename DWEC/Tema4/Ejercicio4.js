/* 
crea una función vinculada a una variable llamada invertida que reciba una cadena de texto y y
la devuelva invertida, es decir, transformada de derecha a izquierda.
Por ejemplo, si la cadena recibida es “almadraba” debe de volver “abardamla”.
*/

let cadena = prompt("¿Qué palabra quieres invertir?");
let cadenaInvertida = invertirCadena(cadena);
function invertirCadena(cadena) {
    let invertida = cadena.split(''); // Divide la cadena en un array de caracteres
    let cadenaInvertida = '';

    for (let i = invertida.length - 1; i >= 0; i--) { // Recorre el array en sentido inverso
        cadenaInvertida += invertida[i]; // Construye la cadena invertida
    }

    return cadenaInvertida; // Devuelve la cadena invertida
}

document.write(cadenaInvertida);
