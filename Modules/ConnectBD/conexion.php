<?php

$host = 'localhost';
$dbname = 'pokemondawbd';
$username = 'root';
$password = '';

try {
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/* echo "Connected to $dbname at $host successfully."; */
} catch (PDOException $pe) {
die("Could not connect to the database $dbname :" . $pe->getMessage());
}

?>