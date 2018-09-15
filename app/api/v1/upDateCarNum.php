<?php
 header("Access-Control-Allow-Origin:*");
 $userId=$_POST["userId"];
 $proId=$_POST["proId"];
 $num=$_POST["num"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  mysql_query("set names utf8");
  $sql="UPDATE car set num=$num where userId=$userId && proId=$proId";
  $res=mysql_query($sql);
  if($result){
    echo '{"code":0}';
  }else{
    echo '{"code":1}';
  }
  mysql_close();
?>