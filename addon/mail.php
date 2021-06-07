<?php

require 'phpmailer/PHPMailerAutoload.php';
// $enc = "register@sismadi.com";
$email = "yourmail@gmail.com";
$password = "yourpassword";
$to_id = "wawan@ktupad.com";
// $message = "Aktifkan akun ada dengan klik halaman berikut <a href='https://sikaf.aset.co/?menu=aktifasi&id=$enc' > aktifasi </a>";
  $message = "Aktifkan akun ada dengan klik halaman berikut <a href='http://localhost/lite/?c=pengguna/verifikasi/$enc' > aktifasi </a>";
$subject = "Pendafatran Akun Kuttab Al Fatih";

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = $email;
$mail->Password = $password;
$mail->setFrom('register@sismadi.com', 'Registrasi App Sismadi');
$mail->addReplyTo('register@sismadi.com', 'Registrasi App Sismadi');
$mail->addAddress($to_id);
$mail->Subject = $subject;
$mail->msgHTML($message);

if (!$mail->send()) {$error = "Mailer Error: " . $mail->ErrorInfo; echo $error ;}
else {echo "Message sent";}

?>
