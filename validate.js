var input=document.getElementById("email").value;
;


function myFunction(){

    if(input=="" || input===null){
        document.getElementById("error").style.display="block";
        document.getElementById("error").style.color="red";

    }

else if(input!=""  || input===null){
    document.getElementById("error").style.display="none"; 
}

    else{
        document.getElementById("error").style.display="none"; 
    }
}

