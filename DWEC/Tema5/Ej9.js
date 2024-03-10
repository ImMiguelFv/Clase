/* # Ejercicio 9:
Escribe una expresión regular que permita validar la URL de sitios webs cuyos
requisitos son que empiecen por https://, termine en .es y en medio no haya ninguna ñ.  */
const url = 'https://example.es';
function comprueba(url){
    const regex = /^https:\/\/[^ñ]+\.es$/; //Expresión explicada : siendo 
    if (regex.test(url)) {
        console.log('La URL es válida.');
    } else {
        console.log('La URL no es válida.');
    }
}

comprueba(url);
