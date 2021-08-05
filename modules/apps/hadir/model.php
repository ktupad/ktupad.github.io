<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_hadir',
  'tb3' => 'master_param',
  'tb4' => 'apps_blog',
'mn' => 'hadir',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT tanggal as nama,count(tanggal) as isi FROM (SELECT * FROM $d[tb] ORDER BY tanggal DESC ) AS sub  GROUP BY tanggal ORDER BY tanggal DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function hadirGet() {
  $d = $this->conf;
  $sql = "SELECT isi From $d[tb3] where nama = 'hadir'";
  $antri = $this->getData($sql);
  echo json_encode($antri);
}

public function hadirPost() {
  $d = $this->conf;
  $sekarang = date('Y-m-d');
  $sql = "INSERT INTO $d[tb] SET keterangan = '$d[img]', tanggal = '$sekarang', status = 1";
  $out = $this->getData($sql);
  echo json_encode($antri);
}

public function hadirDetailGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb] where status=1";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data' =>$data);
echo json_encode($out);
}



}  //end class mod
?>
