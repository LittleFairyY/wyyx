"use strict";define(["url"],function(e){function n(){}return n.prototype.change=function(){$(".login>h1>a").on("click",function(){$(this).addClass("loginActive").siblings().removeClass("loginActive"),0==$(this).index()?($("#userName").attr("placeholder","手机号登录"),$(".userNameLabel").css("background-image","url(/img/login/js.png)")):($("#userName").attr("placeholder","邮箱账号"),$(".userNameLabel").css("background-image","url(/img/login/rt.png)"))}),$("#rg").on("click",function(){})},new n});