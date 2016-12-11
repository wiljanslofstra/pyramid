<?php
if (empty($_FILES)) {
  exit('No files given to upload');
}

$res = array();

foreach($_FILES as $file) {
  array_push($res, array(
    'name' => $file['name'],
    'url' => '/fakepath/' . $file['name']
  ));
}

header('Content-Type: application/json');
echo json_encode($res);
exit;
