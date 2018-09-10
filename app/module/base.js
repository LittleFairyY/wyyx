define(["url","cookie"],function(url) {
  return {
    head:function(){
     $("#header").load("/html/header.html #head",function(){
       if($.cookie("userTell")){
        $("#isdl").html($.cookie("userTell"));
        $("#navLogin").attr("href","javascript:;");
       }else{
        $("#isdl").html(`<a href="/html/denglu.html">登录</a>
                        <a href="/html/denglu.html?mated=ze">注册</a><span>|</span>
                        `)
       }
      var $height=$("#header_top").height()+$("#logobox").height();

      $(window).on("scroll",function(){
        if($(window).scrollTop()>=$height){
          $("#navfxied").addClass("navfxied");
        }else{
          $("#navfxied").removeClass("navfxied");
        }
      });
      // $(".nav_item")
      $.get(url.url+"/v1/getNav.php",{"sid":0},function(datas){
        var str="";
        $.each(datas.data,function(index,val){
          if(window.location.search==""){
            $.cookie("index",1);
          }
          if(val.id==$.cookie("index")){
            str+=`<li><a href="/html/list.html?type=${val.id}" class="active" data-index='${val.id}' data-type='${val.type}'>${val.navName}</a></li>`;
          }else{
            str+=`<li><a href="/html/list.html?type=${val.id}" data-index='${val.id}' data-type='${val.type}'>${val.navName}</a></li>`;
          }
        });
        $("#nav").html(str).find("li a").on("click",function(){
          $.cookie("index",$(this).attr("data-index"),{path:"/"});
        });

      },"json")
     });
    },
    foot:function(){
      $("#footer").load("/html/footer.html #foot");
    }
  }
});