"use strict";define(function(){return{slider:function(n){var s=[],t=$("#slider li").size()-1,e=null;function i(){e=setInterval(function(){l()},4e3)}function l(){++t>s.length-1&&(t=0),$("#slider li").eq(t).stop(!1,!1).fadeIn(1e3).siblings().stop(!1,!1).fadeOut(1e3),s[t].addClass("active").siblings().removeClass("active")}$("#slider li").each(function(e){var i=$("<li></li>");e==t&&i.addClass("active"),n.find("ol").append(i),s.push(i),i.on("click",function(){$(this).addClass("active").siblings().removeClass("active"),t=$(this).index(),$("#slider li").eq(t).fadeIn(1e3).siblings().stop(!1,!1).fadeOut(1e3)})}),$("#btnBox").on("click","#prevBtn,#nextBtn",function(e){"prevBtn"==e.currentTarget.id?(--t<0&&(t=s.length-1),$("#slider li").eq(t).stop(!1,!1).fadeIn(1e3).siblings().stop(!1,!1).fadeOut(1e3),s[t].addClass("active").siblings().removeClass("active")):l()}),i(),n.hover(function(){clearInterval(e)},function(){i()})}}});