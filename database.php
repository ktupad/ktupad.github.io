<?php
include('system/ktupad.php');
class koneksi{

public $database=array(
'h'=>'localhost',
'u'=>'root',
'p'=>'usbw',
'n'=>'neo'
);

function connect(){
  $db=$this->database ;
try {
  $conn = new PDO("mysql:host=$db[h];dbname=$db[n]", "$db[u]", "$db[p]");
  // $conn = new PDO("mysql:host=localhost;dbname=neo", "root", "usbw");
// $conn = new PDO("firebird:host=localhost;dbname=/var/lib/firebird/2.5/data/employee.fdb;charset=UTF8", "sysdba", "masterkey");
// $conn = new PDO("mssql:host='localhost';dbname='neo', 'root', 'usbw'");
// $conn = new PDO("sybase:host=$host;dbname=$dbname, $user, $pass");
// $conn = new PDO("sqlite:my/database/path/neo.db");
// $conn = new PDO("odbc:neo");
// $conn = new PDO("dblib:host=localhost;dbname=neo", "root","usbw");
}
catch(PDOException $e) {  echo $e->getMessage(); }
return $conn;
}

}

$app = new mod();
$app->init();
?>
