<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_login',
  'tb3' => 'master_param',
  'tb4' => 'apps_blog',
'mn' => 'login',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT status as nama,count(status) as isi FROM (SELECT * FROM $d[tb] ORDER BY status DESC ) AS sub  GROUP BY status ORDER BY status DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}


    public function signin() {
    $d = $this->conf;
    $conn = $this->connect();

    $sql = "SELECT * FROM $d[tb] WHERE email = ? and pin = ?";
    $result = $conn->prepare($sql);
    $result->execute([$d['nama'],$d['pin']]);

    $row = $result->fetch();
    $result = null;
    if ($row) { $out = array('sql' =>$sql,'info' =>'Berhasil','data' =>$row['email']); }
    else { $out = array( 'sql' =>$sql, 'info' =>'Gagal, user tidak ditemukan'); }
    echo json_encode($out);
    }



    public function signup() {
      $d = $this->conf;
      $conn = $this->connect();

      $sql = "SELECT * FROM $d[tb] WHERE email = ? and pin = ?";
      $result = $conn->prepare($sql);
      $result->execute([$d['nama'],$d['pin']]);

      $row = $result->fetch();
      $result = null;
      if ($row) { $out = array( 'sql' =>$sql, 'info' =>'Gagal, user sudah ada'); }
    else {
    $sql = "INSERT INTO $d[tb] SET email = '$d[nama]', pin = '$d[pin]', status = 1";
    $this->getData($sql);
    $sql = 'SQL';
    $out = array( 'sql' =>$sql,'info' =>'Berhasil SignUp','data' =>$d['nama']);
    }
    echo json_encode($out);
    }


}  //end class mod
?>
