<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_blog',
'mn' => 'barang',
);

public function blogHomeGet() {
  $d = $this->conf;
  $sql = "SELECT * FROM $d[tb] where posisi = 'slide' and status=1";
  $slide = $this->getData($sql);
  $sql = "SELECT * FROM $d[tb] where id = '$d[id]' and status=1";
  $home = $this->getData($sql);
  $out = array('sql' =>$sql,'slide' =>$slide,'home' =>$home);
  echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT judul as nama ,view as isi FROM (SELECT * FROM $d[tb] ORDER BY view DESC ) AS sub  GROUP BY judul ORDER BY view DESC limit 10";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function blogGet() {
$d = $this->conf;
// $sql = "SELECT * FROM $d[tb] where posisi = '$d[id]'";
$sql = "SELECT *, SUBSTRING_INDEX(isi,'[more]',1) as isi FROM $d[tb] where posisi = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function blogDetailGet() {
$d = $this->conf;

$sql = "UPDATE $d[tb] SET view=view+1 WHERE id = '$d[id]'";
$data = $this->getData($sql);

$sql = "SELECT * FROM $d[tb] where id = '$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}


}  //end class mod
?>
