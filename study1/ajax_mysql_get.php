<?php
#连接数据库

$conn=mysqli_connect("localhost","root","","ajaxtest");

if(isset($_GET['name'])){
    #转换拿到的数据
    $name=mysqli_real_escape_string($conn,$_GET['name']);
    $result=mysqli_query($conn,"SELECT * FROM users WHERE name = '$name'");
    if($result){
        while($row=mysqli_fetch_array($result))
        {
            echo "id:".$row['id']." name:".$row['name']." age:".$row['age'];
            echo"<br>";
        }
    }else{
    echo "query error; ".mysqli_error($conn);
    }
}
else{
    echo "GET ERROR";
}
?>