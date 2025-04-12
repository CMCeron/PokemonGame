<?php

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();


if ($_POST) {

    $response = [
        'success' => false,
        'message' => "Ha habido un error"
    ];

    if (
        !empty($_POST['username'])
        && !empty($_POST['emailReg'])
        && !empty($_POST['passwordReg'])
    ) {
        try {
            // Comprobar no repetir el nombre de usuario
            $consulta = 'SELECT * FROM usuarios WHERE nombre=:username';
            $sql = $conn->prepare($consulta);
            $sql->bindParam(":username", $_POST['username']);
            $sql->execute();

            if ($sql->rowCount() == 0) {
                // Comprobar no repetir el correo
                $consulta = 'SELECT * FROM usuarios WHERE email=:emailReg';
                $correo = $conn->prepare($consulta);
                $correo->bindParam(":emailReg", $_POST['emailReg']);
                $correo->execute();

                if ($correo->rowCount() < 1) {
                    $user = [
                        'email' => $_POST['emailReg'],
                        'password' => $_POST['passwordReg'],
                        'username' => $_POST['username']
                    ];

                    $_SESSION['user'] = [...$user];

                    $response = [
                        'success' => true,
                        'message' => 'Registro exitoso. Bienvenido ' . $user['username']
                    ];
                } else {
                    $response = [
                        'success' => false,
                        'message' => "Ya existe ese correo en nuestra BBDD."
                    ];
                }
            } else {
                $response = [
                    'success' => false,
                    'message' => 'Ya existe ese nombre de usuario en nuestra BBDD.'
                ];
            }
        } catch (Exception $e) {
            $response = [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    } 
    echo json_encode($response);
}
