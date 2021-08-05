  <?php
  class mod extends ktupad {

  public $conf2= array(
    'tb' => 'master_users',
    'mn' => 'users',
    );

    public function signout(){
    $d=$this->conf;
    $conn=$this->connect();
    $sql = "SELECT * FROM  $d[tb] WHERE token='$d[token]'";
    $result = $conn->query($sql);
    $row = $result->fetch();
    if($row){
      $sql = "UPDATE $d[tb] SET logs='out' WHERE token='$d[token]'";
      $result = $conn->query($sql);
      $out=array('info'=>'Berhasil, Logout');
    }
    else { $out=array( 'info'=>'Gagal, user tidak ditemukan ' .$d['token']); }
    echo json_encode($out);
    }

  public function signin(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "SELECT * FROM  $d[tb] WHERE email='$d[email]' AND pin='$d[pin]'";
  $result = $conn->query($sql);
  $row = $result->fetch();

  if($row){

    $result = $conn->query("SELECT r FROM master_akses WHERE nama=(select akses from master_users where token='$row[token]')");
    $row1 = $result->fetch();
    $akses=$row1[0];

    $sql2 = "SELECT * FROM master_menu WHERE id IN ($akses) and status=1";
    $result2 = $conn->query($sql2);

    $menu=array();
    $result2->setFetchMode(PDO::FETCH_ASSOC);
    while($row2 = $result2->fetch()) { $menu[] = $row2; }


    $sql1 = "UPDATE $d[tb] SET logs='in' WHERE token='$row[token]' ";
    $result = $conn->query($sql1);

 $out=array('sql'=>$sql2,'info'=>'Berhasil,'.$d['email'],'username'=>$row['email'],'token'=>$row['token'],'id'=>$row['id'],'menu'=>$menu, );
  $_SESSION["token"] = $row['token'];
  }
  else { $out=array( 'info'=>'Gagal, user tidak ditemukan'); }
  echo json_encode($out);
  }

  public function signup(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "SELECT * FROM  $d[tb] WHERE email='$d[email]'";
  $result = $conn->query($sql);
  $row = $result->fetch();
  if(!$row){

  $conn->query("SET SESSION sql_mode = ''");
  $sql = "INSERT INTO  $d[tb] SET email='$d[email]', pin='$d[pin]'";
  $result = $conn->query($sql);

  $out=array('info'=>'Berhasil,'.$d['email'],'data'=>$d['email'] );}
  else { $out=array( 'info'=>'Gagal, user sudah terdaftar'); }
  echo json_encode($out);
  }

  public function setpin(){
  $d=$this->conf;
  $conn=$this->connect();
  $sql = "UPDATE $d[tb] SET pin='$d[pin]' WHERE email='$d[email]'";
  $result = $conn->query($sql);
  if($result){ $out=array('info'=>'Berhasil,ganti PIN');}
  else { $out=array( 'info'=>'Gagal, ganti PIN','sql'=>$sql); }
  echo json_encode($out);
  }


  public function menu(){
  $d=$this->conf;
  $conn=$this->connect();
  $result = $conn->query("SELECT r FROM master_akses WHERE nama=(select akses from master_users where token='$d[token]')");
  $row = $result->fetch();
  $akses=$row[0];

  $sql = "SELECT * FROM master_menu WHERE id IN ($akses)";
  $result = $conn->query($sql);
  $data=array();
  $result->setFetchMode(PDO::FETCH_ASSOC);
  while($row = $result->fetch()) { $data[] = $row; }
  if($result){ $out=array('mod'=>'menu','data'=>$data);}
  else { $out=array( 'info'=>'Gagal, ambil data','data'=>$data); }
  echo json_encode($out);
  }
  }
  ?>
