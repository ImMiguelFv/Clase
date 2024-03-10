// Preguntamos al usuario por el nombre completo del primer presidente de la democracia española
var respuesta = prompt("¿Cuál fue el primer presidente de la democracia española?");

while (respuesta !=="Adolfo Suarez") {
  if (respuesta === null) {
    // Si el usuario presiona cancelar, salir del bucle
    break;
  } else if (respuesta === "Adolfo") {
    respuesta = prompt("Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?");
  } else if (respuesta === "Suarez") {
    respuesta = prompt("Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?");
  } else {
    respuesta = prompt("ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?");
  }
}
if (respuesta === "Adolfo Suarez") {
  alert("Correcto");
}
