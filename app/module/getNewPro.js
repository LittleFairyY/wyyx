define(["template","url"],function(template,url) {
  function GetNewPro(){
    this.index=0;
    this.page=0;
  };
  GetNewPro.prototype.getData=function(){
    var that=this;
    $.get(url.url+"/v1/getNewPro.php",{index:this.index},function(datas){
      console.log(1)
      $("#newPro").find("ul").html("");
      that.page=datas.allCount;
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
  GetNewPro.prototype.change=function(){
    var that=this;
    $(".new_prve").on("click",function(){
      that.index--;
      if(that.index<0){
        that.index=Math.ceil(that.page/4)-1;
      }
      that.getData();
    });
    $(".new_next").on("click",function(){
      that.index++;
      if(that.index>=Math.ceil(that.page/4)){
        that.index=0;
      }
      that.getData();
    });
  }
  return new GetNewPro();
});