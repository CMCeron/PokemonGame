<?php

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();

if ($_POST) {

    if (!empty($_POST['email']) && !empty($_POST['password'])) {

        $user = ['email' => $_POST['email'], 'password' => $_POST['password']];

        try {
            $consulta = 'SELECT nombre FROM usuarios WHERE email=:email AND contrasena=:contra';
            $sql = $conn->prepare($consulta);
            $sql->bindParam(":email", $user["email"]);
            $sql->bindParam(":contra", $user["password"]);
            $sql->execute();
            $result = $sql->fetchAll(PDO::FETCH_ASSOC);


            if (!empty($result[0]['nombre'])) {
                $_SESSION['user'] = ['username' => $result[0]['nombre']];

                echo 'success';
            } else {
                echo "No se encuentra el usuario.";
            }

        } catch (Exception $e) {
            echo "Error" . $e->getMessage();
        }
    }else{
        echo 'Rellena los campos';
    }
}
