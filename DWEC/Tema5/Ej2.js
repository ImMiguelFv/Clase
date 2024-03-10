/* 
Ejercicio 2: Constructores
Crea una clase para modelar un objeto “telefonoMovil” que contenga al menos las siguientes propiedades:
 CPU, RAM, Almacenamiento, Ancho, Alto y numCamaras. 
Añade también un método llamado “toString()” que muestre en pantalla la información del objeto creado. 
Crea cuatro objetos con distintos números de parámetros en la creación 
y muestra en pantalla la forma la información de cada equipo. */
class TelefonoMovil {
    constructor(CPU, RAM, Almacenamiento, Ancho, Alto, numCamaras) { //constructor para recurrir de forma sencilla a los valores
      this.CPU = CPU;
      this.RAM = RAM;
      this.Almacenamiento = Almacenamiento;
      this.Ancho = Ancho;
      this.Alto = Alto;
      this.numCamaras = numCamaras;
    }
  
    toString() {
      return `Teléfono Móvil:\nCPU: ${this.CPU}\n RAM: ${this.RAM}\nAlmacenamiento: ${this.Almacenamiento}\nAncho: ${this.Ancho}\nAlto: ${this.Alto}\nNúmero de Cámaras: ${this.numCamaras}`;
    }
  }
  
  // Crear objetos con distintos números de parámetros
  let telefono1 = new TelefonoMovil("Snapdragon 865", "6GB", "128GB", 5.8, 12.4, 3);
  let telefono2 = new TelefonoMovil("Exynos 990", "8GB", "256GB", 6.1, 13.0, 4);
  let telefono3 = new TelefonoMovil("A13 Bionic", "4GB", "64GB", 4.7, 11.8, 2);
  let telefono4 = new TelefonoMovil("Kirin 980", "6GB", "128GB", 6.4, 15.0, 3);
  
  // Mostrar información de los teléfonos
  document.write(telefono1.toString());
  document.write("<br>" + telefono2.toString());
  document.write("<br>" + telefono3.toString());
  document.write("<br>" + telefono4.toString());
  
