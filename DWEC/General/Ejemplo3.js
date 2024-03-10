let edadAna, edadLuis; // Usamos parseInt para convertir a entero
 edadAna  = parseInt(prompt("Introduce la edad de Ana" , "" )); 
 edadLuis = parseInt(prompt("Introduce la edad de Luis" , "" ));
 if (edadAna > edadLuis) {  console.log("Ana es mayor que Luis.");
 } 
 else {     if (edadAna < edadLuis) console.log ("Ana es menor que Luis." ); 
 else console.log("Ana tiene la misma edad que Luis." ); 
} 
console.log( "Ana tiene " + edadAna + " años y Luis " + edadLuis);