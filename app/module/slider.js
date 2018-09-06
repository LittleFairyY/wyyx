define(function() {
  return {
    slider:function(ele){
      var index=$("#slider li").size()-1;
      $("#slider li").each(function(i){
        //动态添加按钮
        var $olLi=$('<li></li>');
        i==index?$olLi.addClass("active"):"";
        ele.find("ol").append($olLi);
        //添加点击事件
        $olLi.on("click",function(){
          $(this).addClass("active").siblings().removeClass("active");
          $("#slider li").eq(index).fadeOut();
          //更改索引
          index=$(this).index();
          $("#slider li").eq(index).fadeIn();
        })
      })
      
    }
  }
});