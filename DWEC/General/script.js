function saludar() {
    const nombre = document.getElementById("nombreInput").value;
    
    if (nombre == `Irek`) {
        let saludo = `Eres un bot ${nombre}`;
        document.getElementById("saludo").textContent = saludo;
    }
    else {
        let saludo = `¡Hola, ${nombre}!`;
        document.getElementById("saludo").textContent = saludo;
    }
    
}
