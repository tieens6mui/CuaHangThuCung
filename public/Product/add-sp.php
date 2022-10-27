<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept");


require 'db_connection.php';

// POST DATA
// $data = json_decode(file_get_contents("php://input"));

if (
    isset($_POST['tenPet']) && isset($_POST['giaPet']) && isset($_POST['moTa'])
) {
    try{
        $tenPet = mysqli_real_escape_string($connect, $_POST['tenPet']);
        $giaPet = mysqli_real_escape_string($connect, $_POST['giaPet']);
        $moTa = mysqli_real_escape_string($connect, $_POST['moTa']);
        if (!file_exists('images/')) {
            mkdir('images/', 0777, true);
        }
        $fileName = $_FILES["hinhPet"]["name"];
        $fileNameTemp = $_FILES["hinhPet"]["tmp_name"];
        $target_dir = "images/";
        $target_file = $target_dir . basename($fileName);
        $result = move_uploaded_file($fileNameTemp, $target_file);
        $insertProduct = mysqli_query($connect, "INSERT INTO `product`(`tenPet`,`giaPet`,`moTa`,`hinhPet`) VALUES('$tenPet','$giaPet','$moTa','$fileName')");
        if ($insertProduct) {
            $last_id = mysqli_insert_id($connect);
            echo json_encode(["success" => 1, "msg" => "Thêm sản phẩm thành công.", "id_user" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Không thêm được sản phẩm!"]);
        }
    }catch(\Exception $e){
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
