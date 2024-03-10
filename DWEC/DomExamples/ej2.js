let miLista = document.getElementById("miLista");
let ordenar = confirm("Deseas ordenar la lista del documento")
let elementosLista = Array.from(miLista.children);

if (ordenar === true) {
    elementosLista.sort((a, b) => a.textContent.localeCompare(b.textContent));
}
else if (ordenar === false) {
    elementosLista.sort(() => Math.random() - 0.5) ;
}
miLista.innerHTML = "";
elementosLista.forEach(elemento => { 
    miLista.appendChild(elemento)} );
