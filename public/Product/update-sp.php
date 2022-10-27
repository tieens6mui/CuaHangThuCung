<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

if (
    isset($_POST['maPet']) && isset($_POST['tenPet']) && isset($_POST['giaPet']) && isset($_POST['moTa']) 
) {
    try {
        $maPet = mysqli_real_escape_string($connect, $_POST['maPet']);
        $tenPet = mysqli_real_escape_string($connect, $_POST['tenPet']);
        $giaPet = mysqli_real_escape_string($connect, $_POST['giaPet']);
        $moTa = mysqli_real_escape_string($connect, $_POST['moTa']);
        if (!file_exists('images/')) {
            mkdir('images/', 0777, true);
        }
        if (!isset($_POST['hinhPet']) && $_FILES['hinhPet']['name'] != null) {
            $fileName = $_FILES["hinhPet"]["name"];
            $fileNameTemp = $_FILES["hinhPet"]["tmp_name"];
            $target_dir = "images/";
            $target_file = $target_dir . basename($fileName);
            $result = move_uploaded_file($fileNameTemp, $target_file);
            $updateProduct = mysqli_query($connect, "UPDATE `product` SET `tenPet`='$tenPet',`giaPet`='$giaPet', `moTa`='$moTa', `hinhPet`='$fileName' WHERE `maPet`='$maPet'");
            if ($updateProduct) {
                echo json_encode(["success" => 1, "msg" => "Cập nhật thành công."]);
            } else {
                echo json_encode(["success" => 0, "msg" => "Chưa cập nhật sản phẩm!"]);
            }
        } else {
            $updateProduct = mysqli_query($connect, "UPDATE `product` SET `tenPet`='$tenPet',`giaPet`='$giaPet', `moTa`='$moTa' WHERE `maPet`='$maPet'");
            if ($updateProduct) {
                echo json_encode(["success" => 1, "msg" => "Cập nhật thành công."]);
            } else {
                echo json_encode(["success" => 0, "msg" => "Chưa cập nhật sản phẩm!"]);
            }
        }
    } catch (Exception $e) {
        echo json_encode(["success" => 0, "msg" => $e->getMessage()]);
    }
} else {
    $error = "";
    if (!isset($_POST['tenPet'])) {
        $error .=  "Hãy nhập vào tên sản phẩm";
    }
    if (!isset($_POST['giaPet'])) {
        $error .=  "Hãy nhập vào giá sản phẩm";
    }
    if (!isset($_POST['moTa'])) {
        $error .=  "Hãy nhập vào mô tả";
    }
    if (!isset($_POST['hinhPet'])) {
        $error .=  "Hãy nhập vào hình sản phẩm";
    }
    echo json_encode(["success" => 0, "msg" => $error]);
}
