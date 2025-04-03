<?php
session_start();
$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);

try {
    $consulta = 'SELECT IDusuario FROM usuarios WHERE nombre=:nombre';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":nombre", $_SESSION["user"]["nombre"]);
    $sql->execute();
    $sheet = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

echo $sheet[0]['IDusuario'];
