/* 
Escribe una función que, a partir de una palabra pre-establecida, reciba como parámetros un
número variable de letras y muestre en pantalla solo las coincidencias entre la palabra y las
letras proporcionadas.
Por ejemplo, si la palabra predeterminada es sargento y se ha invocado a la función como
adivina(“a”, “e”, “i”, “o”, “u”, “d”, “n”) la salida del programa debe ser “- a - - e n - o”.
*/

function adivina(palabra, ...letras) {
const palabraArray = palabra.split('');
    const resultado = palabraArray.map((letra) => {
        if (letras.includes(letra)) {
            return letra;
        } else {
            return '-';
        }
    });
    
    const resultadoStr = resultado.join(' ');
    document.write(palabra + " Letras elegidas " + letras +"<br>")
    document.write(resultadoStr);
}

adivina("sargento", "a", "e", "i", "o", "u", "d", "n");

