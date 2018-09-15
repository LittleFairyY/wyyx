<?php
  header("Access-Control-Allow-Origin:*");
  $userTell=$_POST["userName"];
  $userPwd=$_POST["userPwd"];
  $userEmail=$_POST["userEmail"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql1="select * from user where userTell='$userTell' or userEmail='$userEmail'";
  $result1 = mysql_query($sql1);
  $res=mysql_fetch_assoc($result1);
  if($res){
    echo '{"code":0}';
  }else{
    $sql="INSERT INTO user (userTell,userPwd,userEmail) VALUES ('$userTell','$userPwd','$userEmail')";
    mysql_query("set names 'utf8'");
    $result = mysql_query($sql);
    if($result){
      echo '{"code":1}';
    }else{
      echo '{"code":2}';
    }
  }
  mysql_close();
?>