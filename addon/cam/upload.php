<?php
$e = json_decode(file_get_contents('php://input'), true);
$file = 'upload/'.date('YmdHis') . '.jpeg';
base64_to_jpeg($e['mod'],$file);
echo $file;
function base64_to_jpeg($base64_string, $output_file) {
    $ifp = fopen( $output_file, 'wb' );
    $data = explode( ',', $base64_string );
    fwrite( $ifp, base64_decode( $data[ 1 ] ) );
    fclose( $ifp );
    return $output_file;
}
