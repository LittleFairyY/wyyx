<?php
  header("Access-Control-Allow-Origin:*");
  $kind=$_GET["kind"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql="select * from pro where kind='$kind' or kind='bjz' LIMIT 7";
  mysql_query("set names 'utf8'");
  $result = mysql_query($sql);
  $arr=array();
  while($row=mysql_fetch_assoc($result)){
      array_push($arr,$row);
  }
  $obj=array('data' => $arr);
  echo json_encode($obj);
  mysql_close();
?>