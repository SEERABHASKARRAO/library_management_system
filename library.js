
function signup(){
    if(document.getElementById("enter-pass").style.visibility=="hidden"){
     document.getElementById("login").innerHTML="Sign-Up";
     document.getElementById("enter-pass").style.display="block";
     document.getElementById("enter-pass").style.visibility="visible";
     document.getElementById("re-enter-pass").style.display="block";
     document.getElementById("re-enter-pass").style.visibility="visible";
     document.getElementById("pass").style.display="none";
    document.getElementById('submit_type').innerHTML="sign-up";
    document.getElementById("description").innerHTML="If account already exists?";
    }
    else{
    document.getElementById("login").innerHTML="Login";
    document.getElementById('submit_type').innerHTML="Log in";
     document.getElementById("enter-pass").style.display="none";
     document.getElementById("enter-pass").style.visibility="hidden";
     document.getElementById("re-enter-pass").style.display="none";
     document.getElementById("re-enter-pass").style.visibility="hidden";
     document.getElementById("pass").style.display="block";
     document.getElementById("pass").style.visibility="visible";
     document.getElementById("description").innerHTML="Don't have an account?";
    }
}


