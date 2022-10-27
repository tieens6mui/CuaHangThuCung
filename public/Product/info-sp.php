<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST,GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// require 'db_connection.php';
$connect = new mysqLi("localhost","root","","petstore");
$data = json_decode(file_get_contents("php://input"));

// if (isset($data->maPet) && is_numeric($data->maPet)) {
    $productID = $data->maPet;
    $result = $connect->query("SELECT * FROM product WHERE `maPet`='$productID'");
    $row   = mysqli_fetch_object($result);
    echo json_encode(["success" => 1, "product" => $row]);
// } else {
//     echo json_encode(["success" => 0, "msg" => "Không tìm thấy sản phẩm!"]);
// }