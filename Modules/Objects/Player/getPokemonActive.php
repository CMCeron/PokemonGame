<?php
$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();

try {
    $consulta = 'SELECT partida.pokemonActive 
                FROM partida 
                JOIN usuarios ON partida.userID = usuarios.IDusuario 
                WHERE usuarios.nombre = :nombre 
                ORDER BY partida.IDPartida 
                LIMIT 1';
                
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":nombre", $_SESSION["user"]["username"]);
    $sql->execute();
    $pokemon = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

    echo $pokemon[0]['pokemonActive'];

?>
