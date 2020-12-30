function sendMail(contactForm) {
    // you were missing preventDefault. It prevents the page from reloading when you click submit button
    event.preventDefault();
    emailjs.send("service_hrwrw09", "template_eukrkzn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "booking_request": contactForm.querysummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
        },
        function(error) {
            console.log("FAILED", error);
        });
        
        document.getElementById('contactForm').reset();
        
        return false;
}