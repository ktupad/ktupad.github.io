<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_kasir',
  'tb1' => 'apps_tas',
  'tb2' => 'apps_barang',
  'tb3' => 'master_param',
  'tb4' => 'apps_blog',
'mn' => 'kasir',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT nama,banyak as isi FROM (SELECT * FROM apps_tas ORDER BY banyak DESC ) AS sub  GROUP BY kode ORDER BY banyak DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function barangGet() {
$d = $this->conf;
// $sql = "SELECT * FROM $d[tb2] ";
$sql = "SELECT * FROM $d[tb2] where induk = '$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function barangDetailGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb2] where id = '$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function barangOrder() {
$d = $this->conf;
$conn = $this->connect();
$sql = "SELECT id FROM $d[tb1] WHERE kode = '$d[id]' AND induk='$d[induk]' AND status = 1";
$id = $this->getData($sql);
if ($id) {
$sql = "UPDATE $d[tb1] SET banyak = banyak+1, jumlah = harga*banyak WHERE kode = '$d[id]' AND induk='$d[induk]'";
$id = $this->getData($sql);
}
else{
$sql = "INSERT INTO $d[tb1] (induk,banyak,kode,nama,harga,jumlah,keterangan,status)
SELECT '$d[induk]',1,kode,nama,harga,harga,keterangan,1 FROM $d[tb2] WHERE id = '$d[id]'";
// // $sql = "SELECT * FROM $d[tb] where posisi = 'body'";
$id = $this->getData($sql);
}
$out = array('sql' =>$sql,'info' =>'Berhasil');
echo json_encode($out);
}

public function tasGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb1] where induk = '$d[induk]'";
$data = $this->getData($sql);

$sql = "SELECT sum(jumlah) AS total FROM $d[tb1] WHERE induk='$d[induk]' AND status = 1";
$header = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data' =>$data,'header' =>$header);
echo json_encode($out);
}

public function tasUpdate() {
$d = $this->conf;
$sql = "UPDATE $d[tb1] SET banyak = banyak+'$d[qty]', jumlah = banyak*harga where id = '$d[id]'";
if($d['qty']==0){  $sql = "DELETE FROM $d[tb1] where id = '$d[id]'"; }
// $out = $this->sql('r','Table',$sql);
$out = $this->getData($sql);
echo json_encode($out);
}

public function kasirGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb]";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function kasirAdd() {
$d = $this->conf;
$sekarang = date('Y-m-d');
$sql = "SELECT isi From $d[tb3] where nama = 'JL'";
$jl = $this->getData($sql);
if ($jl) {
$isi = $jl[0]['isi'];
$kode = 'JL-'.$isi;
  $sql = "UPDATE  $d[tb3] set isi = isi+1 where nama = 'JL'";
  $out = $this->getData($sql);
  $sql = "INSERT INTO $d[tb] SET kode = '$kode', tanggal = '$sekarang', status = 1";
  $out = $this->getData($sql);
}
echo json_encode($jl);
}
}  //end class mod
?>
