<?php
  header("Access-Control-Allow-Origin:*");
  $img=$_POST["img"];
  $userId=$_POST["userId"];
  $proId=$_POST["proId"];
  $onePrice=$_POST["onePrice"];
  $num=$_POST["num"];
  mysql_connect("localhost","root","");
  mysql_select_db("wyyx");
  //查询该用户是否存在该商品
  $sql1="select * from car where userId='$userId' && proId=$proId";
  $result1 = mysql_query($sql1);
  $arr=array();
  while($row=mysql_fetch_assoc($result1)){
      array_push($arr,$row);
  }
  if(count($arr)==0){
    //如果没有就插入一条数据
    $sql="INSERT INTO car (userId,img,onePrice,num,proId) VALUES ($userId,'$img',$onePrice,$num,$proId)";
    $result = mysql_query($sql);
    echo $result;
    if($result){
      echo '{"code":1}';
    }else{
      echo '{"code":0}';
    }
  }else{
    //如果有就数量加一
    $num2=(int)$arr[0]['num'] + (int)$num;
    $sql="UPDATE car set num=$num2 where userId=$userId && proId=$proId";
    mysql_query("set names 'utf8'");
    $result = mysql_query($sql);
    if($result){
      echo '{"code":1}';
    }else{
      echo '{"code":0}';
    }
  }

  mysql_close();
?>