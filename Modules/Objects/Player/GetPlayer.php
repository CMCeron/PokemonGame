<?php
$url = 'http://localhost/PokemonGame/Modules/ConnectBD/conexion.php';
include($url);
session_start();

$_SESSION['user'] = ['nombre' => 'Clemen'];

echo $_SESSION['user']['genero'];

try {
    $consulta = 'SELECT genero FROM usuarios WHERE nombre=:nombre';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":gender", $_SESSION["user"]["nombre"]);
    $sql->execute();
    $sheet = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

foreach ($sheet as $gender) {
    echo $gender['genero'];
}

?>
