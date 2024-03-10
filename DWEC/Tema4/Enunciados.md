## UD4 Funciones ACTIVIDAD 1

## Ejercicio 1: Conversión de grados
Escribe una función que devuelva como grados Celsius la cantidad en grados Fahrenheit que
recibe como parámetro.
## Ejercicio 2: Partida de dados
Escribe una función que reciba como parámetro un número entero (número de rondas de una
partida) por defecto establecido a 5.
Simular una partida de dados con lanzamientos aleatorios. Los jugadores lanzan dos dados a
la vez en cada ronda. La suma de los dos lados se anota y se pasa a la siguiente ronda Al final
de todas las rondas el programa debe proporcionar un ganador y mostrar las puntuaciones
acumuladas de ambos
El programa debe funcionar correctamente tras atender a estas llamadas:
• jugar();
• jugar(3);
• jugar(10);
## Ejercicio 3: Adivina la palabra
Escribe una función que, a partir de una palabra pre-establecida, reciba como parámetros un
número variable de letras y muestre en pantalla solo las coincidencias entre la palabra y las
letras proporcionadas.
Por ejemplo, si la palabra predeterminada es sargento y se ha invocado a la función como
adivina(“a”, “e”, “i”, “o”, “u”, “d”, “n”) la salida del programa debe ser “- a - - e n - o”.
## Ejercicio 4: Cadenas invertidas
crea una función vinculada a una variable llamada invertida que reciba una cadena de texto y y
la devuelva invertida, es decir, transformada de derecha a izquierda.
Por ejemplo, si la cadena recibida es “almadraba” debe de volver “abardamla”.
## Ejercicio 5: Sello temporal
Crea una función autoejecutable que informe por consola de la fecha y la hora a la que se inició
la ejecución de la función.
Nota: investiga el uso del objeto “Date” para facilitar el formato de los datos de salida.
## Ejercicio 6: mayor cadena
Escribe la función flecha que reciba dos cadenas de caracteres e informe por consola de
aquella que contiene más vocales.
## Ejercicio 7: ¿Es palíndroma?
Escribe una función recursiva que indique si la palabra que le pasa es como parámetro es
palíndroma o no.
Nota: palíndroma es una palabra o frase que se lee igual en un sentido que en otro, por
ejemplo: “aviva”, “sagas”, “amó la paloma”.
## Ejercicio 8: Sin tildes
Escribe una función que haciendo uso de filter genere un array a partir de los elementos de otro
array que contiene cadenas de caracteres, sin los elementos que contengan tildes.
## Ejercicio 9:
Crea un programa que reciba un array de cadena de caracteres y que por medio del método
filter devuelva aquellos caracteres que no forman parte del alfabeto español. Prueba la función
incluyendo palabras con caracteres como ^, $, o &.
## Ejercicio 10: Bingo
Crea un programa que simule el funcionamiento de un bingo:
• El número de cartones que participan será siempre de 5.
• Cada cartón tendrá 8 filas y 4 columnas con 20 números del 1 al 90 distribuidos de forma
aleatoria (máximo de 5 por fila).
• El programa irá sacando bolas y los cartones se irán comprobando en tiempo real.
• El programa termina cuando un cartón alcanza el bingo.
• En ese momento se debe mostrar en pantalla cuál de los cartones ha ganado y los
números que han salido para comprobar que el bingo es correcto.
Plantea el problema, analízalo con detenimiento y diseña previamente todas las funciones que
vas a necesitar para resolverlo. Posteriormente implementa la solución
## FIN