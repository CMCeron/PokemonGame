<?php

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();


if ($_POST) {

    $response = [
        'success' => false,
        'message' => 'Ha habido un error.'
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

            if ($sql->rowCount() < 2) {
                // Comprobar no repetir el correo
                $consulta = 'SELECT * FROM usuarios WHERE correo=:emailReg';
                $sql = $conn->prepare($consulta);
                $sql->bindParam(":emailReg", $_POST['emailReg']);
                $sql->execute();

                echo 'si';
                if ($sql->rowCount() < 2) {
                    $user = [
                        'email' => $_POST['emailReg'],
                        'password' => $_POST['passwordReg'],
                        'username' => $_POST['username']
                    ];

                    $_SESSION['user'] = [...$user];

                    $response = [
                        'success' => true,
                        'message' => 'Registro exitoso.'
                    ];
                } else {
                    $response['message'] = 'Email repetido';
                }
            } else {
                $response = [
                    'success' => false,
                    'message' => 'Nombre de usario repetido.'
                ];
            }
        } catch (Exception $e) {
        }
    } else {
        $response = [
            'success' => false,
            'message' => 'Rellena todos los campos.'
        ];
    }
    echo json_encode($response);
}
