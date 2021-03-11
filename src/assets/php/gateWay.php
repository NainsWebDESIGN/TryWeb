<?php
header('Content-Type: application/json; charset=UTF-8'); //設定資料類型為 json，編碼 utf-8
if ($_SERVER['REQUEST_METHOD'] == "POST") { //如果是 POST 請求
    @$Table = $_POST['type']; //取得 nickname POST 值
    $data = array();
    $DB_server = "localhost"; # 你的網域IP
    $DB_user = "your username"; # 你的帳號
    $DB_pass = "your password"; # 你的密碼
    $DB_name = "you database"; # 你的資料庫

    $connection = new mysqli($DB_server, $DB_user, $DB_pass, $DB_name);

    $sqlTable = "SELECT * FROM $Table;"; #查詢資料表

    if($connection -> connect_error){
        $data = array( 'failed' => $connection -> connect_error );
    }else{
        // $data = array( 'succes' => "成功連線到資料庫" );
        if($result = $connection->query($sqlTable)){
            while($row = $result->fetch_row()){
                if($Table == 'header'){ array_push($data, array('title' => $row[1], 'href' => $row[2])); }
                else if($Table == 'portfolio'){ array_push($data, array('filter' => $row[1], 'image' => $row[2], 'title' => $row[3], 'subtitle' => $row[4])); }
                else if($Table == 'blog'){ array_push($data, array('image' => $row[1], 'date' => $row[2], 'name' => $row[3], 'content' => $row[4])); }
                else { $data = array( 'failedSelect' => '查詢失敗' ); }
            }
            $result->close();
        }else{
            $data = array( 'selectFailed' => $connection->error );
        }
    }
    $connection->close();
    echo json_encode($data);
} else {
    //回傳 errorMsg json 資料
        $data = array( 'errorMsg' => '請求無效，只允許 POST 方式訪問！' );
    echo json_encode($data);
}
?>