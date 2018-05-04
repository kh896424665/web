//共享onload事件，当执行函数多的时候很方便
function addLoadEvent(func) {
    var oldonload=window.onload;
    if (typeof window.onload!='function') {
        window.onload=func;
    }
    else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
