<?php
  header("Access-Control-Allow-Origin:*");
  $page=$_GET["index"];
  $count=$page*4;
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql1="select count(*) as allcount from pro where kind='xp'";
  $result1=mysql_query($sql1);
  $AllCount=mysql_fetch_assoc($result1);
  $sql="select * from pro where kind='xp' LIMIT $count,4";
  mysql_query("set names 'utf8'");
  $result = mysql_query($sql);
  $arr=array();
  while($row=mysql_fetch_assoc($result)){
      array_push($arr,$row);
  }
  $obj=array('allCount' => $AllCount[allcount],'data' => $arr);
  echo json_encode($obj);
  mysql_close();
?>