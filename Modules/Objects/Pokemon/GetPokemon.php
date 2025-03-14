<?php

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();

$id = $_POST['id'];

try {
    $consulta = 'SELECT nombre FROM pokemons WHERE IDpokemon=:id';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":id", $id);
    $sql->execute();
    $pokemon = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

foreach ($pokemon as $p) {
    echo $p['nombre'];
}

?>

