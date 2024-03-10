/* #  Ejercicio 6: Trabajando con JSON
Crea una clase película que permita gestionar la siguiente información: nombre de la
película, año del estreno, duración, género, los 6 actores o actrices más importantes,
la URL de su cartel promocional y su director; y una acción que permita mostrar en
consola toda la información.
El constructor recibirá los datos en una cadena Json de la que deberá sacar los
valores de cada propiedad.
Crea un objeto de la clase y ponla a prueba.
  */
 // Clase Pelicula
class Pelicula {
  constructor(jsonString) {
    const datosPelicula = JSON.parse(jsonString);

    this.nombre = datosPelicula.nombre;
    this.anioEstreno = datosPelicula.anioEstreno;
    this.duracion = datosPelicula.duracion;
    this.genero = datosPelicula.genero;
    this.actoresPrincipales = datosPelicula.actoresPrincipales;
    this.urlCartelPromocional = datosPelicula.urlCartelPromocional;
    this.director = datosPelicula.director;
  }

  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Año de Estreno: ${this.anioEstreno}`);
    console.log(`Duración: ${this.duracion}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Actores Principales: ${this.actoresPrincipales.join(', ')}`);
    console.log(`URL del Cartel Promocional: ${this.urlCartelPromocional}`);
    console.log(`Director: ${this.director}`);
  }
}

const jsonStringPelicula = `
{"nombre": "Titanic",
 "anioEstreno": 1997, "duracion": "3h 14min",
 "genero": "Romance",
  "actoresPrincipales": ["Leonardo DiCaprio", "Kate Winslet"],
 "urlCartelPromocional": "https://ejemplo.com/titanic.jpg",
 "director": "James Cameron"}`;

const peliculaTitanic = new Pelicula(jsonStringPelicula);
peliculaTitanic.mostrarInformacion();
