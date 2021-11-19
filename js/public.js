var yzmtext;
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
    lo.addEvent(window,"load",function(){
        /*登录弹窗*/ 
        var container=document.getElementById("container");
        var btn2=document.getElementById("btn2");
        var mask=document.getElementById("mask");
        var login=document.getElementById("login");
        var x=document.getElementById("x");
        lo.addEvent(btn2,"click",function(){
            mask.style.display="block";
            login.style.display="block";
            btn2.disabled=false;
        })
        lo.addEvent(x,"click",function(){
            mask.style.display="none";
            login.style.display="none";
        })
        
    })
})();
(function(){
    lo.addEvent(window,"load",function(){
        var face=document.getElementById("face");
        var img1=document.getElementById("img1");
        if(face!=null && img1!=null){
            lo.addEvent(face,"change",function(){
                img1.src="./images/face/"+face.value;
            })
        }
    })
})();