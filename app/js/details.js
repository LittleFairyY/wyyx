require(["config"],function(){
  require(["jquery","url"],function($,url){
    $(function(){
      console.log(123)
      //获取id
      var id=window.location.search.split("=")[1];
      //通过传id到后台 后台通过id查询数据 并返回到前台
      $.get("http://localhost:8020/wyyxapi/v1/getData.php",{"id":id},function(datas){
        $.each(datas.data,function(index,val){
          // console.log(index,val)
          // $("#box")
          val.img=val.img.split(",");
          var $str=$(`<img src="" alt="">
          <div class="proName">${val.proName}</div>
          <div class="price">${val.xprice}</div>`)
          $("#box").append($str)
          $(".proName").eq(index).attr("data-index",val.id)
        })
        // $("#box").
      },"json")
    })
  })
})