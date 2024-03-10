const tablaClasificacion = [
    { Puesto: 1, Equipo: "R. Madrid", Puntos: 28, PartidosJugados: 11, PartidosGanados: 9, PartidosEmpatados: 1, PartidosPerdidos: 1, GolesAFavor: 23, GolesEnContra: 8 },
    { Puesto: 2, Equipo: "Girona", Puntos: 28, PartidosJugados: 11, PartidosGanados: 9, PartidosEmpatados: 1, PartidosPerdidos: 1, GolesAFavor: 25, GolesEnContra: 13 },
    { Puesto: 3, Equipo: "Atlético", Puntos: 25, PartidosJugados: 10, PartidosGanados: 8, PartidosEmpatados: 1, PartidosPerdidos: 1, GolesAFavor: 25, GolesEnContra: 9 },
    { Puesto: 4, Equipo: "Barcelona", Puntos: 24, PartidosJugados: 11, PartidosGanados: 7, PartidosEmpatados: 3, PartidosPerdidos: 1, GolesAFavor: 23, GolesEnContra: 12 },
    { Puesto: 5, Equipo: "R. Sociedad", Puntos: 19, PartidosJugados: 11, PartidosGanados: 5, PartidosEmpatados: 4, PartidosPerdidos: 2, GolesAFavor: 20, GolesEnContra: 14 },
    { Puesto: 6, Equipo: "Athletic", Puntos: 18, PartidosJugados: 11, PartidosGanados: 5, PartidosEmpatados: 3, PartidosPerdidos: 3, GolesAFavor: 18, GolesEnContra: 12 },
    { Puesto: 7, Equipo: "Betis", Puntos: 17, PartidosJugados: 11, PartidosGanados: 4, PartidosEmpatados: 5, PartidosPerdidos: 2, GolesAFavor: 14, GolesEnContra: 15 },
    { Puesto: 8, Equipo: "Rayo", Puntos: 17, PartidosJugados: 11, PartidosGanados: 4, PartidosEmpatados: 5, PartidosPerdidos: 2, GolesAFavor: 14, GolesEnContra: 15 },
    { Puesto: 9, Equipo: "Valencia", Puntos: 15, PartidosJugados: 11, PartidosGanados: 4, PartidosEmpatados: 3, PartidosPerdidos: 4, GolesAFavor: 14, GolesEnContra: 13 },
    { Puesto: 10, Equipo: "Las Palmas", Puntos: 14, PartidosJugados: 11, PartidosGanados: 4, PartidosEmpatados: 2, PartidosPerdidos: 5, GolesAFavor: 8, GolesEnContra: 10 },
    { Puesto: 11, Equipo: "Osasuna", Puntos: 13, PartidosJugados: 11, PartidosGanados: 4, PartidosEmpatados: 1, PartidosPerdidos: 6, GolesAFavor: 12, GolesEnContra: 16 },
    { Puesto: 12, Equipo: "Getafe", Puntos: 12, PartidosJugados: 11, PartidosGanados: 2, PartidosEmpatados: 6, PartidosPerdidos: 3, GolesAFavor: 13, GolesEnContra: 16 },
    { Puesto: 13, Equipo: "Sevilla", Puntos: 10, PartidosJugados: 10, PartidosGanados: 2, PartidosEmpatados: 4, PartidosPerdidos: 4, GolesAFavor: 16, GolesEnContra: 15 },
    { Puesto: 14, Equipo: "Cádiz", Puntos: 10, PartidosJugados: 11, PartidosGanados: 2, PartidosEmpatados: 4, PartidosPerdidos: 5, GolesAFavor: 10, GolesEnContra: 16 },
    { Puesto: 15, Equipo: "Mallorca", Puntos: 9, PartidosJugados: 11, PartidosGanados: 1, PartidosEmpatados: 6, PartidosPerdidos: 4, GolesAFavor: 12, GolesEnContra: 16 },
    { Puesto: 16, Equipo: "Villarreal", Puntos: 9, PartidosJugados: 10, PartidosGanados: 2, PartidosEmpatados: 3, PartidosPerdidos: 5, GolesAFavor: 12, GolesEnContra: 16 },
    { Puesto: 17, Equipo: "Alavés", Puntos: 9, PartidosJugados: 11, PartidosGanados: 2, PartidosEmpatados: 3, PartidosPerdidos: 6, GolesAFavor: 9, GolesEnContra: 16 },
    { Puesto: 18, Equipo: "Celta", Puntos: 6, PartidosJugados: 11, PartidosGanados: 1, PartidosEmpatados: 3, PartidosPerdidos: 7, GolesAFavor: 10, GolesEnContra: 19 },
    { Puesto: 19, Equipo: "Granada", Puntos: 6, PartidosJugados: 10, PartidosGanados: 1, PartidosEmpatados: 3, PartidosPerdidos: 6, GolesAFavor: 15, GolesEnContra: 25 },
    { Puesto: 20, Equipo: "Almería", Puntos: 3, PartidosJugados: 11, PartidosGanados: 0, PartidosEmpatados: 3, PartidosPerdidos: 8, GolesAFavor: 14, GolesEnContra: 31 }
  ];
  
  // Para mostrar los resultados de un equipo dado, por ejemplo, el R. Madrid:
  const equipoBuscado = prompt("Ingrese el nombre del equipo para ver los resultados:");

  // Buscar el equipo en la tabla de clasificación
  const resultadoEquipo = tablaClasificacion.find((equipo) => equipo.Equipo === equipoBuscado);
  
  if (resultadoEquipo) {
    // Si se encuentra el equipo, mostrar los resultados
    
    document.write("Resultados para el equipo " + equipoBuscado + ":"+ " Puesto: " + resultadoEquipo.Puesto +"<br>"
+" Puntos: " + resultadoEquipo.Puntos+ "<br>"
+" Partidos Jugados: " + resultadoEquipo.PartidosJugados+"<br>"
+ " Partidos Ganados: " + resultadoEquipo.PartidosGanados+"<br>"
+" Partidos Empatados: " + resultadoEquipo.PartidosEmpatados+"<br>"
+" Partidos Perdidos: " + resultadoEquipo.PartidosPerdidos+"<br>"
+" Goles a Favor: " + resultadoEquipo.GolesAFavor+"<br>"
+" Goles en Contra: " + resultadoEquipo.GolesEnContra);
  } else {
    // Si no se encuentra el equipo, mostrar un mensaje de error
    alert(`El equipo "${equipoBuscado}" no se encuentra en la tabla de clasificación.`);
  }