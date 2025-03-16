<?php
$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);
session_start();
$_SESSION['user'] = ['nombre'=>'Ponce'];

try {
    $consulta = 'SELECT genero FROM usuarios WHERE nombre=:nombre';
    $sql = $conn->prepare($consulta);
    $sql->bindParam(":nombre", $_SESSION["user"]["nombre"]);
    $sql->execute();
    $sheet = $sql->fetchAll(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo "Error" . $e->getMessage();
}

foreach ($sheet as $gender) {
    echo $gender['genero'];
}

?>
