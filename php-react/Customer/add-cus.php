<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->tenKH)
    && isset($data->diaChi)
    && isset($data->soDT)
    && !empty(trim($data->tenKH))
    && !empty(trim($data->diaChi))
    && !empty(trim($data->soDT))
) {
    $tenKH = mysqli_real_escape_string($connect, trim($data->tenKH));
    $diaChi = mysqli_real_escape_string($connect, trim($data->daiChi));
    $soDT = mysqli_real_escape_string($connect, trim($data->soDT));
    $insertCustomer = mysqli_query($connect, "INSERT INTO `tbl_khachhang`(`tenKH`,`diaChi`,`soDT`) VALUES('$tenKH','$diaChi','$soDT')");
        if ($insertCustomer) {
            $last_id = mysqli_insert_id($connect);
            echo json_encode(["success" => 1, "msg" => "Thêm khách hàng thành công.", "maKH" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Không thêm được khách hàng!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Hãy nhập vào đầy đủ thông tin"]);
}
