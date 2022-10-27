<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->maKH)
    && isset($data->tenKH)
    && isset($data->diaChi)
    && isset($data->soDT)
    && is_numeric($data->maKH)
    && !empty(trim($data->tenKH))
    && !empty(trim($data->diaChi))
    && !empty(trim($data->soDT))
) {
    $tenKH  = mysqli_real_escape_string($connect, trim($data->tenKH));
    $diaChi  = mysqli_real_escape_string($connect, trim($data->diaChi));
    $soDT   = mysqli_real_escape_string($connect, trim($data->soDT));
    $updateCustomer = mysqli_query($connect, "UPDATE `tbl_khachhang` SET `tenKH`='$tenKH',`diaChi`='$diaChi', `soDT`='$soDT' WHERE `maKH`='$data->maKH'");
        if ($updateCustomer) {
            echo json_encode(["success" => 1, "msg" => "Cập nhật thành công."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Chưa cập nhật khách hàng!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Hãy điền đầy đủ thông tin!"]);
}