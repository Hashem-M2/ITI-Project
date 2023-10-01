var btn = document.getElementById("btt");

function redirect() {
  location.assign("ITI-Project/index.html");
}

var userid = document.getElementById("userid");
var password = document.getElementById("pass");

var fullNameRegex = /^[a-z]+( [a-z]+)$/i;
var fullPass = /^[0-9]+$/;

function required() {
  if (userid.value.length === 0 || password.value.length === 0) {
    alert("Please write your User Name and password");
  } else if (!fullNameRegex.test(userid.value)) {
    alert("Please write the correct User Name");
    }
  else if (!fullPass.test(password.value)) {
      alert("Please enter correct password");
  } else {
    alert("Welcome "+userid.value)
    }
}

var date = new Date();
date.setDate(date.getDate() + 30);

 function cooki() {
  var user = userid.value;
  var pas = password.value;

  document.cookie = "User Name="+user +";expires="+date;
  document.cookie = "Password=" + pas+ ";expires=" + date;
location.reload();
}
  



