const mapaValoresOrdenados = new Map();
mapaValoresOrdenados.set("C", "Charlie");
mapaValoresOrdenados.set("B", "Bravo");
mapaValoresOrdenados.set("E", "Echo");
mapaValoresOrdenados.set("A", "Alpha");
mapaValoresOrdenados.set("D", "Delta");

const mapaValoresOrdenadosPorClave = new Map([...mapaValoresOrdenados.entries()].sort());

document.write("Mapa ordenado alfabéticamente por clave: <br>");
mapaValoresOrdenadosPorClave.forEach((valor, clave) => {
  document.write(`${clave}: ${valor}` +"<br>");
});
