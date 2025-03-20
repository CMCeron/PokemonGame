<?php
$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();
$_SESSION['user'] = ['nombre'=>'Clemen'];

try {
    $consulta = 'SELECT pokemonActive FROM partida WHERE nombre=:nombre ORDER BY IDPartida LIMIT 1';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":nombre", $_SESSION["user"]["nombre"]);
    $sql->execute();
    $pokemon = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

foreach ($pokemon as $poke) {
    echo $poke['genero'];
}

?>
