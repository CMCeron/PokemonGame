<?php
session_start();

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);

$userID = $_POST['userID'];
$positionX = $_POST['PositionX'];
$positionY = $_POST['PositionY'];
$pokemonActive = $_POST['activePokemon'];

try {
    $consulta = 'INSERT INTO partida (userID, positionX, positionY, pokemonActive) VALUES (:userID, :positionX, :positionY, :pokemonActive)';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":userID", $userID);
    $sql->bindParam(":positionX", $positionX);
    $sql->bindParam(":positionY", $positionY);
    $sql->bindParam(":pokemonActive", $pokemonActive);
    $sql->execute();

} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

if($sql->rowCount()>0){
    echo 'Se ha guardado la partida correctamente';
}else{
    echo 'No se ha podido guardar la partida';
}
