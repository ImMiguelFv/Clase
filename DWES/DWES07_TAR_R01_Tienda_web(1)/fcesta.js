function nuevoProducto(codigo) {
    let formulario = document.getElementById(codigo)
	let boton = document.getElementById("btn-"+codigo)
	boton.disabled = true

	xajax_nuevoProducto(codigo)
}

function vaciarCesta() {
	let boton_vaciar = document.getElementById("btn-vaciarCesta")
	boton_vaciar.disabled = true	

	xajax_vaciarCesta();
}