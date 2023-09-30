function validation()
{
 var username=document.getElementById("user").value;
 var str= /^[a-z]{5,}$/i;
 var fin=document.getElementById("final");
     if(str.test(username))
     {
         fin.classList.add("inactive");
         
     }
     else {
         
         fin.classList.remove("inactive");
         
         
     }
}
function validpass()
{
    var password=document.getElementById("pass").value;
    var str1=/^[a-z]{8,}[1-9]{1,}[#||*||-]{1,}$/i
    var fin1=document.getElementById("fin");
    if(str1.test(password))
    {
        fin1.classList.add("inactived");
        
    }
    else {
        
        fin1.classList.remove("inactived");
        
        
    }
}

function disappear4() {
    var container1=document.getElementsByClassName("container1")[0];
    if (container1.style.display === "none") {
        container1.style.display = "block";
    } else {
        container1.style.display = "none";
    }
}
function disappear() {
    var container2=document.getElementsByClassName("container1")[1];
    if (container2.style.display === "none") {
        container2.style.display = "block";
    } else {
        container2.style.display = "none";
    }
}
function disappear1() {
    var container3=document.getElementsByClassName("container2")[0];
    if (container3.style.display === "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}
function disappear2() {
    var container4=document.getElementsByClassName("container2")[1];
    if (container4.style.display === "none") {
        container4.style.display = "block";
    } else {
        container4.style.display = "none";
    }
}