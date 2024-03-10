// Bucle for que recorre desde las 9:00 hasta las 21:00 en intervalos de 5 minutos
for (let hora = 9; hora <= 21; hora++) {
  for (let minuto = 0; minuto < 60; minuto += 5) {
    // Formateamos la hora y el minuto
    let horaFormateada = hora;
    let minutoFormateado = minuto;

    if (hora < 10) {
      horaFormateada = '0' + hora;
    }

    if (minuto < 10) {
      minutoFormateado = '0' + minuto;
    }

    // Generamos el mensaje con la hora y los minutos
    const mensaje = horaFormateada + ':' + minutoFormateado;

    // Mostramos el mensaje en el HTML
    document.write(mensaje + '<br>');
  }
}
