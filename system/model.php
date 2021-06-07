<?php
// http://localhost/new/api2/?mod=table&tb=pengguna
// http://localhost/new/api2/?mod=signin&nama=sa&pin=sa
//sa'; DROP TABLE tes;'
// create table tes like img;

class mod extends ktupad {
public $conf2= array(
// 'tb'  => 'pos_transaksi',
'tb1' => 'dev_param',
// 'tb2' => 'barang',
// 'tb3' => 'tass',
);

public function mymethod(){
$d=$this->conf;
$out=$d['myparam'];
echo json_encode($out);
}

public function signin(){
$d=$this->conf;
$conn=$this->connect();

$sql = "SELECT * FROM pengguna WHERE nama = ? and pin=?";
$result = $conn->prepare($sql);
$result->execute([$d['nama'],$d['pin']]);

// $sql = "SELECT * FROM  pengguna WHERE nama='$d[nama]' AND pin='$d[pin]'";
// $result = $conn->query($sql);


$row = $result->fetch();
$result = null;
// echo json_encode($arr);
if($row){ $out=array('sql'=>$sql,'info'=>'Berhasil','data'=>$row['nama']); }
else { $out=array( 'sql'=>$sql, 'info'=>'Gagal, user tidak ditemukan'); }
echo json_encode($out);
}


public function report(){
$d=$this->conf;
$sql="SELECT * FROM $d[tb] where id='$d[id]'";
// $sql="SELECT * FROM $d[tb] where posisi='body'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function blog(){
$d=$this->conf;
$sql="SELECT * FROM $d[tb] where id='$d[id]'";
// $sql="SELECT * FROM $d[tb] where posisi='body'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function bloghome(){
$d=$this->conf;
// $sql="SELECT * FROM $d[tb] where id='$d[id]'";
$sql="SELECT * FROM $d[tb] where posisi='slide'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function bloglist(){
$d=$this->conf;
// SELECT ip, SUBSTRING_INDEX(ip,'.',1) AS part1,
$sql="SELECT *, SUBSTRING_INDEX(isi,'[more]',1) as isi FROM $d[tb] where posisi='$d[id]'";
// $sql="SELECT * FROM $d[tb]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}


public function keluar(){
$d=$this->conf;
$kini=date('Y-m-d H:i:s');
$kode=$d['kode'];

$sql="UPDATE  parkir Set keluar='$kini' where kode='$kode'";
$data = $this->getData($sql);

$sql="SELECT * FROM parkir where kode='$kode'";
$data = $this->getData($sql);
echo json_encode($data);
}

public function parkir(){
$d=$this->conf;
$kini=date('Y-m-d H:i:s');
$kode='park1';
$sql="INSERT INTO parkir set masuk='$kini', kode='$kode'";
$this->getData($sql);

$sql="SELECT * FROM parkir where kode='$kode'";
$data = $this->getData($sql);
echo json_encode($data);

}
public function tiket(){
$d=$this->conf;
$sql="SELECT isi FROM $d[tb1] WHERE nama = '$d[id]'";
$isi=$this->getData($sql);
echo json_encode($isi);
}

public function ambiltiket(){
$d=$this->conf;
$kini=date('Y-m-d H:i:s');

$sql="UPDATE $d[tb1] SET isi=isi+1 WHERE nama = '$d[id]'";
$this->getData($sql);

$sql="SELECT isi FROM $d[tb1] WHERE nama = '$d[id]'";
$isi=$this->getData($sql);
$kode=$isi[0]['isi'];
$sql="INSERT INTO antrian SET masuk='$kini', kode='$kode'";
$this->getData($sql);

echo json_encode($isi);
}



public function signup(){
    $d=$this->conf;
    $conn=$this->connect();
    $sql = "SELECT * FROM  pengguna WHERE nama='$d[nama]' AND pin='$d[pin]'";
    $result = $conn->query($sql);
    $row = $result->fetch();
    $sql='SQL';

    if($row){
     $out=array( 'sql'=>$sql, 'info'=>'Gagal, user sudah ada'); }
    else {
      $sql="INSERT INTO pengguna SET nama='$d[nama]', pin='$d[pin]', induk='$d[induk]', status=0";
      $this->getData($sql);
      // $isi=$this->getData($sql);
      $sql='SQL';

      $out=array( 'sql'=>$sql,'info'=>'Berhasil SignUp, cek email untuk verifikasi');
      // $enc = "tets@sismadi.com";
      $enc = $d['nama'];
      $enc = base64_encode($d['nama']);
      include('../addon/mail.php');
    }
    echo json_encode($out);
    // echo json_encode($d);
    }


      public function aktifasi(){
        $d=$this->conf;
        $conn=$this->connect();

        $dec=base64_decode($d['nama']);

        $sql = "SELECT * FROM  pengguna WHERE nama='$dec' ";
        $result = $conn->query($sql);
        $row = $result->fetch();
        $sql='SQL';
        if(!$row){
         $out=array( 'sql'=>$sql, 'info'=>'Gagal, user belum register'); }
        else {
          $sql="UPDATE pengguna SET status=1 WHERE nama='$dec' ";
          $this->getData($sql);
          // $isi=$this->getData($sql);
          $sql='SQL';

          $out=array( 'sql'=>$sql,'info'=>'Berhasil Aktifasi');
        }
        echo json_encode($out);
        // echo json_encode($d);
        }


public function kuis() {
$tema='1';
$d=$this->conf;

$induk=$d['induk'];

$data=array();
$conn=$this->connect();
// $d['cond']="and mapel=$mapel";
// if($induk=='sa'){ $d['cond']=""; }
$result = $conn->query("SELECT id,nama,pertanyaan,jawaban FROM kuis WHERE status='1' $d[cond] ");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }
$out=array('mod'=>'kuis','data'=>$data);
echo json_encode($out);
}


public function kirim(){
$d=$this->conf;
$kuis=$d['kuis'];
$jawab=$d['jawab'];
$data=array();
$conn=$this->connect();

$result = $conn->query("SELECT kunci FROM kuis where nama='$kuis' AND status='1'");
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row['kunci']; }
$b = $data;
$f= array_diff_assoc($jawab, $b);
$nilai= count($f);
$c= $b= count($b);
$c -=$nilai;
$c /= $b ;
$c *= 10 ;
$jawab = json_encode($jawab);
// $conn->query("SET SESSION sql_mode = ''");
// $result1 = $conn->query("SELECT id FROM $tbnilai WHERE kuis='$kuis' AND users='$users' ;");
// $row1 = $result1->fetch();
// if(!$row1){ $sql="INSERT INTO  $tbnilai SET users='$users',nilai='$c',kuis='$kuis',keterangan='$jawab' ";
// $conn->query($sql);
// }
// else {  }
$out=array('mod'=>'jawab','nilai'=>$c,'jawab'=>$jawab,'kuis'=>$kuis,);
echo json_encode($out);
}
// end kuis

public function droprow(){
  $d=$this->conf;
$conn=$this->connect();
$sql="SELECT $d[fld] FROM $d[tb]";
$result = $conn->query($sql);
$data=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }
$sql='SQL';

$out=array('sql'=>$sql,'data'=>$data);
echo json_encode($out);
}


public function app(){
$conn=$this->connect();

$sql="select * from dev_addon where status=1";
$result = $conn->query($sql);
$addon=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $addon[] = $row['url']; }

$sql="select * from dev_app where status=1";
$result = $conn->query($sql);
$data=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $data[] = $row; }

$sql="select * from dev_menu where status=1";
$result = $conn->query($sql);
$menu=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) { $menu[] = $row; }

$sql="select * from dev_modul where status=1 ";
$result = $conn->query($sql);
$modul=array();
$result->setFetchMode(PDO::FETCH_ASSOC);
while($row = $result->fetch()) {  $modul[] = $row;}
// while($row = $result->fetch()) {  $modul[] = $row;}

foreach ($modul as $key => $val) {
$induk=$modul[$key]['nama'];

$sql1="select * from dev_form where status=1 and induk='$induk'";
$result1 = $conn->query($sql1);
$form=array();
$result1->setFetchMode(PDO::FETCH_ASSOC);
while($row1 = $result1->fetch()) { $form[]=$row1;}

$sql1="select * from dev_method where status=1 and induk='$induk'";
$result1 = $conn->query($sql1);
$result1->setFetchMode(PDO::FETCH_ASSOC);
$method=array();
while($row1 = $result1->fetch()) { $method[]=$row1;}

$sql1="select * from dev_bar where status=1 and induk='$induk'";
$result1 = $conn->query($sql1);
$result1->setFetchMode(PDO::FETCH_ASSOC);
$bar=array();
while($row1 = $result1->fetch()) { $bar[]=$row1;}

$modul[$key]['form'] = $form;
$modul[$key]['method'] = $method;
$modul[$key]['bar'] = $bar;
}
$sql='SQL';

$out=array('sql'=>$sql,'addon'=>$addon,'app'=>$data,'menu'=>$menu,'modul'=>$modul);
echo json_encode($out);
}

public function droprow3(){
$d=$this->conf;
// $sql="SELECT id,kode,jumlah,total FROM $d[tb] where kode='$d[induk]'";
$sql="SELECT $d[fld] FROM $d[tb]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function tables(){
$d=$this->conf;
$sql = "SHOW TABLES FROM dev WHERE Tables_in_dev='$d[induk]'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function column(){
$d=$this->conf;
$sql = "SHOW COLUMNS FROM $d[induk]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function kasirDetail(){
$d=$this->conf;
$sql="SELECT id,kode,jumlah,total FROM $d[tb] where kode='$d[induk]'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}

public function kasirItems(){
$d=$this->conf;
$sql="SELECT id,kode,nama,banyak,harga,jumlah FROM $d[tb] where induk='$d[induk]'";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}


public function barang(){
$d=$this->conf;
$sql="SELECT * FROM $d[tb]";
$out=$this->sql('r','Table',$sql);
echo json_encode($out);
}


public function add(){
$sekarang=date('Y-m-d');
$d=$this->conf;

$sql="SELECT * FROM $d[tb2] Where kode='$d[kode]'";
$out=$this->getData($sql);
if($out){
// $kode=$out[0]['nama'];
$sql="SELECT * FROM $d[tb3] Where kode='$d[kode]' and induk='$d[induk]'";
$out=$this->getData($sql);

if(!$out){
$sql="INSERT INTO $d[tb3] (induk,tanggal,kode,nama,banyak,harga,jumlah)
SELECT '$d[induk]','$sekarang',kode,nama,1,harga,harga FROM $d[tb2] WHERE kode='$d[kode]'";
}
else{
$sql="UPDATE $d[tb3] SET banyak=banyak+1, jumlah=banyak*harga  WHERE kode='$d[kode]' AND induk='$d[induk]'";
}
$out1=$this->getData($sql);
$sql="UPDATE $d[tb] AS a
SET a.jumlah = (SELECT SUM(b.banyak) FROM $d[tb3] AS b WHERE b.induk = '$d[induk]'),
a.total = (SELECT SUM(b.jumlah) FROM $d[tb3] AS b WHERE b.induk = '$d[induk]')
WHERE a.kode = '$d[induk]' ;";
$out=$this->getData($sql);
$out=$sql;
}
else { $out='kosong';}
echo json_encode($out1);
} //end add

public function baru(){
$d=$this->conf;
$sekarang=date('Y-m-d');

$sql="SELECT isi FROM $d[tb1] WHERE nama = '$d[mode]'";
$isi=$this->getData($sql);

$sql="UPDATE $d[tb1] SET isi = isi + 1  WHERE nama = '$d[mode]' ";
$out=$this->getData($sql);

$induk=$d['mode']."-".$isi[0]['isi'];

// $ref=$d['ref'];
$ref=$induk;
$lokasi=$d['lokasi'];

$sql="INSERT INTO  $d[tb] SET kode='$induk', ref='$ref', lokasi='$lokasi', tanggal='$sekarang', kegiatan='$d[mode]'";
$out=$this->getData($sql);

echo json_encode($induk);
} // adn baru

}
?>
