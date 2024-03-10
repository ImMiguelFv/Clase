/* 
Crea un programa que reciba un array de cadena de caracteres y que por medio del método
filter devuelva aquellos caracteres que no forman parte del alfabeto español. Prueba la función
incluyendo palabras con caracteres como ^, $, o &.
*/
function filtrarCadenasEspanol(array) {
    // Función auxiliar que verifica si una cadena contiene solo caracteres del alfabeto español
    function esEspanol(cadena) {
      return /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(cadena);
    }
  
    // Usamos filter para crear un nuevo array con las cadenas que son parte del alfabeto español
    const arrayFiltrado = array.filter(cadena => esEspanol(cadena));
  
    return arrayFiltrado;
  }
  
  // Ejemplo de uso:
  const arrayOriginal = ["Hola", "^Amigo$", "Español", "Café & té"];
  const arrayFiltrado = filtrarCadenasEspanol(arrayOriginal);
  
  console.log(arrayFiltrado); // ["Hola!", "Español", "Café & té"]
  