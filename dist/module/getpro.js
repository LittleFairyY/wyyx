define([
  'url',"template"
], function(url,template) {
  function GetData(){};
  GetData.prototype.getData=function(){
    //获取id
    var id=window.location.search.split("=")[1];
    //通过传id到后台 后台通过id查询数据 并返回到前台
    $.get(url.url+"/v1/getData.php",{"id":id},function(datas){
      //面包屑导航
      $(".crumbsProName").html(datas.data[0].proName);
      $.get(url.url+"/v1/getItem.php",{"sid":datas.data[0].type},function(datas){
        $(".twoCrubs").html(datas.data[0].navName);
        $.get(url.url+"/v1/getItem.php",{"sid":datas.data[0].childId},function(datas){
          $.cookie("index",datas.data[0].id,{path:"/"});
        $(".oneCrubs").html(datas.data[0].navName).attr("href","/html/list.html?type="+datas.data[0].id);
        },"json")
      },"json");

      //将数据库存的图片分割成数组
      datas.data[0].img=datas.data[0].img.split(",");
      datas.data[0].bigimg=datas.data[0].bigimg.split(",");
      datas.data[0].smallimg=datas.data[0].smallimg.split(",");
      var str=template("proInfo",{data:datas.data[0]});
      $(".proinfo_show").append($(str));
      //鼠标移入查看大图
      $(".proinfo_left>ul>li").on("mouseenter",function(){
        $(this).addClass("bor").siblings().removeClass("bor");
        var index=$(this).index();
        $(".proinfo_left >img").attr("src",datas.data[0].bigimg[index]);
      });
      //加入购物车
      $("#addCar").on("click",function(){
        var obj={}
        obj.img=datas.data[0].smallimg[0];
        obj.userId=$.cookie("userId");
        obj.proId=datas.data[0].id;
        obj.onePrice=datas.data[0].xprice;
        obj.num=1;
        $.post(url.url+"/v1/postCar.php",obj,function(datas){
          if(datas.code!=1){
            alert("加入购物车失败！");
          }else{
            $(".count").html(Number($(".count").html())+obj.num);
          }
        },"json")
        
      });
    },"json");
  }
  return new GetData();
});