<?php
 header("Access-Control-Allow-Origin:*");
 $userId=$_POST["userId"];
 $proId=$_POST["proId"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  mysql_query("set names utf8");
  $sql="DELETE FROM car WHERE userId=$userId && proId=$proId";
  $res=mysql_query($sql);
  if($result){
    echo '{"code":0}';
  }else{
    echo '{"code":1}';
  }
  mysql_close();
?>