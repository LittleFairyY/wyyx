<?php
  header("Access-Control-Allow-Origin:*");
  $childId=$_GET["childId"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql="select * from nav where childId=$childId";
  mysql_query("set names 'utf8'");
  $result = mysql_query($sql);
  $arr=array();
  while($row=mysql_fetch_assoc($result)){
    $id=$row['id'];
    $sql1="select * from pro where type='$id'";
    $result1 = mysql_query($sql1);
    $arrs=array();
    while($rows=mysql_fetch_assoc($result1)){
      array_push($arrs,$rows);
    }
    $obj =array('titleId' => $row['id'],'title' => $row["navName"],'description' => $row["description"],"data" => $arrs);
      array_push($arr,$obj);
  }
  echo json_encode($arr);
  mysql_close();
?>