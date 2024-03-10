// Pide al usuario que introduzca su edad
var respuesta = prompt("Por favor, introduce tu edad:");

// Convierte la respuesta a un número entero
var edad = parseInt(respuesta);

// Comprueba que la edad sea un número válido
if (isNaN(edad) || edad < 0) {
  alert("Edad no válida. Introduce un número mayor o igual a 0.");
} else {
  // Muestra un mensaje según el rango de edad
  if (edad <= 12) {
    respuesta=("Eres un niño.");
  } else if (edad <= 26) {
    respuesta=("Eres joven.");
  } else if (edad <= 60) {
    respuesta=("Eres un adulto.")
  } else {
    respuesta=("Eres un jubilado.");
  }

}
alert (respuesta);
