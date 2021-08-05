<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_parkir',
  'tb3' => 'master_param',
  'tb4' => 'apps_blog',
'mn' => 'parkir',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT kode as nama,count(id) as isi FROM (SELECT * FROM $d[tb] ORDER BY kode DESC ) AS sub  GROUP BY kode ORDER BY kode DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function parkirGet() {
  $d = $this->conf;
  $sql = "SELECT isi From $d[tb3] where nama = 'parkir'";
  $antri = $this->getData($sql);
  echo json_encode($antri);
}

public function parkirPost() {
  $d = $this->conf;
  $sekarang = date('Y-m-d');
  $sql = "SELECT isi From $d[tb3] where nama = 'parkir'";
  $antri = $this->getData($sql);
  if ($antri) {
  $isi = $antri[0]['isi'];
  $kode = 'A-'.$isi;
    $sql = "UPDATE  $d[tb3] set isi = isi+1 where nama = 'parkir'";
    $out = $this->getData($sql);
    $sql = "INSERT INTO $d[tb] SET kode = '$kode', masuk = '$sekarang', status = 1";
    $out = $this->getData($sql);
  }
  echo json_encode($antri);
}

public function parkirDetailGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb] where status=1";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data' =>$data);
echo json_encode($out);
}

public function parkirUpdate() {
$d = $this->conf;
$sql = "UPDATE $d[tb] SET status=2 where id = '$d[id]'";
$out = $this->getData($sql);
echo json_encode($out);
}


}  //end class mod
?>
