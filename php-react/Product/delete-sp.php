<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->maPet) && is_numeric($data->maPet)) {
    $delID = $data->maPet;
    $deleteUser = mysqli_query($connect, "DELETE FROM `product` WHERE `maPet`='$delID'");
    if ($deleteUser) {
        echo json_encode(["success" => 1, "msg" => "Đã xóa sản phẩm"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Không tìm thấy sản phẩm!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Không tìm thấy sản phẩm!"]);
}