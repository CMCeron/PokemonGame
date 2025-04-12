<?php
session_start();

$url = 'C:\xampp\htdocs\PokemonGame\Modules\ConnectBD\conexion.php';
include($url);

echo $_SESSION['user']['username'];

?>
