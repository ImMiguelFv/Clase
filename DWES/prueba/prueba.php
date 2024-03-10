<?php 
require_once("xajax_core/xajax.inc.php");

function saludo() {
    $respuesta = new xajaxResponse();
    $saludo = "hola buenas";
    $respuesta->assign("respuesta", "innerHTML", $saludo);

    return $respuesta;
}

$xajax = new xajax();
$xajax->register(XAJAX_FUNCTION, "saludo");
$xajax->configure('javascript URI','./');

$xajax->processRequest();
?>

<html>
<head>
<?php
  $xajax->printJavascript(); ?>
</head>
<body>
<p id="respuesta"></p>
<button onclick="xajax_saludo()">Pedir datos servidor</button>
</body>
</html>

