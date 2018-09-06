define(function() {
  return {
    head:function(ele){
     ele.load("html/header.html #head");
    },
    foot:function(ele){
      ele.load("html/footer.html #foot");
    }
  }
});