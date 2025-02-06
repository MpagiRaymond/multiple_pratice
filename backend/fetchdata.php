<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json");

require "conn.php";

// $sql = "SELECT * FROM details";
// $result = $conn->query($sql);

// $data = array();

// if ($result->num_rows > 0) {
//     while($row = $result->fetch_assoc()) {
//         $data[] = $row;
//     }
// } else {
//     echo "0 results";
// }


// $conn->close();
//kkkkk
$data = array();

$sql = "SELECT * FROM details";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0) {
    while($rows = $result -> fetch_assoc()){
        $data[] = $rows;
        // print_r($data);
    }
}else{
    echo "0 results";
}

echo json_encode($data);
?>
