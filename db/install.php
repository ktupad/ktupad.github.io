<?php
$mysql_host = "localhost";
$mysql_database = "web";
$mysql_user = "root";
$mysql_password = "usbw";
# MySQL with PDO_MYSQL
$db = new PDO("mysql:host=$mysql_host;dbname=$mysql_database", $mysql_user, $mysql_password);
$query = file_get_contents("web.sql");
$stmt = $db->prepare($query);
if ($stmt->execute()) echo "Success";
else  echo "Fail";
?>
