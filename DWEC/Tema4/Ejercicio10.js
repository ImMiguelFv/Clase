/* 
Crea un programa que simule el funcionamiento de un bingo:
• El número de cartones que participan será siempre de 5.
• Cada cartón tendrá 8 filas y 4 columnas con 20 números del 1 al 90 distribuidos de forma
aleatoria (máximo de 5 por fila).
• El programa irá sacando bolas y los cartones se irán comprobando en tiempo real.
• El programa termina cuando un cartón alcanza el bingo.
• En ese momento se debe mostrar en pantalla cuál de los cartones ha ganado y los
números que han salido para comprobar que el bingo es correcto.
Plantea el problema, analízalo con detenimiento y diseña previamente todas las funciones que
vas a necesitar para resolverlo. Posteriormente implementa la solución
*/

const filas = 4;
const columnas = 8;

const numCartones = 5;
const numerosPorCarton = 20;
const vacio = "-";

function generarCarton() {
  const carton = Array.from({ length: filas }, () => Array(columnas).fill(vacio));
  let numerosGenerados = 0;

  while (numerosGenerados < numerosPorCarton) {
    const fila = Math.floor(Math.random() * filas);
    const columna = Math.floor(Math.random() * columnas);

    if (carton[fila][columna] === vacio) {
      const numero = generarNumeroUnico(carton);
      // Verificar que la fila actual no tenga ya 5 números
      if (carton[fila].filter((cell) => cell !== vacio).length < 5) {
        carton[fila][columna] = numero;
        numerosGenerados++;
      }
    }
  }

  return carton;
}

function generarNumeroUnico(carton) {
  while (true) {
    const numero = Math.floor(Math.random() * 90) + 1;
    if (!carton.flat().includes(numero)) {
      return numero;
    }
  }
}

function generarCartones() {
  const cartones = [];

  for (let i = 0; i < numCartones; i++) {
    const carton = generarCarton();
    cartones.push(carton);
  }

  return cartones;
}

function imprimirCartonesEnDocumento(cartones) {
  document.write("<h2>Cartones al inicio del juego:</h2>");
  for (let i = 0; i < numCartones; i++) {
    document.write(`<h3>Cartón ${i + 1}:</h3>`);
    document.write("<table border='0'>");
    for (let j = 0; j < filas; j++) {
      document.write("<tr>");
      for (let k = 0; k < columnas; k++) {
        document.write(`<td>${cartones[i][j][k]}</td>`);
      }
      document.write("</tr>");
    }
    document.write("</table>");
  }
}


function verificarGanador(carton) {
  let todosMarcados = true;

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (carton[i][j] !== vacio) {
        todosMarcados = false;
        break;
      }
    }
    if (!todosMarcados) {
      break;
    }
  }

  return todosMarcados;
}

const numerosSacados = new Set();

function sacarBola() {
  let bola;
  do {
    bola = Math.floor(Math.random() * 90) + 1;
  } while (numerosSacados.has(bola));
  numerosSacados.add(bola);
  return bola;
}

function jugarBingo() {
  const cartones = generarCartones();
  imprimirCartonesEnDocumento(cartones);
  const ganadores = Array(numCartones).fill(false);

  while (!ganadores.some((ganador) => ganador) && numerosSacados.size < 90) {
    const bola = sacarBola();
    document.write(`<p>Ha salido el número ${bola}</p>`);

    for (let i = 0; i < numCartones; i++) {
      const carton = cartones[i];
      if (!ganadores[i]) {
        for (let j = 0; j < filas; j++) {
          for (let k = 0; k < columnas; k++) {
            if (carton[j][k] === bola) {
              carton[j][k] = vacio;
              if (verificarGanador(carton)) {
                ganadores[i] = true;
                document.write(`<h2>¡Bingo! El cartón ${i + 1} ha ganado.</h2>`);
                break;
              }
            }
          }
        }
      }
    }
  }

  document.write("<h2>Juego terminado.</h2>");
}


jugarBingo();
