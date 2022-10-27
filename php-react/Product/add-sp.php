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
    isset($data->tenPet)
    && isset($data->giaPet)
    && isset($data->moTa)
    && isset($data->hinhPet)
    && !empty(trim($data->tenPet))
    && !empty(trim($data->giaPet))
    && !empty(trim($data->moTa))
    && !empty(trim($data->hinhPet))
) {
    
    $tenPet = mysqli_real_escape_string($connect, trim($data->tenPet));
    $giaPet = mysqli_real_escape_string($connect, trim($data->giaPet));
    $moTa = mysqli_real_escape_string($connect, trim($data->moTa));
    $hinhPet = mysqli_real_escape_string($connect, trim($data->hinhPet));
    $insertProduct = mysqli_query($connect, "INSERT INTO `product`(`tenPet`,`giaPet`,`moTa`,`hinhPet`) VALUES('$tenPet','$maPet','$moTa','$hinhPet')");
        if ($insertProduct) {
            $last_id = mysqli_insert_id($connect);
            echo json_encode(["success" => 1, "msg" => "Thêm sản phẩm thành công.", "id_user" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Không thêm được sản phẩm!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Hãy nhập vào đầy đủ thông tin"]);
}
