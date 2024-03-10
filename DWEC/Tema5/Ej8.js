class Trigonometria {
  // Método para calcular el seno
  sin(angulo) {
    return Math.sin(angulo);
  }
  // Método para calcular el coseno
  cos(angulo) {
    return Math.cos(angulo);
  }
  // Método para calcular la tangente
  tan(angulo) {
    return Math.tan(angulo);
  }
  // Método para calcular el arcoseno
  asin(valor) {
    return Math.asin(valor);
  }
  // Método para calcular el arcocoseno
  acos(valor) {
    return Math.acos(valor);
  }
  // Método para calcular la arcotangente
  atan(valor) {
    return Math.atan(valor);
  }
}

// Instancia un objeto de la clase Trigonometria
const trigonometria = new Trigonometria();

// Utiliza cada método y muestra los resultados por consola
const anguloEnGrados = (angulo) => (angulo * 180) / Math.PI;

document.write('Seno de 45 grados:', trigonometria.sin(Math.PI / 4) +"<br>");
document.write('Coseno de 45 grados:', trigonometria.cos(Math.PI / 4)+"<br>");
document.write('Tangente de 45 grados:', trigonometria.tan(Math.PI / 4)+"<br>");
document.write('Arcoseno de 1:', anguloEnGrados(trigonometria.asin(1))+"<br>");
document.write('Arcocoseno de 1:', anguloEnGrados(trigonometria.acos(1))+"<br>");
document.write('Arcotangente de 1:', anguloEnGrados(trigonometria.atan(1))+"<br>");
