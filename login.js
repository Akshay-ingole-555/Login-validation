function fn(){
    var a = document.getElementById("uname");
    var b = document.getElementById("pass");

    // alert("The entered username is " + a  + "The entered password is " + b);

    if(a.value=="" && b.value==""){
        // alert("Username & password is required.");
        document.getElementById("h6uname").innerHTML="Username is required.";
        document.getElementById("h6pass").innerHTML="Password is required.";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value==""){
        // alert("Username is required.");
        document.getElementById("h6uname").innerHTML="Username is required.";
        return false;
    }
    else if(b.value==""){
        // alert("Password is required.");
        document.getElementById("h6pass").innerHTML="Password is required.";
        return false;
    }
    else if(a.value=="Akki" && b.value=="Akki@123"){
        alert("Username & password is Matching.");
        return true;
    }
    else{
        // alert("Username & password is Not Matching.");
        document.getElementById("h6btn").innerHTML="Username & password is Not Matching.";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        document.getElementById("btn").style.display="none";
        return false;
        
    }
}