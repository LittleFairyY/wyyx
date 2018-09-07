<?php
  header("Access-Control-Allow-Origin:*");
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql="select * from pro where kind='xp' LIMIT 4";
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