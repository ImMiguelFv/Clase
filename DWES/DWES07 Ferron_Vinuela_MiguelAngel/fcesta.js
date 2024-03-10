// Función para añadir un producto al carrito
function anadirProducto(codigo) {
	// Obtengo el formulario y el botón correspondientes al código del producto
	let formulario = document.getElementById(codigo);
	let boton = document.getElementById("btn-" + codigo);

	// Deshabilito el botón para evitar múltiples clics mientras se procesa la solicitud
	boton.disabled = true;

	// Envío el código del producto a la función "xajax_anadirProducto" en el servidor
	xajax_anadirProducto(codigo);
}

// Función para vaciar la cesta de compras
function vaciarCesta() {
	// Obtengo el botón correspondiente a vaciar la cesta
	let botonVaciar = document.getElementById("btn-vaciarCesta");

	// Deshabilito el botón para evitar múltiples clics mientras se procesa la solicitud
	botonVaciar.disabled = true;

	// Llamo a la función "xajax_vaciarCesta" en el servidor para vaciar la cesta
	xajax_vaciarCesta();
}
