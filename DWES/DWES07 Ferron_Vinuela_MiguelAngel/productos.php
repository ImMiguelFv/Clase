<?php
// Se incluyen los archivos necesarios
require_once('./include/DB.php');
require_once('./include/CestaCompra.php');
require_once('fcesta.php');

// Se importa xajax
require_once('./include/xajax/xajax_core/xajax.inc.php');

// Se inicia la sesión
session_start();

// Se verifica si el usuario está autenticado
if (!isset($_SESSION['usuario'])) 
  die("Error - debe <a href='login.php'>identificarse</a>.<br />");

// Se carga la cesta desde la sesión
$cesta = CestaCompra::carga_cesta();

// Se verifica si se ha pulsado el botón de vaciar la cesta
if (isset($_POST['vaciar'])) {
  unset($_SESSION['cesta']);
  $cesta = new CestaCompra();
}

// Se verifica si se ha pulsado el botón de añadir producto al carrito
if (isset($_POST['enviar'])) {
  $cesta->nuevo_articulo($_POST['cod']);
  $cesta->guarda_cesta();
}

// Función para crear el formulario de productos
function creaFormularioProductos() {
  $productos = DB::obtieneProductos();
  foreach ($productos as $p) {
    echo "<p><form id='" . $p->getcodigo() . "' action='productos.php' method='post'>";
    echo "<input type='hidden' name='cod' value='" . $p->getcodigo() . "'/>";
    // Al pulsar el botón, se llama a la función de fcesta.js
    echo "<input type='submit' name='enviar' value='Añadir' id='". "btn-".$p->getcodigo()."' onclick='anadirProducto(\"" . $p->getcodigo() ."\")'  />";
    echo $p->getnombrecorto() . ": ";
    echo $p->getPVP() . " euros.";
    echo "</form>";
    echo "</p>";
  }        
}

// Función para mostrar la cesta de compra
function muestraCestaCompra($cesta) {
  echo "<h3><img src='cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>";
  echo "<hr />";
  $cesta->muestra();
  echo "<form id='vaciar' action='productos.php' method='post'>";
  // Se le asigna un id al botón de vaciar cesta
  echo "<input type='submit' name='vaciar' value='Vaciar Cesta' id='btn-vaciarCesta' "; 
  if ($cesta->vacia()) echo "disabled='true'";
  // Al pulsar el botón, se llama a la función de fcesta.js
  echo " onclick='vaciarCesta()'></form>";
  echo "<form id='comprar' action='cesta.php' method='post'>";
  echo "<input type='submit' name='comprar' value='Comprar' ";
  if ($cesta->vacia()) echo "disabled='true'";
  echo "/></form>";  
}

// Se crea el objeto xajax 
$xajax = new xajax();

// Se registran las funciones definidas en fcesta.php
$xajax->register(XAJAX_FUNCTION,"vaciarCesta");
$xajax->register(XAJAX_FUNCTION,"anadirProducto");

// Se configura la ruta para el archivo JavaScript generado por xajax
$xajax->configure('javascript URI', './xajax');

// Se procesan las peticiones xajax
$xajax->processRequest();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- Desarrollo Web en Entorno Servidor -->
<!-- Tema 7 : Aplicaciones web dinámicas: PHP y Javascript -->
<!-- Tarea: Cesta de la compra con Xajax: productos.php -->
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>Ejemplo Tema 7: Listado de Productos</title>
  <link href="tienda.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="fcesta.js"></script>
  <?php $xajax->printJavascript(); // genero el código js con xajax ?>
</head>

<body class="pagproductos">

  <div id="contenedor">
    <div id="encabezado">
      <h1>Listado de productos</h1>
    </div>
    <div id="cesta">
      <?php muestraCestaCompra($cesta); ?>
    </div>
    <div id="productos">
      <?php creaFormularioProductos(); ?>
    </div>
    <br class="divisor" />
    <footer id="pie">
      <form action='logoff.php' method='post'>
        <input type='submit' name='desconectar' value='Desconectar usuario <?php echo $_SESSION['usuario']; ?>'/>
      </form>        
    </footer>
  </div>
</body>
</html>
