define(["url","template"],function(url,template) {
   function GetHotPro(){}
   GetHotPro.prototype.getData=function(title,title1){
     $.get(url.url+"/v1/getHotPro.php",{kind:title,left:title1},function(datas){
      $("#hotPros_right").html("");
      $.each(datas.data,function(index,data1){
        data1.img=data1.img.split(",");
        if(index!=0){
          var $str=template("hotPro",{data:data1});
          $("#hotPros_right").append($($str));
        }else{
          $("#hotPros_left").html("");
          var str=$(`<a href="/html/details.html?id=${data1.id}">
                      <img src="${data1.img[0]}" alt="">
                      <div>
                        <h2>${data1.proName}</h2>
                        <span class="price">￥${data1.xprice}</span>
                      </div>
                    </a>`)
          $("#hotPros_left").append(str)
        }
      })
     },"json")
   }
   //切换
   GetHotPro.prototype.change=function(){
     var _this=this;
    $("#hotPros").find("h1 span i").on("click",function(){
      if($(this).html()== "编辑推荐"){
        _this.getData("bjtj","bjz");
      }else{
        _this.getData("rqtj","rqz");
      }
      $(this).addClass("active").siblings().removeClass("active");
    })
   }
   return new GetHotPro();
  
});