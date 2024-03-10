/* 
Ejercicio 1: Primeros objetos
Crea un objeto denominado usuario 
que permita autenticar a la persona que quiere iniciar sesión en el sistema
*/
let usuario = {
    nombreUsuario: "user",
    contraseña: "1234",
    //Json
    autenticarJson: function() {
      let nombreIngresado = prompt("Ingrese su nombre de usuario:");
      let contraseñaIngresada = prompt("Ingrese su contraseña:");
  
      if (nombreIngresado === this.nombreUsuario && contraseñaIngresada === this.contraseña) { //Valida si lo ingresado es igual a las variables inicializadas
        console.log("Autenticación exitosa");
        
      } else {
        
        console.log("Autenticación fallida");
      }
    }
  }; 
  //Tradicional
  function autenticar(usuario) {
    let nombreIngresado = prompt("Ingrese su nombre de usuario:");
    let contraseñaIngresada = prompt("Ingrese su contraseña:");

    if (nombreIngresado === usuario.nombreUsuario && contraseñaIngresada === usuario.contraseña) { //Debido a qué está fuera del objeto usamos directamente usuario.variable
        console.log("Autenticación exitosa");
    } else {
        console.log("Autenticación fallida");
    }
}

    // Ejemplo de uso
    usuario.autenticarJson();
    autenticar(usuario);

    //Ambas funcionan igual