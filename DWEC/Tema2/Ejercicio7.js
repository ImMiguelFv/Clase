// Control parental para impedir el acceso a la página
var respuesta = prompt("Por favor, escribe el apellido del primer presidente de la democracia:");
while (respuesta !=="Suarez") {
  alert("Respuesta incorrecta. Intenta de nuevo.");
  respuesta = prompt("Por favor, escribe el apellido del primer presidente de la democracia:"); 
}
if (respuesta == "Suarez"){
alert("Correcto");};