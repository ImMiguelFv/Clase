/* # Ejercicio 5: Trabajando con JSON
Busca en internet algún fichero JSON que forme parte de la API de algún servicio,
cópialo en un string, conviértelo a un objeto de tipo JSON y realiza un recorrido para
mostrar en la consola su contenido. */



// Importamos el módulo http del paquete nodejs
const marcadoresString = `[{"latitude":40.416875,"longitude":-3.703308,"city":"Madrid", "description":"Puerta del Sol"},
{"latitude":40.417438,"longitude":-3.693363,"city":"Madrid","description":"Paseo del Prado"}
,{"latitude":40.407015,"longitude":-3.691163,"city":"Madrid","description":"Estación de Atocha"}]`;

const marcadores = JSON.parse(marcadoresString);



marcadores.forEach(marcador => {
  console.log(`${JSON.stringify(marcador)}`);
});


