define(['url',"template","cookie"], function(url,template) {
  function GetListNav(){};
  GetListNav.prototype.getData=function(){
    var sid=window.location.search.split("=")[1];
      var str="";
        $.get(url.url+"/v1/getProList.php",{childId:sid},function(datas){
         $.each(datas,function(i,val){
          str+=`<a href='#${val.titleId}'>${val.title}</a>`;
            $.each(val.data,function(index,value){
             value.img=value.img.split(",");
            });
            if(val.data.length>0){
              var div=template("pro_title",{data:val});
              $("#allpro").append($(div));
            }
         });
         $("#proItem").html(str);
        },"json");
  }
  GetListNav.prototype.pro=function(){
    $.get(url.url+"/v1/search.php",{text:decodeURI($.cookie("text"))},function(data){
      $.each(data.data,function(index,val){
        val.img=val.img.split(",");
      });
      var div=template("pro_info",{data:data.data});
      $(".pro").append($(div));
    },"json")
  }
  return new GetListNav();
});