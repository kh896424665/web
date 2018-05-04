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
//添加到目标元素后面
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if (parent.lastChild==targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
//加载完成调用函数
window.onload=function () {
    pop();
    prepareGallery();
    preparePlaceholder();
}
function preparePlaceholder() {
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery=document.getElementById("imagegallery");
    var placeholder=document.createElement("img");
    placeholder.setAttribute("src","images/placeholder.jpg");
    placeholder.setAttribute("alt","placeholder");
    placeholder.setAttribute("id","placeholder");
    insertAfter(placeholder,gallery);
    var description=document.createElement("p");
    var desctext=document.createTextNode("Choose a images!");
    description.appendChild(desctext);
    description.setAttribute("id ","description");
    insertAfter(description,placeholder);

}
function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder=document.getElementById('placeholder');
    if(placeholder.nodeName!="IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
        var description=document.getElementById("description");
        if (whichpic.getAttribute("title")) {
            var source_desc=whichpic.getAttribute("title");
        }
        else {
            var source_desc="";
        }
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue=source_desc;
        }
    }
    return true;
}
function popUp(winURL) {
    window.open(winURL,"popup","width=320,height=480");
}
function pop() {
    var lnks=document.getElementsByTagName("a");
    if (lnks.length>0) {
        for (var i = 0; i < lnks.length; i++) {
            if (lnks[i].getAttribute("class")=="popUp") {
                lnks[i].onclick=function () {
                    popUp(this.href);
                    return false;
                }
            }
        }
    }
}
function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick=function () {
            return !showPic(this);
        }
    }
}
