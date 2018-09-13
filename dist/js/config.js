require.config({
  baseUrl:"/",
  paths:{
    "jquery":"libs/jquery-1.11.3.min",
    "cookie":"libs/jquery.cookie",
    "md5":"libs/md5",
    "base":"module/base",
    "slider":"module/slider",
    "url":"module/url",
    "template":"libs/template-web",
    "getNewPro":"module/getNewPro",
    "getHotPro":"module/getHotPro",
    "getTimePro":"module/getTimePro",
    "change":"module/change",
    "check":"module/check",
    "getPro":"module/getpro",
    "checkLogin":"module/checkLogin",
    "getCar":"module/getCar",
    "getListNav":"module/getListNav"
  },
  shim:{
    cookie:{
      deps:["jquery"]
    },
    base:{
      deps:["jquery"]
    },
    slider:{
      deps:["jquery"]
    },
    getNewPro:{
      deps:["jquery"]
    },
    getHotPro:{
      deps:["jquery"]
    },
    getTimePro:{
      deps:["jquery"]
    },
    change:{
      deps:["jquery"]
    },
    check:{
      deps:["jquery"]
    },
    getListNav:{
      deps:["jquery"]
    },
    getCar:{
      deps:["jquery"]
    }
  }
})