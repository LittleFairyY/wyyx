define(function() {
  return {
    head:function(ele){
     $("#header").load("/html/header.html #head",function(){
      var $height=$("#header_top").height()+$("#logobox").height();
      $(window).on("scroll",function(){
        if($(window).scrollTop()>=$height){
          $("#navfxied").addClass("navfxied");
        }else{
          $("#navfxied").removeClass("navfxied");
        }
      })
     });
    },
    foot:function(ele){
      $("#footer").load("/html/footer.html #foot");
    }
  }
});