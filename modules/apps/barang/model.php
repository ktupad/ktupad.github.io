<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_barang',
  'tb4' => 'apps_blog',
'mn' => 'barang',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT nama,banyak as isi FROM (SELECT * FROM $d[tb] ORDER BY banyak DESC ) AS sub  GROUP BY kode ORDER BY banyak DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function barangGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb] where induk = '$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function barangDetailGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb] where id = '$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}


}  //end class mod
?>
