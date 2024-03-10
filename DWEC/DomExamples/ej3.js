document.getElementById('añadir').addEventListener("click", function agregarFilas(event) {
    event.preventDefault(); // Evita que se recargue la página
    
    let nombreInput = document.getElementById("lista");
    let nombre = nombreInput.value.trim(); // Obtenemos el valor del input y eliminamos espacios en blanco al principio y al final
    
    if (nombre !== "") { // Verificamos si el nombre no está vacío
        let tabla = document.getElementById("tabla");
        
        let nuevaFila = tabla.insertRow(-1);
        let celdaNombre = nuevaFila.insertCell(0);
        
        celdaNombre.innerHTML = nombre;
        
        // Limpiar el campo de texto después de agregar la fila
        nombreInput.value = "";
    } else {
        alert("Por favor ingresa un nombre antes de agregarlo a la agenda.");
    }
});
