<?php
class mod extends ktupad {

public $conf2= array(
'tb' => 'master_email',
'mn' => 'email',
);


public function kirim(){
    $e = json_decode(file_get_contents('php://input'), true);
    $tb=$this->tb;
    $nama=$this->nama;
     $conn=$this->connect();

    $sql = "SELECT * FROM $tb where nama='$nama'";
    $result = $conn->query($sql);
    $row = $result->fetch();

    if(!$row){
      // echo $tb;
      $out=array('res'=>'relogin');
      echo json_encode($out);

    }
    else {
      $this->nama = $row['nama'];
      $this->sandi = $row['sandi'];
      $this->subject ='Lupa Sandi Kuttab Al-Fatih';
      $m=$this->mail();
      $out=array(
        'res'=>$m
      );
      echo json_encode($out);

   }

}

     public function mail() {
       // $datareg = $this->datareg;
       // $dr = json_decode($datareg,true);
       $uemail=$this->nama;
       $usandi=$this->sandi;
       $subject=$this->subject;
       // $out =array();
       // require '../../phpmailer/PHPMailerAutoload.php';
       require './addon/phpmailer/PHPMailerAutoload.php';
       // $email = "regkaf@sismadi.com";
       // $password = "regkaf123";

       $email = "reg01@sismadi.com";
       // $email = "reg02@sismadi.com";
       // $email = "reg03@sismadi.com";
       // $email = "reg04@sismadi.com";
       // $email = "reg05@sismadi.com";


       $password = "app@sikaf";

       // $email = "reg01@sismadi.com";
       // $password = "app@sikaf";


       // $to_id = "wpsismadi@yahoo.com";
       // $to_id1 = "wpsismadi@gmail.com";
       $to_id = $uemail;

       $message  = '<style>';
       $message .= 'table {border-collapse: collapse; width: 100%; }';
       $message .= 'th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }';
       $message .= '</style>';

       $message .= '<table>';
       $message .= '<tr>';
       $message .= '<td>Email</td><td>:</td><td>'.$uemail.'</td>';
       $message .= '</tr><tr>';
       $message .= '<td>Sandi </td><td>:</td><td>'.$usandi.'</td>';
       $message .= '</tr><tr>';
       $message .= '</table>';


       $mail = new PHPMailer;
       $mail->isSMTP();
       $mail->Host = 'smtp.gmail.com';
       $mail->Port = 587;
       $mail->SMTPSecure = 'tls';
       $mail->SMTPAuth = true;
       $mail->Username = $email;
       $mail->Password = $password;
       $mail->setFrom('reg01@sikaf.id', 'Kuttab Al-Fatih');
       $mail->addReplyTo('reg01@sikaf.id', 'Kuttab Al-Fatih');
       $mail->addAddress($to_id);
       // $mail->addAddress('psbkaf@gmail.com');
       // $mail->addAddress('wawan.sismadi@gmail.com');

       $mail->Subject = $subject;
       $mail->msgHTML($message);

       if (!$mail->send()) {$error = "Mailer Error: " . $mail->ErrorInfo;
         // $out=array('mail'=>$error);
         // array_push($out,array('mail'=>$error));
return $error;
         // echo json_encode($out);
         // echo $error ;
       } else {
       // else {echo "Message sent";}
       // array_push($out,array('mail'=>'Message sent'));
return 'Message sent';
       // $out=array('mail'=>'Message sent');
       // echo json_encode($out);
       // $this->login();
     }
      }
}


?>
