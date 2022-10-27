<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8"); 
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization , X-Requested-With");

$connect = new mysqLi("localhost","root","","petstore");

$allNews = $connect->query("SELECT * FROM tbl_khachhang");

if($allNews->num_rows > 0){
    $all_news = $allNews-> fetch_all(MYSQLI_ASSOC);

    echo json_encode(["success"=> 1,"customers"=>$all_news]);
}   else {
    echo json_encode(["success"=> 0]);
}
$connect->close();