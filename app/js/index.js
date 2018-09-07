require(['config'],function(){
    require(['jquery','base',"slider","getNewPro","getHotPro"],function($,base,slider,getNewPro,getHotPro){
      $(function(){
        //头部
        base.head();
        //尾部
        base.foot();
        //轮播图
        slider.slider($("#banner"));
        //新品首发
        getNewPro.getData();
        //热门推荐
        $("#hotPros").find("h1 span i").on("click",function(){
          // $(this).addClass("active").slibings().removeClass("active");
        })
        getHotPro.getData();
      });
    });
});
