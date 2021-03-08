function sendMail(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var message = document.getElementById("message").value;
    var contactForm = document.getElementById("contactForm");
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";

    var text;

    if(name.length < 5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length < 10){
        text = "Suject Title Must Be Greater Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }

    if(emailaddress.indexOf("@") == -1 || emailaddress.length < 5){
        text = "Please Enter Valid Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 100){
        text = "Subject length minimum 100 characters";
        error_message.innerHTML = text;
        return false;
    }

    emailjs.send("service_hrwrw09", "template_eukrkzn",) 

    .then(
        function(response) {
            console.log("SUCCESS", response);
        
        alert("Form Submitted Successfully");
            
        },
        function(error) {
            console.log("FAILED", error);
            
        });
        
        contactForm.reset()
        
        return false;
        
}


