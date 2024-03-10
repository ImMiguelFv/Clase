for (let hora = 9; hora <= 21; hora++) {
  for (let minuto = 0; minuto < 60; minuto += 30) {
    let minutoFormateado = "00 en punto";
    if (minuto !== 0) {
      minutoFormateado = "30 y media";
    }
    document.write(hora + ':' + minutoFormateado + '<br>');
  }
}
