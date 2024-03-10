const diccionario = {
  "casa": { ingles: "house", frances: "maison", aleman: "Haus" },
  "perro": { ingles: "dog", frances: "chien", aleman: "Hund" },
  "coche": { ingles: "car", frances: "voiture", aleman: "Auto" },
  "sol": { ingles: "sun", frances: "soleil", aleman: "Sonne" },
  "agua": { ingles: "water", frances: "eau", aleman: "Wasser" },
};

const palabra = prompt("Introduce una palabra en español:");
const traducciones = diccionario[palabra];

if (traducciones) {
  document.write("Traducciones de '" + palabra + "':<br>");
  document.write("Inglés: " + traducciones.ingles + "<br>");
  document.write("Francés: " + traducciones.frances + "<br>");
  document.write("Alemán: " + traducciones.aleman + "<br>");
} else {
  document.write("La palabra '" + palabra + "' no se encuentra en el diccionario.<br>");
}
