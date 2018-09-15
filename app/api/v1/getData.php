<?php
 header("Access-Control-Allow-Origin:*");
 $id=$_GET["id"];
 mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  mysql_query("set names utf8");
  $sql="select * from pro where id=$id";
  $res=mysql_query($sql);
  $arr=array();
  while($row=mysql_fetch_assoc($res)){
      array_push($arr,$row);
  }
  $obj=array('data' => $arr);
  echo json_encode($obj);
  mysql_close();
?>