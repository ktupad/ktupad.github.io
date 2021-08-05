<?php
class mod extends ktupad {

public $conf2= array(
  'tb' => 'apps_kuis',
  'tb4' => 'apps_blog',
'mn' => 'kuis',
);

public function blogGet() {
$d = $this->conf;
$sql = "SELECT * FROM $d[tb4] where id = '$d[id]' and status=1";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function managerGet() {
$d = $this->conf;
$sql = "SELECT nama,count(id) as isi FROM (SELECT * FROM $d[tb] ORDER BY nama DESC ) AS sub  GROUP BY nama ORDER BY nama DESC";
// $sql = "SELECT nama,banyak as isi FROM  apps_tas GROUP BY kode ORDER BY banyak DESC";
$data = $this->getData($sql);
$out = array('sql' =>$sql,'info' =>'Berhasil','data'=>$data);
echo json_encode($out);
}

public function kuisGet() {
$d = $this->conf;
$sql = "SELECT id,nama,pertanyaan,jawaban FROM $d[tb] WHERE status = '1' AND nama='$d[id]'";
$out = $this->sql('r','Table',$sql);
echo json_encode($out);
}

public function kuisPost() {
$d = $this->conf;
$kuis = $d['kuis'];
$jawab = $d['jawab'];
$data = array();
$conn = $this->connect();

$result = $conn->query("SELECT kunci FROM $d[tb] where nama = '$kuis' AND status = '1'");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row['kunci']; }
$b = $data;
$f =  array_diff_assoc($jawab, $b);
$nilai =  count($f);
$c =  $b =  count($b);
$c -= $nilai;
$c /=  $b ;
$c *=  10 ;
$jawab = json_encode($jawab);

$out = array('mod' =>'jawab','nilai' =>$c,'jawab' =>$jawab,'kuis' =>$kuis,);
echo json_encode($out);
}


}  //end class mod
?>
