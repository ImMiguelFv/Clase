/* 
Escribe una función que haciendo uso de filter genere un array a partir de los elementos de otro
array que contiene cadenas de caracteres, sin los elementos que contengan tildes.
*/
//Creo un array
const arrayOriginal = ["manzana", "naranja", "canción", "pera", "árbol", "Mató", "Mato"];
//El siguiente array lo que hace es almacenar los valores de la función
const arrayFiltrado = filtrarSinTildes(arrayOriginal);
function filtrarSinTildes(array) {
  return array.filter(cadena => !cadena.includes('á') && !cadena.includes('é') && !cadena.includes('í') && !cadena.includes('ó') && !cadena.includes('ú')); //Si la letra no incluye tildes la devuelve 
}

console.log(arrayFiltrado); // ["manzana", "naranja", "pera", "Mato"] resultados obtenidos.

