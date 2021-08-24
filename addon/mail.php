<?php
require 'phpmailer/PHPMailerAutoload.php';
$email = "surel@gamil.com";
$password = "sandi";
$to_id = "pay@dia.web.id";
$message = "Aktifkan akun ada dengan klik halaman berikut <a href='https://sikaf.aset.co/?menu=aktifasi&id=$enc' > aktifasi </a>";
$subject = "Pendafatran Akun Kuttab Al Fatih";

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = $email;
$mail->Password = $password;
$mail->setFrom('regkaf@sikaf.aset.co', 'Pendaftaran Kutab Al-Fatih');
$mail->addReplyTo('regkaf@sikaf.aset.co', 'Pendaftaran Kutab Al-Fatih');
$mail->addAddress($to_id);
$mail->Subject = $subject;
$mail->msgHTML($message);

if (!$mail->send()) {$error = "Mailer Error: " . $mail->ErrorInfo; echo $error ;}
else {echo "Message sent";}

?>
