<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->maPet)
    && isset($data->tenPet)
    && isset($data->giaPet)
    && isset($data->moTa)
    && isset($data->hinhPet)
    && is_numeric($data->maPet)
    && !empty(trim($data->tenPet))
    && !empty(trim($data->giaPet))
    && !empty(trim($data->moTa))
    && !empty(trim($data->hinhPet))
) {
    $tenPet  = mysqli_real_escape_string($connect, trim($data->tenPet));
    $giaPet  = mysqli_real_escape_string($connect, trim($data->giaPet));
    $moTa   = mysqli_real_escape_string($connect, trim($data->moTa));
    $hinhPet = mysqli_real_escape_string($connect, trim($data->hinhPet));
    $updateProduct = mysqli_query($connect, "UPDATE `product` SET `tenPet`='$tenPet',`giaPet`='$giaPet', `moTa`='$moTa', `hinhPet`='$hinhPet' WHERE `maPet`='$data->maPet'");
        if ($updateProduct) {
            echo json_encode(["success" => 1, "msg" => "Cập nhật thành công."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Chưa cập nhật sản phẩm!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Hãy điền đầy đủ thông tin!"]);
}