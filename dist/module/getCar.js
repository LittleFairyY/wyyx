define(['url',"template","cookie"], function(url,template) {
  function GetCarData(){
    this.userId=$.cookie("userId");
    this.sum=0;
    this.allPrice=0
  };

  GetCarData.prototype.getData=function(){
    var that=this;
    $.get(url.url+"/v1/getCar.php",{"userId":that.userId},function(datas){
      var str=template("carPro",{data:datas.data});
      $('.carPro').append($(str));
      that.subt();
      that.add();
      that.del();
      that.allElect();
      that.lostDele();
      if(Number($(".allCount").html())==0){
        $(".already").prop("checked",false);
      }
    },"json");
  }

  //数量自减
  GetCarData.prototype.subt=function(){
    var that=this;
    $(".subtract").on("click",function(){
      var _this=this;
        var obj={};
        var val=$(this).siblings().eq(0).val();
        val--;
        if(val<1){
          val=1;
          $(_this).addClass("c");
          return;
        }else{
          $(_this).removeClass("c");
        }
        $(this).siblings().eq(0).val(val);
        var proId=$(this).parents("li").find(".proName").attr("data-id");
        obj.proId=proId;
        obj.userId=that.userId;
        obj.num=$(this).siblings().eq(0).val();
        $.post(url.url+"/v1/upDateCarNum.php",obj,function(data){
          if(data.code==1){
            // that.countChange();
            var onePrice=Number($(_this).parents("li").find(".proPrice").html().slice(1));
            var allPrice=Number(obj.num)*onePrice;
            $(_this).parents("li").find(".allPrice").html("￥"+allPrice);
            $(".allCount").html(--that.sum);
            that.allPrice-=Number($(_this).parents("li").find(".proPrice").html().slice(1))
            $("#yifu").html("￥"+that.allPrice);
          }
        },"json");
      });
  }

  // 数量自加
  GetCarData.prototype.add=function(){
    var that=this;
    $(".add").on("click",function(){
      var _this=this;
      var obj={};
      var val=$(this).siblings().eq(1).val();
      val++;
      if(val>99){
        val=99;
        $(_this).addClass("c");
        return;
      }else{
        $(_this).removeClass("c");
      }
      $(this).siblings().eq(1).val(val);
      var proId=$(this).parents("li").find(".proName").attr("data-id");
      obj.proId=proId;
      obj.userId=that.userId;
      obj.num=$(this).siblings().eq(1).val();
      $.post(url.url+"/v1/upDateCarNum.php",obj,function(data){
        if(data.code==1){
          var onePrice=Number($(_this).parents("li").find(".proPrice").html().slice(1));
          var allPrice=Number(obj.num)*onePrice;
          $(_this).parents("li").find(".allPrice").html("￥"+allPrice);
          $(".allCount").html(++that.sum);
          that.allPrice+=Number($(_this).parents("li").find(".proPrice").html().slice(1))
          $("#yifu").html("￥"+that.allPrice);
        }
      },"json");
    });
  }

  //删除
  GetCarData.prototype.del=function(){
    var that=this;
    $(".del").on("click",function(){
      var _this=this;
      var obj={};
      obj.proId=$(this).parents("li").find(".proName").attr("data-id");
      obj.userId=that.userId;
      $.post(url.url+"/v1/delectCar.php",obj,function(datas){
        if(datas.code==1){
          $(_this).parents("li").remove();
        };
      },"json")
    })
  }

  //全选
  GetCarData.prototype.allElect=function(){
    var that=this
    $("#allcheck").on("click",function(){
      $(".sele").prop("checked",this.checked);
      if(!this.checked){
        that.sum=0;
        that.allPrice=0;
        $(".allCount").html(that.sum);
        $("#yifu").html("￥"+that.allPrice);
        $(".already").prop("checked",false);
      }else{
        that.countChange();
        // $(".already").attr("checked",true);
      }
    });
    var arr=[false,false];
    $(".sele").each(function(i,val){
      if($(this).prop("checked")){
        arr[i]=true;
      }else{
        arr[i]=false;
      }
    });
    var isSele=true;
    $.each(arr,function(i,val){
       if(val==false){
        isSele=false;
       }else{
         isSele=true;
       }
    });
    $("#allcheck").prop("checked",isSele);
    that.countChange()
  }

  //切换总数量
  GetCarData.prototype.countChange=function(){
    var that=this;
    $(".sele").each(function(){
      that.sum+=Number($(this).parents("li").find(".carCount").val());
      that.allPrice+=Number($(this).parents("li").find(".allPrice").html().slice(1));
    });
    if(that.sum>0){
      $(".already").prop("checked",true);
    }
    $(".allCount").html(that.sum);
    $("#yifu").html("￥"+that.allPrice);
  }  

  //批量删除
  GetCarData.prototype.lostDele=function(){
    var that=this;
    $(".delLise").on("click",function(){
      $(".sele").each(function(i,val){
        var _this=this;
        var obj={};
        if($(this).prop("checked")){
          obj.proId=Number($(this).parents("li").find(".proName").attr("data-id"));
          obj.userId=that.userId;
          $.post(url.url+"/v1/delectCar.php",obj,function(datas){
            if(datas.code==1){
              $(_this).parents("li").remove();
            };
          },"json")
        }
      });
    })
  }
  return new GetCarData();
});