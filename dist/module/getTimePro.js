define([
  'url',
  'template'
], function(url, template) {
  function GetTimePro(){}
  GetTimePro.prototype.getData=function(){
    $(function(){
      $.get(url.url+"/v1/getTimePro.php",function(datas){
        $.each(datas.data,function(index,data1){
          data1.img=data1.img.split(",");
            var $str=template("timePro",{data:data1});
            $("#time_left").append($($str));
            //进度条的比例
            var bi=Number((data1.allRepertory)-Number(data1.repertory))/Number(data1.allRepertory);
            //如果比例等于1代表已卖完
            if(bi==1){
              $("#time_left a").eq(index).find("button").remove();
              $("#time_left a").eq(index).find("p").show();
            }
            //进度条样式
            $("#time_left a").eq(index).find(".t_progress i").css("width",$(".t_progress:eq(0)").outerWidth()*bi);
            // var time=$()
          });
          

        // $("#time_left a").on("click",function(){
        //   var id=$(this).attr("data-index");
        //   window.location.href="/html/xi.html?id="+id;
        // })
      },"json")
    });
  }
  return new GetTimePro();
});