
var Mui = {};

/**
 *   正则验证
 **/
/*==================== start ====================*/
+ function() {
    "use strict";
    var regular = {};
    //电子邮箱
    regular.email = function(str) {
            var reg = /^\w+([-+.]\w+)*\@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            return reg.test(str);
        }
        //电话号码，包括手机号+固话
    regular.phone = function(str, all) {
        var reg;
        if (all) {
            reg = /(^0{0,1}(13[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
        } else {
            reg = /^0{0,1}(13[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/;
        }
        return reg.test(str);
    }

    //身份证号
    regular.ID = function(str) {
        var reg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|71|(8[12])|91)\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/;
        return reg.test(str);
    }

    // 正整数
    regular.integer = function(str) {
        var reg = /^[1-9]\d*$/;
        return reg.test(str);
    }

    Mui.regular = regular;
}();

/*==================== end ====================*/


/**
 *   常用函数
 * 手机号中间隐藏、获取url后缀id、阻止冒泡、设置删除localStorage
 **/
/*==================== start ====================*/
+ function() {
    "use strict";
    var unit = {};

    //将手机号码中间四位隐藏
    unit.phoneHideToStar = function(tel) {
        if (!tel || typeof tel !== "string") {
            return false;
        }
        tel = tel.split("");
        tel.splice(3, 4, "****");

        return tel.join("");
    }

     // 获取queryobj
    unit.urlQuery = function() {
        var arr = window.location.href.split('?')[1].split('&')
        var queryArr = {};
        for (var i = 0; i < arr.length; i++) {
            var newArr = arr[i].split('=');
            queryArr[newArr[0]] = newArr[1];
        }
        return queryArr;
    }

    // 阻止系统冒泡
    unit._preventDefault = function(e){
        e.preventDefault();
    }

    // *********************localStorage*******************//

    // 获取localstorage
    unit.getLocalStorage = function(name){
        return localStorage.getItem(name);
    }

    // 设置localstorage
    unit.setLocalStorage = function(name, value){
        localStorage.setItem(name, value);
    }

    // 删除localstorage
    unit.deleteLocalStorage = function(name){
        localStorage.removeItem(name);
    }

    // 删除所有localstorage
    unit.deleteAllLocalStorage = function(){
        localStorage.clear();
    }

    // *********************sessionStorage*******************//

     // 获取sessionstorage
    unit.getSessionStorage = function(name){
        return sessionStorage.getItem(name);
    }

    // 设置sessionstorage
    unit.setSessionStorage = function(name, value){
        sessionStorage.setItem(name, value);
    }

    // 删除sessionstorage
    unit.deleteSessionStorage = function(name){
        sessionStorage.removeItem(name);
    }

     // 删除所有sessionstorage
    unit.deleteAllLocalStorage = function(){
        sessionStorage.clear();
    }
  
    Mui.unit = unit;
}();

/*==================== end ====================*/



/**
 *   loading 
 *   三种loading样式 loading、loadingB、loadingL
 **/
/*==================== start ====================*/
// loading 全body覆盖 加背景
+ function() {
    "use strict";
    var loading = {};

    loading.show = function(){
            $("input:focus").blur();
            if ($("#_z_loading_").length){
                $("#_z_loading_").remove();
            }
            var html = "<div id='_z_loading_'><strong><span><img src='images/base/loading.gif'></span></strong></div>";
            $("body").append(html);
            $("#_z_loading_").on("touchstart", Mui.unit._preventDefault);
        },

    loading.hide = function(){
        $("#_z_loading_").remove();
        $("#_z_loading_").off("touchstart", Mui.unit._preventDefault).remove();
    }

     Mui.loading = loading;
}()

//loadingB 显示一块 正在加载... 背景透明覆盖 可在css里修改不透明背景
+ function() {
    "use strict";
    var loadingB = {};

    loadingB.show = function(){
        var _html ="<div id='_z_loading_txt'><strong><span><img src='images/base/loading.gif'></span></strong></div>";
                 
        $("body").append(_html); 
        $("#_z_loading_txt").on("touchstart", Mui.unit._preventDefault);
    },
    loadingB.hide = function(){
        $("#_z_loading_txt").remove();
        $("#_z_loading_txt").off("touchstart", Mui.unit._preventDefault).remove();
    }

     Mui.loadingB = loadingB;
}();



/*==================== end ====================*/



/**
 *   alert 
 *   alert框显示
 **/
/*==================== start ====================*/
+ function() {
    "use strict";
    var alert = {};

    alert.show =  function(o) {
            var t = 0, popup = $("#_z_alert_");
            if (popup.length){
                popup.addClass("out");
                t = 200;
            }
            if (t == 0){
                Mui._alert.show(o);
            } else {
                setTimeout(function(){
                    popup.remove();
                    Mui._alert.show(o);
                }, t);
            }
        },
    alert.hide = function(cb){
            var popup = $("#_z_alert_");
            popup.addClass("out").find(".popup .btns .y, .popup .btns .n").off();
            if (typeof cb == "function"){
                cb();
            }
            setTimeout(function(){
                popup.off().remove();
            },200);
            delete Mui._alert._o;
        }

     Mui.alert = alert;
}();

/*==================== end ====================*/


/**
 *   _alert 
 *  alert()调用模块 
 **/
/*==================== start ====================*/
+ function() {
    "use strict";
    var _alert = {};
    _alert = {
        show: function(o){
            $("input:focus").blur();
            if (o != undefined && typeof o != "object"){
                o = {txt: o};
            }
            Mui._alert._o = o;
            o.class = o.class ? o.class : "";
            o.title = o.title ? o.title : "提示";
            o.txt = o.txt || o.text;
            var html = "<div id='_z_alert_' class='" + o.class + "'><div class='popup'>";
            html += "<h1>" + o.title + "</h1><a href='javascript:viod(0)' class='close'></a><div class='p'><p>" + o.txt + "</p></div>";
            html += "<div class='btns'>";
            if (o.btnN){
                html += "<a href='javascript:void(0)' class='alertbtn n'>" + o.btnN + "</a>";
            }
            o.btnY = o.btnY ? o.btnY : o.btn ? o.btn : "确定";
            html += "<a href='javascript:void(0)' class='alertbtn y'>" + o.btnY + "</a></div></div>";
            $("body").append(html);
            var popup = $("#_z_alert_");
            setTimeout(function(){
                popup.addClass("show");
            },0);
            $("#_z_alert_").on("touchstart", Mui.unit._preventDefault);
            popup.find(".popup>.btns .y, .popup>.btns .n, .popup>.close").on("touchstart", Mui._alert.touchstart).on("touchmove", Mui._alert.touchmove).on("touchend", Mui._alert.click);
        },
        touchstart: function(e){
            Mui._alert.mouseX = e.originalEvent.changedTouches[0].pageX;
            Mui._alert.mouseY = e.originalEvent.changedTouches[0].pageY;
            Mui._alert.mouseMove = false;
            $(this).attr("hover","true");
        },
        touchmove: function(e){
            var x = e.originalEvent.changedTouches[0].pageX;
            var y = e.originalEvent.changedTouches[0].pageY;
            if ((Math.abs(x - Mui._alert.mouseX) > 10 || Math.abs(y - Mui._alert.mouseY) > 10) && !Mui._alert.mouseMove){
                Mui._alert.mouseMove = true;
                $(this).removeAttr("hover");
            }
        },
        click: function(){
            $(this).removeAttr("hover");
            if (!Mui._alert.mouseMove){
                var _th = $(this);
                if (_th.hasClass("y")){
                    Mui.alert.hide(Mui._alert._o.callbackY || Mui._alert._o.callback);
                } else {
                    Mui.alert.hide(Mui._alert._o.callbackN);
                }
            }
            return false;
        }
    };

     Mui._alert = _alert;
}();

/*==================== end ====================*/


/**
 *   toast 
 *  
 **/
/*==================== start ====================*/
+ function () {
    "use strict";
    var toast = {};

    toast = function (msg,duration) {
      
          duration=isNaN(duration)?3000:duration;  
          var m = document.createElement('div');  
          m.id = "toast-pop-inner";
          m.innerHTML = msg;  
          m.style.cssText="width:auto;padding:.3rem;min-width: 1rem;max-width:60%;background-color: rgba(0, 0, 0, 0.8); border-radius:3px;color:#fff; text-align:center;font-weight:bold;";  

          var p = document.createElement('div');  
          p.id ="toast-pop";
          p.style.cssText = "width:100%; height:100%; position:absolute;top:0;left:0;overflow:hidden;z-index:999; display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;"

          p.appendChild(m);
          document.body.appendChild(p); 

          setTimeout(function() {  
              var d = 0.5;  
              p.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';  
              m.style.opacity = '0';  
              setTimeout(function() { document.body.removeChild(p) }, d * 500);  
          }, duration);
    }

  Mui.toast = toast;

}()


/*==================== end ====================*/
