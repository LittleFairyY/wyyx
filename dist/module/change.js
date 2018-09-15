define(['url'], function(url) {
  function Change(){};
  Change.prototype.change=function(){
    $(".login>h1>a").on("click",function(){
      $(this).addClass("loginActive").siblings().removeClass("loginActive");
      if($(this).index()==0){
        $("#userName").attr("placeholder","手机号登录");
        $(".userNameLabel").css("background-image","url(/img/login/js.png)");
      }else{
         $("#userName").attr("placeholder","邮箱账号");
         $(".userNameLabel").css("background-image","url(/img/login/rt.png)");
      }
    })
  }
  return new Change();
});