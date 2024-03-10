<?php
require_once('include/DB.php');

// Inicializar la variable de error para evitar mensajes no definidos
$error = '';

// Comprobar si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['enviar'])) {

    // Validar datos del formulario
    if (empty($_POST['usuario']) || empty($_POST['password'])) {
        $error = "Debes introducir un nombre de usuario y una contraseña";
    } else {
        // Filtrar y obtener los datos del formulario
        $usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_STRING);
        $password = $_POST['password']; // La contraseña debería ser validada y almacenada de forma segura en un entorno de producción

        // Comprobar las credenciales con la base de datos
        if (DB::verificaCliente($usuario, $password)) {
            session_start();
            $_SESSION['usuario'] = $usuario;
            header("Location: productos.php");
            exit; // Importante salir después de redirigir para evitar ejecución adicional no deseada
        } else {
            // Credenciales no válidas
            $error = "Usuario o contraseña no válidos";
        }
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="es">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Ejemplo Tema 5: Login Tienda Web</title>
    <link href="tienda.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div id='login'>
        <form action='login.php' method='post'>
            <fieldset>
                <legend>Login</legend>
                <?php if (!empty($error)) { ?>
                    <div><span class='error'><?php echo $error; ?></span></div>
                <?php } ?>
                <div class='campo'>
                    <label for='usuario'>Usuario:</label><br/>
                    <input type='text' name='usuario' id='usuario' maxlength="50" required /><br/>
                </div>
                <div class='campo'>
                    <label for='password'>Contraseña:</label><br/>
                    <input type='password' name='password' id='password' maxlength="50" required /><br/>
                </div>
                <div class='campo'>
                    <input type='submit' name='enviar' value='Enviar' />
                </div>
            </fieldset>
        </form>
    </div>
</body>
</html>
