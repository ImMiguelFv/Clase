/* # Ejercicio 4: Polimorfismo
Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de
Aula, para modelar las instalaciones de un instituto de enseñanza secundaria. Elige un
método con el que evidenciar el concepto de poliformismo. */

// Clase madre
class Aula {
    constructor(nombre) {
        this.nombre = nombre;
    }
    descripcion(){
        
    };
}

// Clase derivada para el aula de Música
class Musica extends Aula {
    constructor(nombre, instrumento) {
        super(nombre);
        this.instrumento = instrumento;
    };
        descripcion(){
            console.log(`La aula de música ${this.nombre} tiene el instrumento ${this.instrumento}`);
    }
}

// Clase derivada para el aula de Tecnología
class Tecnologia extends Aula {
    constructor(nombre, equipo) {
        super(nombre);
        this.equipo = equipo;
    }
    descripcion(){
        console.log(`La aula de tecnología ${this.nombre} tiene el equipo ${this.equipo}`);
    }
}
const aulaMusica = new Musica( '','Piano');
const aulaTecnologia = new Tecnologia( '','Computadoras');
aulaMusica.descripcion() // La aula de música Principal tiene el instrumento Piano
aulaTecnologia.descripcion() // La aula de tecnología Principal tiene el equipo Computadoras