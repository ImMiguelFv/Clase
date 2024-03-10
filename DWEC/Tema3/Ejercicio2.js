const array50 = [];
for (let i = 0; i < 50; i++) {
  array50[i] = Math.floor(Math.random() * 100); // Valor aleatorio entre 0 y 99
  if (array50[i] % 2 !== 0) {
    // Si es impar, conviértelo en par
    
    array50[i]++;
  }
  document.write("Posición "+i +" " + array50[i] +" <br> ");
}
