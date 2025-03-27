<?php
session_start();

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);

$userID = $_POST['userID'];

try {
    $consulta = 'SELECT * FROM partida WHERE userID=:userID ORDER BY IDPartida desc LIMIT 1';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":userID", $userID);
    $sql->execute();
    $partida = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

if (empty($partida)) {
    echo 'error: No se encontraron partidas para el usuario especificado.';

} else {
    $data = [
        'positionX' => $partida[0]['positionX'],
        'positionY' => $partida[0]['positionY'],
        'activePokemon' => $partida[0]['pokemonActive']
    ];

    header('Content-Type: application/json');
    echo json_encode($data);
}

?>
