define(["cookie"],function(){
  function CheckLogin(){};
  CheckLogin.prototype.checkLogin=function(){
    $(function(){
      if($.cookie("userTell")){
        $(".login_button").hide();
      }else{
        $(".login_button").show();

      }
    })
  }
  return new CheckLogin();
})