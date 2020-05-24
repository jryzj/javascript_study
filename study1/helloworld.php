<?php
echo "hello world!";
if(isset($_GET['name'])){
echo "GET: name is ".$_GET['name']."\n";
}

if(isset($_GET['age'])){
echo "GET: age is ".$_GET['age'];
}

if(isset($_GET['gent'])){
echo "GET: gent is ".$_GET['gent'];
}

if(isset($_POST['name'])){
echo "POST: name is ".$_POST['name'];
}

if(isset($_POST['age'])){
echo "POST: age is ".$_POST['age'];
}



?>
