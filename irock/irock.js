function touchRock() {
  var username = prompt("What's your name","write your name here");
  if(username){
    alert("It is good to meet you, "+username+".");
    document.getElementById("rocking").src="irock.jpg";
  }
}
