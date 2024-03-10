/* 
Crea una función autoejecutable que informe por consola de la fecha y la hora a la que se inició
la ejecución de la función.
Nota: investiga el uso del objeto “Date” para facilitar el formato de los datos de salida.
*/

(function () {
    const fechaHoraInicio = new Date();
    const fechaInicio = fechaHoraInicio.toLocaleDateString();
    const horaInicio = fechaHoraInicio.toLocaleTimeString();

    console.log("La ejecución de la función comenzó en la fecha:"+ fechaInicio);
    console.log("La ejecución de la función comenzó a las:"+ horaInicio);
    
})();




