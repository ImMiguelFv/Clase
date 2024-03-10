/* # Ejercicio 7: Trabajando con fechas
Crea un objeto que disponga de métodos para operar con fechas, concretamente
difFechas: calcula los días que hay de diferencia entre 2 fechas
maxFecha: devuelve la fecha más reciente de 2 fechas dadas
testFecha: comprueba si el formato de una fecha es correcto
ayerFecha: devuelve el día anterior a una fecha dada
mañanaFecha: devuelve el día posterior a una fecha dada */
class OperadorFechas {
    // Método para calcular la diferencia en días entre dos fechas
    static difFechas(fecha1, fecha2) {
        const milisegundosPorDia = 24 * 60 * 60 * 1000; // Número de milisegundos en un día
        const diferencia = Math.abs(fecha1 - fecha2); // Valor absoluto para manejar fechas en el pasado y futuro
        return Math.floor(diferencia / milisegundosPorDia);
    }
    // Método para obtener la fecha más reciente de dos fechas dadas
    static maxFecha(fecha1, fecha2) {
        return (fecha1 > fecha2) ? fecha1 : fecha2;
    }
    // Método para comprobar si el formato de una fecha es correcto
    static testFecha(fecha) {
        return !isNaN(new Date(fecha).getTime());
    }
    // Método para obtener el día anterior a una fecha dada
    static ayerFecha(fecha) {
        const ayer = new Date(fecha);
        ayer.setDate(ayer.getDate() - 1);
        return ayer;
    }
    // Método para obtener el día siguiente a una fecha dada
    static mananaFecha(fecha) {
        const manana = new Date(fecha);
        manana.setDate(manana.getDate() + 1);
        return manana;
    }
}
// Ejemplo de uso
const fecha1 = new Date('2023-11-15');
const fecha2 = new Date('2023-11-20');
const fecha3 = new Date('20-2002-5');
console.log(`Diferencia en días: ${OperadorFechas.difFechas(fecha1, fecha2)}`);
console.log(`Fecha más reciente: ${OperadorFechas.maxFecha(fecha1, fecha2)}`);
console.log(`¿Formato de fecha correcto? ${OperadorFechas.testFecha(fecha1)}`);
console.log(`¿Formato de fecha correcto? ${OperadorFechas.testFecha(fecha3)}`);
console.log(`Ayer a la fecha: ${OperadorFechas.ayerFecha(fecha1)}`);
console.log(`Mañana a la fecha: ${OperadorFechas.mananaFecha(fecha1)}`);
