let edadAna, edadLuis; // Usamos parseInt para convertir a entero
edadAna = parseInt(prompt("Introduce la edad de Ana ", "")); 
edadLuis = parseInt(prompt("Introduce la edad de Luis", "")); 
if (edadAna > edadLuis) {  console.log("Ana es mayor que Luis.");  
console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis); } 
else {  console.log("Ana es menor o de igual edad que Luis."); 
 console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis); }