const arrayBooleanos = [false, true, true, false, true, false, false, true, false, true];

let x = 0;  // Inicializamos x con 0
document.write ("Los valores true son: ")
while (x < arrayBooleanos.length) {
    if (arrayBooleanos[x] == true) {
        document.write(x+"  ");
    }
    x++;
}




