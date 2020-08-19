function checkForm() {
    //validating fullname and email-id
    var correct_way = /^[a-zA-Z]+\s[a-zA-Z]+\s?$/;
    var check_name = document.getElementById("fullname").value;
    var correct_mailformat = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var check_email = document.getElementById("email").value;

    if (check_name == "") {
        document.getElementById("message").innerHTML="*Please fill your fullname";
        return false;
    }
    if(check_name.length<4){
        document.getElementById("message").innerHTML="*min 4 characters required";
        return false;
    }
    
    if (!check_name.match(correct_way))
    {
        document.getElementById("message").innerHTML="*No numbers and special characters allowed";
        return false;
    }

    if(check_email==""){
        document.getElementById("message2").innerHTML="*Please fill your email";
        return false;
    }
    if(!check_email.match(correct_mailformat))
    {
        document.getElementById("message2").innerHTML="*Invalid email id";
        return false;    
    }
    return true;    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

//validating phone number
function phoneFormat(input){
    // Strip all characters from the input except digits
    input = input.replace(/\D/g,'');
        
            // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0,10);
        
            // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if(size == 0){
        input = input;
    }else if(size < 4){
        input = '('+input;
    }else if(size < 7){
        input = '('+input.substring(0,3)+') '+'-'+input.substring(3,6);
    }else{
        input = '('+input.substring(0,3)+') '+'-'+input.substring(3,6)+' - '+input.substring(6,10);
    }
    return input; 
    
}

document.getElementById('phoneNumber').addEventListener('keyup',function(evt){
    var phoneNumber = document.getElementById('phoneNumber');
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    phoneNumber.value = phoneFormat(phoneNumber.value);
});

function validate(){
    if(checkForm()){
        alert("Form Validated")
        window.location.assign("http://pixel6.co/")
    }
    else{
        return false;
    }
}


