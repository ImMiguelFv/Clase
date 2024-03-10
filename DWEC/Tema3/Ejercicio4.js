// Crear un array de 10 elementos
const array = new Array(10);

// Inicializar el array con múltiplos aleatorios de 5
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 21) * 5; // Números aleatorios entre 0 y 100 (múltiplos de 5)
}

// Verificar el primer elemento
while (array[0] < 50) {
  array[0] = Math.floor(Math.random() * 21) * 5; // Reemplazar el primer elemento si es menor de 50
}

// Verificar el último elemento
while (array[9] > 50) {
  array[9] = Math.floor(Math.random() * 21) * 5; // Reemplazar el último elemento si es mayor de 50
}

// Muestra el contenido del array en pantalla
document.write(array +" ");

