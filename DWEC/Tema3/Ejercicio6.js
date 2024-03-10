const conjunto = new Set();
const array1 = [12, 12, 12, 14];
const array2 = [11, 11, 13, 15];
const array3 = ["i", "j", "k", "l"];

array1.forEach((elemento) => conjunto.add(elemento));
array2.forEach((elemento) => conjunto.add(elemento));
array3.forEach((elemento) => conjunto.add(elemento));

document.write("El conjunto contiene " + conjunto.size + " elementos. <br>");
document.write("Elementos del conjunto:", Array.from(conjunto) +"<br>");
