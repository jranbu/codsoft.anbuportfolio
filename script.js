console.log
function opencantactform(){
    document.getElementById("contactform").style.display = "block";
}

function closecontactform(){
    document.getElementById("contactform").style.display = "none";
}

function submitform(){
    alert("form submitted!(functionality to implemented)");
    closecontactform();
}