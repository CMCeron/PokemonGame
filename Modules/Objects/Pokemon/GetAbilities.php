<?php
    $url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
    include($url);
    session_start();

    $id = $_POST['id'];

    try {
        $consulta = 'SELECT nombre FROM ataques WHERE tipo=normal LIMIT 3';
        $sql = $conn->prepare($consulta);
        $sql->execute();
        $ataque = $sql->fetchAll(PDO::FETCH_ASSOC);
    } catch (Exception $e) {
        echo "Error" . $e->getMessage();
    }

    foreach ($pokemon as $p) {
        echo $p['nombre'].' ';
    }
    
?>