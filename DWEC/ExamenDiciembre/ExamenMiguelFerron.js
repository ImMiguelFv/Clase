// Para cada mesa electoral, tenemos la siguiente información:

let datosMesas = [
    {Municipio: "La Acebeda", Mesa: "1-001-U", Censo: 64, Votos: [31, 6, 9, 1, 6, 0, 1]},
    {Municipio: "Ajalvir", Mesa: "1-001-A", Censo: 859, Votos: [285, 105, 62, 57, 24, 11, 11]},
    {Municipio: "Ajalvir", Mesa: "1-001-B", Censo: 863, Votos: [311, 92, 48, 53, 31, 6, 3]},
    {Municipio: "Ajalvir", Mesa: "1-002-A", Censo: 766, Votos: [271, 98, 81, 71, 30, 2, 9]},
    {Municipio: "Ajalvir", Mesa: "1-002-B", Censo: 871, Votos: [320, 100, 89, 79, 19, 14, 5]},
    {Municipio: "Alameda del Valle", Mesa: "1-001-U", Censo: 194, Votos: [74, 27, 31, 18, 14, 1, 3]}
  ];
  
  // i) Función añadir datos de una mesa electoral//
  function añadirDatosMesa(municipio, mesa, censo = null, votos = [null, null, null, null, null, null, null]) { 
    const mesasExistente = datosMesas.filter(item => item.Municipio === municipio && item.Mesa === mesa); //mediante el metodo filter buscamos si existe el municipio y la mesa en el objeto.

    if (mesasExistente.length === 0) { //si la mesa no existe en el municipio indicado
        datosMesas.push({Municipio: municipio, Mesa: mesa, Censo: censo, Votos: votos}); // se añade
        console.log(`Datos añadidos para la mesa ${mesa} en ${municipio}.`); 
        console.log(`Datos de la mesa ${mesa} del municipio ${municipio}:`, datosMesas.find(item => item.Mesa === mesa && item.Municipio === municipio));
    } else { // si la mesa existe en el municipio
        console.log('Mesa ya existente para el municipio ingresado');
    }
}
  // ii) Calcula la abstención por municipio
  function calcularAbstencionTotalMunicipio() {

        // Creamos un objeto para almacenar la abstención total por municipio
        const abstencionPorMunicipio = {}; // creamos un objeto
    
        datosMesas.forEach(mesa => {    //recorremos el array de objetos
            const abstencionMesa = mesa.Censo - mesa.Votos.reduce((total, voto) => total + (voto || 0), 0); // Calculamos la abstención para cada mesa
    
            // Sumamos la abstención de esta mesa al total del municipio
            if (abstencionPorMunicipio[mesa.Municipio]) {
                abstencionPorMunicipio[mesa.Municipio] += abstencionMesa;
            } else {
                abstencionPorMunicipio[mesa.Municipio] = abstencionMesa;
            }
            }
        );
    
        // Mostramos la abstención total por municipio
        for (const municipio in abstencionPorMunicipio) {
            console.log(`Abstención total en ${municipio}: ${abstencionPorMunicipio[municipio]}`);
        }
    }
    
  // iii) Calcula la abstención total y exprésala en porcentaje
  function calcularAbstencionTotal() {
    const totalCenso = datosMesas.reduce((total, mesa) => total + mesa.Censo, 0); //Inicia el cuento del censo desde la posición 0 del array sumandolos mediante el metodo reduce.
    const totalVotos = datosMesas.reduce((total, mesa) => total + mesa.Votos.reduce((sum, voto) => sum + voto, 0), 0); //Inicia el cuento de votos desde la posicion 0 del array sumandolos mediante el metodo reduce. en este caso
    const abstencionTotal = totalCenso - totalVotos; 
    const porcentajeAbstencion = (abstencionTotal / totalCenso) * 100;
    console.log(`Abstención total: ${abstencionTotal}, Porcentaje: ${porcentajeAbstencion.toFixed(2)}%`);
  }
  
  // iv) Calcula el total de votos por partido para un municipio dado
  function calcularTotalVotosPorPartido(municipio) {
    const mesasMunicipio = datosMesas.filter(item => item.Municipio === municipio); //buscamos el municipio en el objeto.
    const totalVotosPorPartido = [0, 0, 0, 0, 0, 0, 0]; // PP, MM, PSOE, VOX, Otros, Blancos, Nulos se inicializa en 0.
  
    mesasMunicipio.forEach(mesa => {
        mesa.Votos.forEach((voto, x) => {  
            totalVotosPorPartido[x] += voto;
        });
    });
  
    console.log(`Total de votos por partido en ${municipio}:`);
    console.log(`PP: ${totalVotosPorPartido[0]}, MM: ${totalVotosPorPartido[1]}, PSOE: ${totalVotosPorPartido[2]}, 
    VOX: ${totalVotosPorPartido[3]}, Otros: ${totalVotosPorPartido[4]}, Blancos: ${totalVotosPorPartido[5]}, Nulos: ${totalVotosPorPartido[6]}`);
  }
  
  // v) Calcula el total de votos por partido
  function calcularTotalVotosPorPartidoGlobal() {
    const totalVotosPorPartido = [0, 0, 0, 0, 0, 0, 0]; // PP, MM, PSOE, VOX, Otros, Blancos, Nulos se inicializa en 0.
  
    datosMesas.forEach(mesa => { 
        mesa.Votos.forEach((voto, index) => {
            totalVotosPorPartido[index] += voto;
        });
    });
  
    console.log("Suma total de votos por partido:");
    console.log(`PP: ${totalVotosPorPartido[0]}, MM: ${totalVotosPorPartido[1]}, PSOE: ${totalVotosPorPartido[2]},
     VOX: ${totalVotosPorPartido[3]}, Otros: ${totalVotosPorPartido[4]}, Blancos: ${totalVotosPorPartido[5]}, Nulos: ${totalVotosPorPartido[6]}`);
  }
  
  // Ejemplos de uso
  console.log("Ejercicio 2");
  calcularAbstencionTotalMunicipio(); // Dara  de cada municipio su abstención 
  console.log();
  console.log("Ejercicio 3");
  calcularAbstencionTotal(); //Dara la resta de todos los votos a suma de todos los censos 
  console.log();
  console.log("Ejercicio 4");
  calcularTotalVotosPorPartido("Ajalvir"); //dara los votos por partido de un municipio
  console.log();
  console.log("Ejercicio 5");
  calcularTotalVotosPorPartidoGlobal(); //dara los votos por partido de todos los municipios  
  console.log();
  console.log("Ejercicio 1");
  // Prueba de uso del 1 (La pongo abajo debido a qué sino realiza los calculos con los valores añadidos)
  añadirDatosMesa("Ajalvir", "1-002-B", 900, [300, 100, 80, 90, 20, 10, 5]); //Mesa ya existente
  añadirDatosMesa("Ajalvir", "1-001-U", 900, [300, 100, 80, 90, 20, 10, 5]); // Mesa no existente