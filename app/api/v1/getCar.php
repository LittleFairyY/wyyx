<?php
  header("Access-Control-Allow-Origin:*");
  $id=$_GET["userId"];
  $count=$page*4;
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  $sql1="select *  from car where userId=$id";
  mysql_query("set names utf8");
  $result1=mysql_query($sql1);
  //购物车总的商品数量
  $AllCount=0;
  $arr=array();
  while($row=mysql_fetch_assoc($result1)){
      $proId=$row['proId'];
      $sql2="select proName from pro where id=$proId";
      mysql_query("set names utf8");
      $res=mysql_query($sql2);
      while($rows=mysql_fetch_assoc($res)){
        $proName=$rows['proName'];
        $row['proName']=$proName;
      }
      $AllCount+=$row['num'];
      array_push($arr,$row);
  }
  $obj=array('allCount' => $AllCount,'data' => $arr);
  echo json_encode($obj);
  mysql_close();
?>