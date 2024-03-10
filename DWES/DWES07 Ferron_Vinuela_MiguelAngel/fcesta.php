<?php

// Funciones XAJAX.
// Las funciones anadirProducto y vaciarCesta editan la cesta
// Luego generan un nuevo HTML para la cesta (utilizando htmlCesta)
// Por último, insertan el HTML en el div de la cesta y vuelven a activar el botón que desactivamos en fcesta.js
// Se incluyen los archivos necesarios
require_once('./include/CestaCompra.php');
require_once('productos.php');

// Función para añadir un producto a la cesta
function anadirProducto($codigo_producto) {
  // Se obtiene la cesta de la sesión
  $cesta_actual = CestaCompra::carga_cesta();

  // Se crea un objeto xajaxResponse para manipular el HTML desde aquí
  $respuesta_anadir = new xajaxResponse();

  // Se actualiza la cesta con el nuevo artículo
  $cesta_actual->nuevo_articulo($codigo_producto);
  $cesta_actual->guarda_cesta();

  // Se reactiva el botón que se desactivó en el archivo fcesta.js
  $id_boton = "btn-" . $codigo_producto;
  $respuesta_anadir->assign($id_boton, "value", "Añadir");
  $respuesta_anadir->assign($id_boton, "disabled", false);

  // Se genera el nuevo HTML de la cesta (ya sea vacía o con el nuevo producto)
  $html_nueva_cesta = generarHtmlCesta($cesta_actual);

  // Se actualiza el contenido del div con id="cesta" para mostrar el nuevo HTML de la cesta
  $respuesta_anadir->assign("cesta", "innerHTML", $html_nueva_cesta);

  return $respuesta_anadir;
}

// Función para vaciar la cesta
function vaciarCesta() {
  // Se obtiene la cesta, se vacía, se genera un nuevo HTML y se actualiza la cesta en la interfaz
  $cesta_vaciar = CestaCompra::carga_cesta();

  $respuesta_vaciar = new xajaxResponse();

  // Se elimina la cesta actual de la sesión
  unset($_SESSION['cesta']);

  // Se crea una nueva cesta vacía
  $cesta_vaciar = new CestaCompra();

  // Se genera el nuevo HTML de la cesta vacía
  $html_nueva_cesta = generarHtmlCesta($cesta_vaciar);

  // Se actualiza el contenido del div con id="cesta" para mostrar el nuevo HTML de la cesta
  $respuesta_vaciar->assign("cesta", "innerHTML", $html_nueva_cesta);

  // Se reactiva el botón de vaciar cesta
  $respuesta_vaciar->assign("btn-vaciarCesta", "value", "Vaciar Cesta");

  return $respuesta_vaciar;
}

// Función para generar el HTML de la cesta
function generarHtmlCesta($cesta) {
  // Se generan los elementos HTML necesarios para mostrar la cesta

  // Encabezado de la cesta
  $new = "<h3><img src='cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>" . "<hr />";

  // Contenido de la cesta
  $new .= $cesta->html();

  // Formulario para vaciar la cesta
  $new .= "<form id='vaciar' action='productos.php' method='post'>";
  $new .= "<input type='submit' name='vaciar' value='Vaciar Cesta' id='btn-vaciarCesta' ";

  // Se deshabilita el botón si la cesta está vacía
  if ($cesta->vacia()) {
    $new .= "disabled='true'";
  }

  $new .= " onclick='vaciarCesta()'></form>";

  // Formulario para comprar la cesta
  $new .= "<form id='comprar' action='cesta.php' method='post'>";
  $new .= "<input type='submit' name='comprar' value='Comprar' ";

  // Se deshabilita el botón si la cesta está vacía
  if ($cesta->vacia()) {
    $new .= "disabled='true'";
  }

  $new .= "/></form>";

  return $new;
}

?>