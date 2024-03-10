// Funciones que realizan las llamadas AJAX
function anadeCesta(codigo) {
    let formulario = document.getElementById(codigo)
	let boton = document.getElementById("btn-"+codigo)
	boton.disabled = true
    xajax_anadeCesta(codigo)
}

function vaciarCesta() {
	let boton_vaciar = document.getElementById("btn-vaciarCesta")
	boton_vaciar.disabled = true	

	xajax_vaciarCesta();
}

function mostrarCesta() {
    // Llamada a la función mostrarCesta en el servidor
    xajax_mostrarCesta();
    return false; // Evita que el formulario se envíe y la página se recargue
}
