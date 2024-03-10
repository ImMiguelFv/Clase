/* # Ejercicio 3: Herencia.
Escribe un programa con herencia de clases que permita modelar los objetos
Teléfono, Fijo y Móvil de manera que Teléfono sea la clase madre y Fijo y Móvil las
clases derivadas
Nota: Para crear una subclase a partir de una clase, se utiliza la palabra clave
“extends”.  el codigo es javascript */
// Clase madre
class Telefono {
    constructor(numero) {
        this.numero = numero;
    }
    

}

// Clase derivada Fijo que extiende de Teléfono
class Fijo extends Telefono {
    constructor(numero, prefijo) {
        prefijo = "91"
        super(numero);
        this.prefijo = prefijo;
    }
    toString() {
        return `Él número de telefono fijo es: ${this.prefijo} ${this.numero}`;
      }

    
}

// Clase derivada Movil que extiende de Teléfono
class Movil extends Telefono {
    constructor(numero, prefijo) {
        prefijo = "34";
        super(numero);
        this.prefijo = prefijo;
    }
    toString() {
        return `Él número de telefono movil es: ${this.prefijo} ${this.numero}`;
      }

}

// Ejemplo de uso
const telefono1 = new Fijo('123456789');
const telefono3 = new Movil('0987654321', '+52');
const telefono2 = new Movil('1235623', '+34');
document.write("<br>" + telefono1.toString());
document.write("<br>" + telefono2.toString());
document.write("<br>" + telefono3.toString());


