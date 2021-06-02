<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$mysql_host = "den1.mysql2.gear.host";
$mysql_database = "ktupadidlite";
$mysql_user = "ktupadidlite";
$mysql_password = "Lz2i5_?N8EqR";
# MySQL with PDO_MYSQL
$db = new PDO("mysql:host=$mysql_host;dbname=$mysql_database", $mysql_user, $mysql_password);

$query = file_get_contents("ktupadidpos.sql");

$stmt = $db->prepare($query);

if ($stmt->execute())
     echo "Success";
else
     echo "Fail";

?>
