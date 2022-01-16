function updateTime(){

var today = new Date();
if(today.getMinutes() < 10){
  var time = today.getHours() + ":0" + today.getMinutes();
}
else if(today.getMinutes() >= 10){
  var time = today.getHours() + ":" + today.getMinutes();
}
var t = document.getElementById('currentTime');
t.innerHTML = time;

const greet1 = "Good morning,John Doe.";
const greet2 = "Good afternoon, John Doe.";
const greet3 = "Good evening, John Doe.";

var greeting = document.getElementById('greetingHeading');

if (today.getHours() > 4 && today.getHours() < 12) {
  greeting.innerHTML = greet1;
}
if(today.getHours() >= 12 && today.getHours() < 16){
  greeting.innerHTML = greet2;
}
if(today.getHours() >= 16 && today.getHours() <= 24){
  greeting.innerHTML = greet3;
}

}
setInterval(updateTime, 10);
