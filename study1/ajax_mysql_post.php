<?php
#连接数据库

$conn=mysqli_connect("localhost","root","","ajaxtest");

if(isset($_POST['name'])&&isset($_POST['age'])){
    #转换拿到的数据
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $age=mysqli_real_escape_string($conn,$_POST['age']);
    $query="INSERT INTO users(name,age) VALUE('$name','$age')";
    mysqli_query($conn,"set name utf8");
    if(mysqli_query($conn,$query)){
    echo "insert user successfully. name:".$_POST['name']."  age:".$_POST['age'];
    }else{
    echo "insert user failure".mysqli_error($conn);
    }
}
else{
    echo "POST ERROR";
}

?>