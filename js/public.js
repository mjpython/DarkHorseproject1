(function(){
    var lo={};//全局
    function addEvent(elem,eventType,func){
        try {
            if(elem && typeof elem=="object"){
                if(window.addEventListener){
                    //IE 9+
                    elem.addEventListener(eventType,func);
                }else{
                    //IE 6/7/8
                    elem.addEvent("on"+eventType,func);
                }
            }else{
                throw Error("对象为空或不是对象");
            }
        } catch (e) {
            
        }
    }
    lo.addEvent=addEvent;
    window.lo=lo;
})();
(function(){
    window.onload=function(){
        /*登录弹窗*/ 
        var container=document.getElementById("container");
        var btn2=document.getElementById("btn2");
        var mask=document.getElementById("mask");
        var login=document.getElementById("login");
        var x=document.getElementById("x");
        btn2.onclick=function(){
            mask.style.display="block";
            login.style.display="block";
            btn2.disabled=false;
        }
        x.onclick=function(){
            mask.style.display="none";
            login.style.display="none";
        }
        /*图形化验证码*/
        var yzm=document.getElementById("yzm");
           var c=yzm.getContext("2d");//通过dom对象获取绘图对象
           var str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
           var postion=0;
           var x,y; //文字位置
           var fontsize=20;
           function yzmshow(){
                c.clearRect(0,0,150,50); //清空画布区域
                c.beginPath();
                c.fillStyle="#202025";
                for(var i=0;i<4;i++){
                   x=20+(30*i);
                   y=20+Math.ceil(Math.random()*25);
                   fontsize=20+Math.ceil(Math.random()*10);
                   c.font="blod "+fontsize+"px Arial";
                   postion=Math.ceil(Math.random()*35);
                   c.fillText(str.substr(postion,1),x,y,300);
                }
           }
           yzmshow();
           yzm.onclick=function(){
               yzmshow();
           }
    }
})();