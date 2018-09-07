define(["url","template"],function(url,template) {
   function GetHotPro(){}
   GetHotPro.prototype.getData=function(){
     $.get(url.url+"/v1/getHotPro.php",{kind:"bjtj"},function(datas){
      // console.log(datas)
      $.each(datas.data,function(index,data1){
        console.log(data1)
        data1.img=data1.img.split(",");
        if(index!=0){
          var $str=template("hotPro",{data:data1});
          $("#hotPros_right").append($($str));
        }else{
          var str=$(`<a href="javascript:void(0)">
                      <img src="${data1.img[0]}" alt="">
                      <div>
                        <h2>${data1.proName}</h2>
                        <span class="price">￥${data1.xprice}</span>
                      </div>
                    </a>`)
          $("#hotPros_left").append(str)
        }
        
      })
     },"json")

   }
   return new GetHotPro();
  
});