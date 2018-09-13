define(["url","cookie","md5"],function(url,cookie){
  function Check(){
    this.checkArr=[false,false,false,false];
  };
  //判断是注册页面还是登录页面
  Check.prototype.init=function(){
    if(window.location.search!=""){
      $("#iframe").attr("src","/html/register.html");
    }
  }
  
  Check.prototype.check=function(){
    var that=this;
    //用户名验证
    var usernameReg=/^1[3549][135497]\d{8}$/;
    $("#userName").on("blur",function(){
      that.checktext($(this),usernameReg,0);
    });
    //邮箱验证
    var emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    $("#userEmail").on("blur",function(){
      that.checktext($(this),emailReg,1);
    });
    //密码验证
    var userPwdReg=/^[a-zA-Z]{3}\d{3}/;
    $("#userPwd").on("blur",function(){
      that.checktext($(this),userPwdReg,2);
      if($("#oldPwd").val()!=""){
        if($("#oldPwd").val()!=$(this).val() && $(this).val()!=""){
          $("#oldPwd").parent().find("i").show().removeClass("succ");
           that.checkArr[3]=false;
        }else{
          $("#oldPwd").parent().find("i").show().addClass("succ");
        that.checkArr[3]=true;
        }
      }
    });
    //再次输入密码验证
    $("#oldPwd").on("blur",function(){
      if($(this).val()==$("#userPwd").val() && $("#userPwd").val()!=""){
        $(this).parent().find("i").show().addClass("succ");
      that.checkArr[3]=true;
      }else{
        $(this).parent().find("i").show().removeClass("succ");
      that.checkArr[3]=false;
      }
    });
    this.register();
  }
  //检查文本是否符合规则
  Check.prototype.checktext=function(ele,reg,index){
    var str=ele.val();
    if(reg.test(str)){
      ele.parent().find("i").show().addClass("succ");
      this.checkArr[index]=true;
    }else{
      ele.parent().find("i").show().removeClass("succ");
      this.checkArr[index]=false;
    }
  }
  //是否可以注册
  Check.prototype.register=function(){
    var that=this;
    var isSuss=true;
    $("#register_btn").on("click",function(e){
      $.each(that.checkArr,function(i,val){
        if(val==false){
          e.preventDefault();
          isSuss=false;
        }else{
          isSuss=true;
        }
      });
      if(isSuss){
        var userName=$("#userName").val(),
            userEmail=$("#userEmail").val(),
            userPwd=hex_md5($("#userPwd").val());
        $.post(url.url+"/v1/userRegister.php",{"userName":userName,"userEmail":userEmail,"userPwd":userPwd},function(datas){
          if(datas.code==0){
            $("#hint").html("不能使用同一个电话号码只能绑定一个邮箱！");
            e.preventDefault();
          } else if(datas.code==2){
            $("#hint").htmlt("注册失败！");
            e.preventDefault();
          }else if(datas.code==1){
            $("#hint").html("恭喜你注册成功！");
          }
        },"json")
      }else{
        $("#hint").html("请按规定注册账号！");
      e.preventDefault();
      }
    });
  }
  //是否可以登录
  Check.prototype.login=function(){
    $("#login_btn").on("click",function(){
      var userTell=$("#userName").val(),
          userPwd=hex_md5($("#userPwd").val());
      $.get(url.url+"/v1/userLogin.php",{"userName":userTell,"userPwd":userPwd},function(datas){
        if(datas.data.length==0){
          $("#hint").html("请输入正确的用户名和密码！");
        }else{
          $.cookie("userTell",datas.data[0].userTell,{path:"/"});
          $.cookie("userId",datas.data[0].userId,{path:"/"});
          parent.location.href="/index.html";
        }
      },"json")
    })
  }
  return new Check();
})