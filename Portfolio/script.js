function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("contacttosibi", "template_ulb63sn", params)
        .then(function (res) {
            alert("Success!Your response has been submitted.");
        })
        .catch(function (error) {
            alert("Failed to send email. Please try again later.");
            console.error("EmailJS Error:", error);
        });
}
