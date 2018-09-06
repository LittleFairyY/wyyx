define(function() {
  return {
    slider:function(ele){
      var $olLis=[];
      var $index=$("#slider li").size()-1;
      var timer=null;
      //小圆点切换图片
      $("#slider li").each(function(i){
        //动态添加按钮
        var $olLi=$('<li></li>');
        i==$index?$olLi.addClass("active"):"";
        ele.find("ol").append($olLi);
        $olLis.push($olLi);
        //添加点击事件
        $olLi.on("click",function(){
          $(this).addClass("active").siblings().removeClass("active");
          //更改索引
          $index=$(this).index();
          $("#slider li").eq($index).fadeIn(1000).siblings().stop(false,false).fadeOut(1000);
        })
      })
      //手动切换图片
      $("#btnBox").on("click","#prevBtn,#nextBtn",function(e){
        if(e.currentTarget.id=="prevBtn"){
          $index--;
          if($index<0){
            $index=$olLis.length-1;
          }
          $("#slider li").eq($index).stop(false,false).fadeIn(1000).siblings().stop(false,false).fadeOut(1000);
          $olLis[$index].addClass("active").siblings().removeClass("active");
        }else{
          next()
        }
      });
      autoPlay();
      //鼠标移入移出
      ele.hover(function(){
        clearInterval(timer);
      },function(){
        autoPlay();
      });
      //自动播放
      function autoPlay(){
        timer=setInterval(function(){
          next()
        },2000);
      }
      function next(){
        $index++;
        if($index>$olLis.length-1){
          $index=0;
        }
        $("#slider li").eq($index).stop(false,false).fadeIn(1000).siblings().stop(false,false).fadeOut(1000);
        $olLis[$index].addClass("active").siblings().removeClass("active");
      }
    }
  }
});