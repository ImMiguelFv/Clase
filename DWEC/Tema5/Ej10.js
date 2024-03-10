/* # Ejercicio 10: validación de etiquetas
Valida las etiquetas de los productos de una tienda de comercio electrónico cuyas
características son las siguientes:
La etiqueta es de la forma: 2022-xrFdS/25_9, es decir los cuatro primeros caracteres
deben ser numéricos; el siguiente debe ser un –; los 5 siguientes serán combinaciones
de letras minúsculas y mayúsculas; el siguiente carácter será la barra inclinada; los
dos siguientes dos números; después un_; y por último un número.
Crea una clase llamada etiqueta de modo que tenga solo dos propiedades: nombre del
artículo y referencia del artículo; y dos métodos: mostrar artículo y validar etiqueta.
Posteriormente crea un objeto y comprueba que se valida correctamente las etiquetas */
class Etiqueta {
    constructor(nombre, referencia) {
      this.nombre = nombre;
      this.referencia = referencia;
    }
  
    mostrarArticulo() {
      console.log(`Nombre del artículo: ${this.nombre}`);
      console.log(`Referencia del artículo: ${this.referencia}`);
    }
  
    validarEtiqueta() {
      const regex = /^\d{4}-[a-zA-Z]{5}\/\d{2}_\d$/;
      if (regex.test(this.referencia)) {
        console.log("La etiqueta es válida. \n");
        this.mostrarArticulo();
      } else {
        console.log("La etiqueta no es válida.");
      }
    }
  }º
  
  // Caso de prueba 1: Etiqueta válida
  const etiquetaProducto1 = new Etiqueta("Producto ABC", "2022-xrFdS/25_9");
  console.log("Caso de prueba 1:");
  etiquetaProducto1.validarEtiqueta();//Dara bien 
  
  // Caso de prueba 2: Etiqueta no válida
  const etiquetaProducto2 = new Etiqueta("Producto XYZ", "1234-abCD/99_abc");
  console.log("\nCaso de prueba 2:");
  etiquetaProducto2.validarEtiqueta();  //Dará no valida
  