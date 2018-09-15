<?php
  header("Access-Control-Allow-Origin:*");
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql="select * from nav where childId=0";
  mysql_query("set names 'utf8'");
  $result = mysql_query($sql);
  $arr=array();
  while($row=mysql_fetch_assoc($result)){
    $id=$row['id'];
    $sql1="select * from nav where childId=$id";
    $result1 = mysql_query($sql1);
    $arrs=array();
    while($rows=mysql_fetch_assoc($result1)){
      array_push($arrs,$rows);
     
    }
    $obj =array('parentId' => $row['id'],'parentTitle' => $row["navName"],"data" => $arrs);
    array_push($arr,$obj);
      // array_push($arr,$row);
  }
  // $obj=array('data' => $arr);
  echo json_encode($arr);
  mysql_close();
?>