<?php
// session_start();
date_default_timezone_set('Asia/Jakarta');
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-type: text/html; charset=utf-8');

$e = json_decode(file_get_contents('php://input'), true);
// $path='system/model.php';
$path='model.php';
if(isset($e['path'])){$path=$e['path']; }
else { $r=$_REQUEST; if(isset($r['path'])){ $path=$r['path']; } }
$path='model.php';
include($path);

class ktupad extends koneksi {
public $conf1=array(
'baseURL' => 'http://localhost/',
'isAkses'   => 0,
'uid'       => 0,
'token'     => 0,
'tb'        => 'master_akses',
'mn'        => 'akses',
'data'      => '{"id":"7","nama":"bismillah"}',
'sql'       => '',
'cond'      => '',
'cond1'     => '',
'conds'     => '',
'sortir'    => 'ORDER BY id DESC',
'limit'     => 1,
'offset'    => 0,
'filetype'  => 'images/*',
'filedir'   => 'files/'
);

function init(){
$this->conf=array_merge($this->conf1,$this->conf2);
// $this->setconf();
$r=$_REQUEST;
if(isset($r)){
foreach ($r as $key=>$val) {
// $this->$key=$val;
// $this->datas[$key]=$val;
$this->conf[$key]=$val;
$inj = array(" or'"," or ");
$str = $val;
if (str_replace($inj, '', $str) != $str) {  $this->conf[$key]=''; }
// else {  $this->conf[$key]=$val;}
}
}
if(isset($r['mod'])){ $func=$r['mod'];	$this->$func();}
else {
$e = json_decode(file_get_contents('php://input'), true);
if(isset($e)){ foreach ($e as $key=>$val) {
// $this->$key=$val;
// $this->datas[$key]=$val;
$this->conf[$key]=$val;
$inj = array(" or'"," or ");
$str = $val;
if (str_replace($inj, '', $str) != $str) {  $this->conf[$key]='ktupad'; }
// else {  $this->conf[$key]=$val;}
}	}
if(isset($e['mod'])){ $func=$e['mod'];	$this->$func();}
else { $out=array('Info'=>'Hello Ktupad'); echo json_encode($out);  }
}
}

public function token(){
$d=$this->conf;
$token=$d['token'];
  // $token=1;
$sql = "SELECT * FROM master_users where token='$token'";
$conn=$this->connect();
$result = $conn->query($sql);
$row = $result->fetch();

if($row){$uid=$row['id'];$aid=$row['akses'];} else {
$uid=0;
$aid=0; }

$out=array(
'akses'=>$aid,
'uid'=>$uid,
'aid'=>$aid);
return $out;
// $conn->close();
$conn=null;
}


public function akses(){
$d=$this->conf;
if(!$d['isAkses']){ $crud=array("c","r","u","d"); }

else{
$token=$this->token();
$akses=$token['akses'];
$mn=$d['mn'];
$conn=$this->connect();
$result =$conn->query("select id from master_menu where nama='$mn'");
$row = $result->fetch();
$mnid=$row[0];
$result = $conn->query("SELECT c,r,u,d FROM master_akses WHERE nama='$akses'");
$row = $result->fetch();

$isc=explode(",",$row['c']);
$isr=explode(",",$row['r']);
$isu=explode(",",$row['u']);
$isd=explode(",",$row['d']);

$crud=array();

if(in_array($mnid, $isc)) { array_push($crud, 'c'); }
if(in_array($mnid, $isr)) { array_push($crud, 'r'); }
if(in_array($mnid, $isu)) { array_push($crud, 'u'); }
if(in_array($mnid, $isd)) { array_push($crud, 'd'); }
}
return $crud;
// return $isd;
// $conn->close();
$conn=null;
}


function import(){
$d=$this->conf;
// $tb=$this->tb;
$tb=$d['tb'];

$conn=$this->connect();
$conn->query("SET SESSION sql_mode = ''");

$csv = file_get_contents($_FILES['afile']['tmp_name']);
$row = str_getcsv($csv, "\n");
$header = str_getcsv($row[0], ";");
$data=array();

for($n=1;$n<count($row);$n++) { $data = str_getcsv($row[$n], ";");
$datasecs=array();
for($i=0;$i<count($data);$i++) { $datasecs[]= $header[$i]."='".$data[$i]."'";
$datas=implode(",", $datasecs);
}
$sql = "INSERT INTO $tb set $datas";
$result = $conn->query($sql);
echo $sql;
}
// $conn->close();
$conn=null;

}

public function upload(){
$d=$this->conf;
// $target_dir = $this->filedir;
$target_dir = 'files/';

// $target_dir = $_REQUEST['dir'];
$target_file = $target_dir . basename($_FILES["afile"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

$fileName = $_FILES['afile']['name'];
$fileType = $_FILES['afile']['type'];
$fileContent = file_get_contents($_FILES['afile']['tmp_name']);
if(isset($_POST["submit"])) {
$check = getimagesize($_FILES["afile"]["tmp_name"]);
if($check !== false) {
echo "File is an image - " . $check["mime"] . ".";
$uploadOk = 1;
} else {
echo "File is not an image.";
$uploadOk = 0;
}
}
// Check if file already exists
if (file_exists($target_file)) {
echo "Sorry, file already exists.";
$uploadOk = 0;
}
// Check file size
if ($_FILES["afile"]["size"] > 15000000) {
echo "Sorry, your file is too large.";
$uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg"
&& $imageFileType != "png"
&& $imageFileType != "jpeg"
&& $imageFileType != "gif"
&& $imageFileType != "mp4"
 ) {
echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
$uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {

if (move_uploaded_file($_FILES["afile"]["tmp_name"], $target_file)) {
$out=array(
'file'=>	$target_dir.basename( $_FILES["afile"]["name"]),
'mod'=>'Upload');
echo json_encode($out);
}
else { echo "Sorry, there was an error uploading your file.";	}
}
}


public function sql($crud,$act,$sql){
  // echo $sql;

$tAkses=$this->akses();
$conn=$this->connect();
$conn->query("SET SESSION sql_mode = ''");

if(in_array($crud, $tAkses)) {

$result = $conn->query($sql);
$result->setFetchMode(PDO::FETCH_ASSOC);

$col=array();
$data=array();
$arr = array("Read", "Table");
if(in_array ($act,$arr)){
$data=array();
$colcount = $result->columnCount();
for ($i = 0; $i < $colcount; $i++) {  $cols = $result->getColumnMeta($i);
$col[] = $cols['name'];
}
while($row = $result->fetch()) { $data[] = $row; }
}
$sql='SQL';
$out=array('sql'=>$sql,'info'=>'Berhasil '.$act,'fld'=>$col,'data'=>$data,'akses'=>$tAkses );
}
else {
$sql='SQL';
$out=array('sql'=>$sql,'info'=>'Gagal '.$act,'akses'=>$tAkses );}
return $out;
$conn=null;
}

public function cari(){
$d=$this->conf;
$d['cond']=rawurldecode($d['cond']);
$sql="SELECT * FROM $d[tb] WHERE id IN (SELECT id FROM $d[tb] $d[conds]) $d[cond1] $d[cond] $d[sortir] LIMIT $d[offset], $d[limit]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}


public function getData($sql){
$conn=$this->connect();
$conn->query("SET SESSION sql_mode = ''");
$result = $conn->query($sql);
$data=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }
return $data;
}

public function create(){
  $d=$this->conf;
  $data=$d['data'];
  // $induk=$d['induk'];
  foreach($data as $key => $val) { $obj[]=$key."='".$val."'"; }
  $row = implode(',',$obj);

  if($d['isColumn']==0){ $sql="INSERT INTO $d[tb] SET $row";}
  if($d['isColumn']==1){ $sql="ALTER TABLE $d[tableinduk] ADD COLUMN $data[Field] $data[Type] AFTER id;"; }
  if($d['isColumn']==2){ $sql="CREATE TABLE $data[Tables_in_dev] ( id INT(11) AUTO_INCREMENT PRIMARY KEY);"; }


  $out=$this->sql('c','Create',$sql);
  echo json_encode($out);

  // echo json_encode($sql);


  }
  // end create
public function read(){
  $d=$this->conf;
  $sql = "SELECT * FROM $d[tb] WHERE id=$d[id]";
  $out=$this->sql('r','Read',$sql);
  echo json_encode($out);
  }
  // end read
  public function update(){
  $d=$this->conf;


  $data=$d['data'];
  foreach($data as $key => $val) { $obj[]=$key."='".$val."'"; }
  $row = implode(',',$obj);


  if($d['isColumn']==0){ $sql = "UPDATE $d[tb] SET $row WHERE id=$d[id]";}
  if($d['isColumn']==1){ $sql="ALTER TABLE $d[tableinduk] CHANGE  COLUMN $d[induk] $data[Field] $data[Type] ";  }
  if($d['isColumn']==2){ $sql="ALTER TABLE $d[induk] RENAME TO $data[Tables_in_dev]"; }

  $out=$this->sql('u','Update',$sql);
  echo json_encode($out);

  // echo json_encode($sql);

  }
  // end update
  public function delete(){
  $d=$this->conf;
  if($d['isColumn']==0){ $sql="DELETE FROM $d[tb] WHERE id IN ($d[id])";}
  if($d['isColumn']==1){ $sql="ALTER TABLE $d[tableinduk] DROP COLUMN $d[induk]";  }
  if($d['isColumn']==2){ $sql="DROP TABLE $d[induk]"; }

  $out=$this->sql('d','Delete',$sql);
  echo json_encode($out);

  // echo json_encode($sql);

  }
  // end delete

public function table(){
$d=$this->conf;
    // $d['cond']=rawurldecode($d['cond']);
$sql="SELECT * FROM $d[tb] WHERE id IN (SELECT id FROM $d[tb] $d[conds]) $d[cond1] $d[cond] $d[sortir] LIMIT $d[offset], $d[limit]";
// echo $sql;
// if(isset($d['isColumn']) && $d['isColumn']==2){$sql = "SHOW TABLES FROM dev";}
if($d['isColumn']==2){$sql = "SHOW TABLES FROM dev";};
  $out=$this->sql('r','Table',$sql);
  echo json_encode($out);
  // echo json_encode($d['isColumn']);

  // echo $sql;
  }


  public function tableP(){
  $d=$this->conf;
  $token=$d['token'];

  // $token='d0b1f13ad979d7f80d80a8262da18273'; // sa
  // $token='a456a64c4a8c268c56dab20992b993a5'; // mudi
  // $token='7cdb77d6db1d0bf7bd1a6d9ab0a26760'; // otong
  // $token='fefdc13953230427867c9b18438be828'; // barkah


  $conn=$this->connect();
  $sql="select id,email,(select id from master_akses where nama = a.akses ) as akses from master_users a where token='$token' ";

  $result = $conn->query($sql);
  $result->setFetchMode(PDO::FETCH_ASSOC);
  $row = $result->fetch();

  $nama=$row['email'];
  $akses=$row['akses'];
  $induk=$row['id'];

  $sql="
  select id from (select * from master_akses order by induk, id) a,
          (select @pv := '$akses') b
  where   find_in_set(induk, @pv) and length(@pv := concat(@pv, ',', id))
  ";
  $result = $conn->query($sql);
  $data=array();
  $result->setFetchMode(PDO::FETCH_ASSOC);

  while($row = $result->fetch()) { $data[] = $row['id']; }
  $id= implode(",",$data);

  if($id){

      $sql="
      select id, akses from master_users where akses in (select nama from master_akses where id in ($id));
      ";
      $result = $conn->query($sql);
      $data=array();
      $result->setFetchMode(PDO::FETCH_ASSOC);

      while($row = $result->fetch()) { $data[] = $row['id']; }
      $id= implode(",",$data);

    $nah="select id from  $d[tb] where induk in ($id) or induk='$induk'"; }
  else { $nah="select id from  $d[tb] where induk= '$induk'"; }

  $sql="SELECT * FROM $d[tb] WHERE id IN ($nah)  $d[cond1] $d[cond] $d[sortir] LIMIT $d[offset], $d[limit]";
  $out=$this->sql('r','Table',$sql);
  echo json_encode($out);
  }
}
?>
