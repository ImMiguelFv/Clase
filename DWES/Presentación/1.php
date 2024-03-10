
<?php
$apiKey = 'TU_CLAVE_API';  // Reemplaza con tu clave de API de ExchangeRate-API
$baseCurrency = 'USD';  // Moneda base
$targetCurrency = 'EUR';  // Moneda objetivo
$amount = 100;  // Monto a convertir

// Construir la URL para la conversión de moneda
$url = "https://open.er-api.com/v6/convert?apikey={$apiKey}&from={$baseCurrency}&to={$targetCurrency}&amount={$amount}";

// Realizar la solicitud a la API
$response = file_get_contents($url);

// Decodificar la respuesta JSON
$data = json_decode($response, true);

// Mostrar el resultado de la conversión
if ($data && isset($data['result'])) {
    echo "{$amount} {$baseCurrency} equivale a {$data['result']} {$targetCurrency}\n";
} else {
    echo "Error al realizar la conversión.\n";
}
?>