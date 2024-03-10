<?php

// Funciones para obtener datos geográficos y datos históricos

function get_country_geodata($country_code) {
    // URL de la API REST Countries
    $url = "https://restcountries.com/v3/alpha/{$country_code}/geo";

    // Realizamos la solicitud GET
    $response = file_get_contents($url);

    // Si la solicitud se realiza correctamente
    if ($response) {
        // Devolvemos los datos geográficos
        return json_decode($response, true);
    } else {
        // Devolvemos null
        return null;
    }
}

function get_country_history($country_code) {
    // URL de la API REST Countries
    $url = "https://restcountries.com/v3/alpha/{$country_code}/history";

    // Realizamos la solicitud GET
    $response = file_get_contents($url);

    // Si la solicitud se realiza correctamente
    if ($response) {
        // Devolvemos los datos históricos
        return json_decode($response, true);
    } else {
        // Devolvemos null
        return null;
    }
}

// Ejemplo de uso

// Obtenemos los datos geográficos del país España
$country_code = "es";
$country_geodata = get_country_geodata($country_code);

// Imprimimos los datos geográficos
if ($country_geodata) {
    echo "Coordenadas de la capital: {$country_geodata['capitalCoordinates']}";
    echo "Coordenadas de las fronteras: {$country_geodata['borders']}";
    echo "Extensión territorial: {$country_geodata['area']}";
    echo "Área de tierra: {$country_geodata['landArea']}";
    echo "Área de agua: {$country_geodata['waterArea']}";
} else {
    echo "No se pudo obtener los datos geográficos.";
}

// Obtenemos los datos históricos del país España
$country_history = get_country_history($country_code);

// Imprimimos los datos históricos
if ($country_history) {
    echo "Año de independencia: {$country_history['independenceDate']}";
    echo "Forma de gobierno: {$country_history['governmentType']}";
    echo "Jefe de Estado: {$country_history['headOfState']}";
    echo "Jefe de Gobierno: {$country_history['headOfGovernment']}";
} else {
    echo "No se pudo obtener los datos históricos.";
}
?>