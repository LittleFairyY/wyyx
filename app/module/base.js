define(["url","cookie"],function(url) {
  function Base(){};
  Base.prototype.head=function(){
    var that=this;
    $("#header").load("/html/header.html #head",function(){
      that.isLogin();
      that.fixedNav();
      that.nav();
      that.car();
      that.search();
    });
  }
  //是否登录
  Base.prototype.isLogin=function(){
    if($.cookie("userId")){
      $("#isdl").html($.cookie("userTell"));
      $("#navLogin").attr("href","javascript:;");
    }else{
      $("#isdl").html(`<a href="/html/denglu.html">登录</a>
                      <a href="/html/denglu.html?mated=ze">注册</a><span>|</span>
                      `);
    }
  }
  //固定导航
  Base.prototype.fixedNav=function(){
    var $height=$("#header_top").height()+$("#logobox").height();
    $(window).on("scroll",function(){
      if($(window).scrollTop()>=$height){
        $("#navfxied").addClass("navfxied");
      }else{
        $("#navfxied").removeClass("navfxied");
      }
    });
  }
  //购物车
  Base.prototype.car=function(){
    $.get(url.url+"/v1/getCar.php",{"userId":$.cookie("userId")},function(datas){
      $(".count").html(datas.allCount).parent().on("click",function(){
        if($.cookie("userId")){
          window.location.href="/html/car.html";
        }else{
          if(confirm("请登录！")){
            window.location.href="/html/denglu.html";
          }
        }
      });
    },"json");
  }
  // nav样式
  Base.prototype.nav=function(){
    $.get(url.url+"/v1/getNav.php",function(data){
      var str="";
      $.each(data,function(index,val){
        if(window.location.search==""){
          $.cookie("index",0,{path:"/"});
        }else{
          $("#nav").find("li:eq("+($.cookie("index"))+")>a").addClass("active").parents("li").siblings().find("a").removeClass("active");
        }
        if(val.data.length!=0){
          str=`<li>
                <a href="/html/list.html?type=${val.parentId}">${val.parentTitle}</a>
                <div class="nav_item">
                  <div class="smallNav">`;
          $.each(val.data,function(i,value){
            str+=`
            <dl>
              <dt><img src="${value.img}" alt=""></dt>
              <dd><a href="/html/list.html?type=${val.parentId}">${value.navName}</a></dd>
            </dl>`;
          });
          str+=`</div>
                  </div>
                </li>`;
        }else{
          str=`<li>
                <a href="/html/list.html?type=${val.parentId}" data-index='${val.parentId}'>${val.parentTitle}</a>
              </li>`;
        }
        $("#nav").append($(str));
      });
      $("#nav").find("li").hover(function(){
        $(this).find(".nav_item").show();
      },function(){
        $(this).find(".nav_item").hide();
      }).parent().find("li a").on("click",function(){
        $("#nav").find("li:eq(0)>a").attr("href","/index.html")
        $.cookie("index",($(this).parents("li").index()),{path:"/"});
        $("#nav").find("li:eq("+($.cookie("index"))+")>a").addClass("active").parents("li").siblings().find("a").removeClass("active");
      });
      if(window.location.pathname!="/html/list.html" && window.location.pathname!="/index.html"){
        $("#nav").find("li>a").removeClass("active")
      }
      if($.cookie("index")==0){
        $("#nav").find("li:eq(0)>a").addClass("active").attr("href","/index.html").siblings().parents("li").find("a").removeClass("active")
      }
    },"json");
  }
  //尾部
  Base.prototype.foot=function(){
    $("#footer").load("/html/footer.html #foot");
  }
  //搜索
  Base.prototype.search=function(){
    $("#btn").on("click",function(){
      var text=encodeURI($("#text").val());
      if(text!=""){
        $.cookie("text",text,{path:"/"});
        window.location.href="/html/seach.html";
      }
    })
  }
  return new Base();
});