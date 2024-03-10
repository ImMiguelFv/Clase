/* 
Escribe una función que devuelva como grados Celsius la cantidad en grados Fahrenheit que
recibe como parámetro.
*/

function conversor() {
let fahrenheit = prompt("¿Cuantos grados hace?");
let celsius = parseInt(fahrenheit- 32) * (5/9);  
alert(fahrenheit + "  fahrenheit " + " son " +celsius + " celsius")
  }
  conversor();