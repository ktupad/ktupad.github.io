<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$mysql_host = "localhost";
$mysql_database = "dev2";
$mysql_user = "root";
$mysql_password = "usbw";
# MySQL with PDO_MYSQL
$db = new PDO("mysql:host=$mysql_host;dbname=$mysql_database", $mysql_user, $mysql_password);

$query = file_get_contents("dev2.sql");

$stmt = $db->prepare($query);

if ($stmt->execute())
     echo "Success";
else
     echo "Fail";

?>
