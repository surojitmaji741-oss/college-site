<?php
header('Content-Type: application/json');
$servername="localhost";
$username="root";
$password="";
$dbname="svu";
try{
    $conn=new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    echo "FAILED" . $e->getMessage();
}
?> 