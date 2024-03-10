// Crear un tablero de tres en raya (matriz 3x3)
const tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "X", "O"]
  ];
  document.write (tablero [0] [0] +tablero [0] [1] +tablero [0] [2] +"<br>")
  document.write (tablero [1] [0] +tablero [1] [1] +tablero [1] [2] +"<br>")
  document.write (tablero [2] [0] +tablero [2] [1] +tablero [2] [2] +"<br> " +"<br> " +"<br> ")
  // Función para verificar si algún jugador ha ganado
  function verificarGanador(tablero) {
    // Verificar filas
    for (let fila = 0; fila < 3; fila++) {
      if (tablero[fila][0] === tablero[fila][1] && tablero[fila][1] === tablero[fila][2]) {
        return tablero[fila][0];
      }
    }
  
    // Verificar columnas
    for (let columna = 0; columna < 3; columna++) {
      if (tablero[0][columna] === tablero[1][columna] && tablero[1][columna] === tablero[2][columna]) {
        return tablero[0][columna];
      }
    }
  
    // Verificar diagonales
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
      return tablero[0][0];
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
      return tablero[0][2];
    }
  
    return "Empate"; // Si no hay ganador
  }
  
  // Llamar a la función para verificar el estado del juego
  const resultado = verificarGanador(tablero);
  
  if (resultado === "Empate") {
    document.write("La partida terminó en empate.");
  } else {
    document.write(`El jugador ${resultado} ha ganado.`);
  }
