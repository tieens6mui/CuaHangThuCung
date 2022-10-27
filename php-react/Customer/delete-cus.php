<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->maKH) && is_numeric($data->maKH)) {
    $delID = $data->maKH;
    $deleteCustomer = mysqli_query($connect, "DELETE FROM `tbl_khachhang` WHERE `maKH`='$delID'");
    if ($deleteCustomer) {
        echo json_encode(["success" => 1, "msg" => "Đã xóa khách hàng"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "Không tìm thấy sản phẩm!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Không tìm thấy sản phẩm!"]);
}