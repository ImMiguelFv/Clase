function anadeCesta(event, cod) {
    let formulario = document.getElementById(cod);
    let boton = document.getElementById("btn-" + cod);
    boton.disabled = true;
    event.preventDefault();
    xajax_anadeCesta(cod);
}

function vaciarCesta() {
    var elemento = document.getElementById('tuElemento'); // Reemplaza 'tuElemento' con el ID correcto
    if (elemento !== null) {
        elemento.disabled = true; 
    } else {
        console.log('Lista vacia.');
    }
}
