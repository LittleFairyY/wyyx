define(["template","url"],function(template,url) {
  function GetNewPro(){};
  GetNewPro.prototype.getData=function(){
    $.get(url.url+"/v1/getNewPro.php",function(datas){
      $.each(datas.data,function(index,data){
        data.img=data.img.split(",");
        var $str =template("list",{data:data});
        //加入ul
        $("#newPro").find("ul").append($($str));
      })
      //鼠标移上效果
      $("#newImg").find("ul li").hover(function(){
        var $index=$(this).index();
        $(this).addClass("ac").find("a img").attr("src",datas.data[$index].img[1])
      },function(){
        var $index=$(this).index();
        $(this).removeClass("ac").find("a img").attr("src",datas.data[$index].img[0])
      });
    },"json");
  }
  return new GetNewPro();
});