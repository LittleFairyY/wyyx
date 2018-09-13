define(['url',"template"], function(url,template) {
  function GetListNav(){};
  GetListNav.prototype.getData=function(){
    var sid=window.location.search.split("=")[1];
    $.get(url.url+"/v1/getNav.php",{"sid":sid},function(datas){
      var div=template("pro_title",{data:datas.data});
      $("#allpro").append($(div));
      var str="";
      $.each(datas.data,function(index,val){
        str+=`<a href='#${val.id}'>${val.navName}</a>`;
        $.get(url.url+"/v1/getProList.php",{"type":val.id},function(datass){
         $.each(datass.data,function(i,val){
            val.img=val.img.split(",");
         });
         if(datass.data.length==0){
          $(".pro_show").eq(index).hide();
         }
         var li=template("pro_info",{data:datass.data});
         $(".pro").eq(index).append($(li))
        },"json");
      });
      $("#proItem").html(str);
    },"json")
  }
  return new GetListNav();
});