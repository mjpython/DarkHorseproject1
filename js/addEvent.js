(function(){
    var $={};
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
    $.addEvent=addEvent;
    window.$=$;
})();