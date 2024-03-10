/* 
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
*/
// Función para simular una partida de dado

function jugar(rondas=5){
        let resultados = [];
    if (!(rondas == null) && rondas >0){

        for(let i = 0; i < rondas; i++){
            let Dado1p1 = Math.floor(Math.random() *6+1);
            let Dado2p1 = Math.floor(Math.random() *6+1);
            let Dado1p2 = Math.floor(Math.random() *6+1);
            let Dado2p2 = Math.floor(Math.random() *6+1);
            // Sumamos los valores de los dados del primer jugador
            let resultadoJugador1 =  Dado1p1 + Dado2p1;
            let resultadoJugador2 = Dado2p2 + Dado1p2;
            //Mostramos los resultados por jugada
            document.write ("Jugada: "+(i+1) +"<br>")
            document.write ("Dado 1 Jugador 1: " + Dado1p1+"<br>" )
            document.write ("Dado 2 Jugador 1: " + Dado2p1+"<br>" )
            document.write ("Dado 2 Jugador 1: " + Dado1p2+"<br>" )
            document.write ("Dado 2 Jugador 2: " + Dado2p2+"<br>" )
            document.write("Suma del P1: " + resultadoJugador1 + " ")
            document.write("Suma del P2: " +resultadoJugador2 +"<br>")
            resultados.push({jugador1: resultadoJugador1, jugador2: resultadoJugador2});
        }
        //Inicialiamos los valores de puntos y ganador
        let ganador = "Empate";
        let puntosGanador = 0;
        let puntosJugador1 = 0;
        let puntosJugador2 = 0;
    
        for(let i = 0; i < resultados.length; i++){
            puntosJugador1 += resultados[i].jugador1;
            puntosJugador2 += resultados[i].jugador2;
    
            if(resultados[i].jugador1 > resultados[i].jugador2){
                puntosGanador += resultados[i].jugador1;
            }else if(resultados[i].jugador1 < resultados[i].jugador2){
                puntosGanador += resultados[i].jugador2;
            }
        }
        
        if(puntosJugador1 > puntosJugador2){
            ganador = "Jugador 1";
        }else if(puntosJugador1 < puntosJugador2){
            ganador = "Jugador 2";
        }
        
        document.write("Ganador: " + ganador + " Puntos Jugador 1: " + puntosJugador1 + " Puntos Jugador 2: " + puntosJugador2 +"<br>");
    } else if (rondas ==" "){
        for(let i = 0; i < 5; i++){
            let Dado1p1 = Math.floor(Math.random() *6+1);
            let Dado2p1 = Math.floor(Math.random() *6+1);
            let Dado1p2 = Math.floor(Math.random() *6+1);
            let Dado2p2 = Math.floor(Math.random() *6+1);
            // Sumamos los valores de los dados del primer jugador
            let resultadoJugador1 =  Dado1p1 + Dado2p1;
            let resultadoJugador2 = Dado2p2 + Dado1p2;
            //Mostramos los resultados
            
            document.write("p1: " + resultadoJugador1)
            document.write("p2: " +resultadoJugador2 +"br")
            resultados.push({jugador1: resultadoJugador1, jugador2: resultadoJugador2});
        }
    
        let ganador = "Empate";
        let puntosGanador = 0;
        let puntosJugador1 = 0;
        let puntosJugador2 = 0;
    
        for(let i = 0; i < resultados.length; i++){
            puntosJugador1 += resultados[i].jugador1;
            puntosJugador2 += resultados[i].jugador2;
    
            if(resultados[i].jugador1 > resultados[i].jugador2){
                puntosGanador += resultados[i].jugador1;
            }else if(resultados[i].jugador1 < resultados[i].jugador2){
                puntosGanador += resultados[i].jugador2;
            }
        }
        
        if(puntosJugador1 > puntosJugador2){
            ganador = "Jugador 1";
        }else if(puntosJugador1 < puntosJugador2){
            ganador = "Jugador 2";
        }
        
        document.write("Ganador: " + ganador + " Puntos Ganador: " + puntosGanador + " Puntos Jugador 1: " + puntosJugador1 + " Puntos Jugador 2: " + puntosJugador2 +"<br>");
    }
    }
    

    // Ejemplo de uso
    jugar();
    
                