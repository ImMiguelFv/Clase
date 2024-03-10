	<?php 

	require_once('include/CestaCompra.php');
	require_once('productos.php');

	function nuevoProducto($codigo) {
		session_start();
		$cesta = CestaCompra::carga_cesta();
		$respuesta = new xajaxResponse();
	
		$cesta->nuevo_articulo($codigo);
		$cesta->guarda_cesta();
	
		$id_btn = "btn-" . $codigo;
		$respuesta->assign($id_btn, "value", "Añadir");
		$respuesta->assign($id_btn, "disabled", false);
	
		$html = htmlCesta($cesta);
	
		$respuesta->assign("cesta", "innerHTML", $html);
	
		return $respuesta;
	}
	
	function vaciarCesta() {
		session_start();
		$cesta = CestaCompra::carga_cesta();
		$respuesta = new xajaxResponse();
	
		unset($_SESSION['cesta']);
		$cesta = new CestaCompra();
	
		$html = htmlCesta($cesta);
		$respuesta->assign("cesta", "innerHTML", $html);
		$respuesta->assign("btn-vaciarCesta", "value", "Vaciar Cesta");
	
		return $respuesta;
	}

	function htmlCesta($cesta) {

	$html = "<h3><img src='cesta.png' alt='Cesta' width='24' height='21'> Cesta</h3>" . "<hr />";

	$html .= $cesta->html();
	$html .= "<form id='vaciar' action='productos.php' method='post'>";
	$html .= "<input type='submit' name='vaciar' value='Vaciar Cesta' id='btn-vaciarCesta' "; 
	if ($cesta->vacia()) {
	$html .= "disabled='true'";
	}

	$html .= " onclick='vaciarCesta()'></form>";
	$html .= "<form id='comprar' action='cesta.php' method='post'>";
	$html .= "<input type='submit' name='comprar' value='Comprar' ";
	if ($cesta->vacia()) {
	$html .= "disabled='true'";
	}
	$html .= "/></form>";  

	return $html;
	}


	?>

