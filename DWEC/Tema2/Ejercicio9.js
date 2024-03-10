var respuesta = prompt("Por favor, introduce tu edad:");
var edad = parseInt(respuesta);

  switch (true) {
    case ( edad >= 0 &&edad <= 12):
      alert("Eres un niño.");
      break;
    case (edad>13 && edad <= 26):
      alert("Eres joven.");
      break;
    case (edad > 26 && edad <= 60):
      alert("Eres un adulto.");
      break;
      case (edad > 60):
      alert("Eres un juvilado.");
      break;
    default:
      alert("Edad no válida. Introduce un número mayor o igual a 0.");
      break;
  }

