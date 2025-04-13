<?php
$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();

header('Content-Type: application/json');

$response = [
    'success' => false,
    'message' => 'Validation failed.'
];

if ($_POST) {
    
    $sexo = $_POST['sexo'];
    $pokemon = $_POST['pokemon'];

    if (empty($sexo) || empty($pokemon)) {
        $response['message'] = 'Por favor, completa todos los campos.';
    } else {
        if($_SESSION['user']['username'] == 'Ponce'){
            $sexo = 'Ponce';
        }
        
        // Añadir esos campos a la sesión
        $_SESSION["user"] += [
            'sexo' => $sexo,
            'pokemon' => $pokemon
        ];

        // Si todo está bien, establecer el éxito y un mensaje de éxito
        $response['success'] = true;
        $response['message'] = 'Formulario enviado correctamente. Sexo: ' . $sexo . ', Pokémon: ' . $pokemon;

        try {
            $consulta = 'INSERT INTO usuarios (nombre, genero, email, contrasena) VALUES (:nombre, :genero, :email, :contrasena)';

            $sql = $conn->prepare($consulta);
            $sql->bindParam(":nombre", $_SESSION["user"]["username"]);
            $sql->bindParam(":genero", $sexo);
            $sql->bindParam(":email", $_SESSION["user"]["email"]);
            $sql->bindParam(":contrasena", $_SESSION["user"]["password"]);
            $sql->execute();

        } catch (Exception $e) {
            $response['message'] = 'Ha habido un error en la consulta a la base de datos';
        }
    }
} else {
    $response['message'] = 'Error: Datos no enviados correctamente.';
}

echo json_encode($response);
