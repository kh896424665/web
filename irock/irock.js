 var username;
function touchRock() {
    if (username) {
        alert("I like the attention, "+username+".Thank you!");
    }
    else {
        username=prompt("What's your name","write your name here");
        if (username) {
            alert("It is good to meet you, "+username+".");
            writeCookie("irock_username",username,5*365);
        }
    }
  document.getElementById("rocking").src="irock.jpg";
  setTimeout("document.getElementById('rocking').src='irock2.jpg'",2000);
}
function resizeRock() {
    document.getElementById("rocking").style.height=(document.body.clientHeight-100)*0.9;
}
function greetUser() {
    username=readCookie("irock_username");
    if(username){
        alert("Hello "+username+" I miss you!");
    }
    else {
        alert("Hello，I am your pet rock");
    }

}
