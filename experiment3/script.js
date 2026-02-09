document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var mobile = document.getElementById("mobile").value.trim();

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var mobileError = document.getElementById("mobileError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    mobileError.textContent = "";

    var valid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } 
    else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Enter valid email";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Minimum 6 characters required";
        valid = false;
    }

    if (isNaN(mobile) || mobile.length !== 10) {
        mobileError.textContent = "Enter valid 10-digit number";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful");
        document.getElementById("registrationForm").reset();
    }

});
