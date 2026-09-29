// ===============================
// GET HTML ELEMENTS
// ===============================

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");

const password = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const message = document.getElementById("message");

const togglePassword =
    document.getElementById("togglePassword");


// ===============================
// SHOW / HIDE PASSWORD
// ===============================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁";

    }

});


// ===============================
// LOGIN FORM
// ===============================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Clear previous messages

    emailError.textContent = "";

    passwordError.textContent = "";

    message.textContent = "";


    let valid = true;


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    if (email.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    }
    else if (!validateEmail(email.value)) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    // ===============================
    // PASSWORD VALIDATION
    // ===============================

    if (password.value.trim() === "") {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    }
    else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    // ===============================
    // LOGIN SUCCESS
    // ===============================

    if (valid) {

        message.textContent =
            "Login successful! Welcome back.";

        message.style.color = "#198754";


        // Store login information

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "userEmail",
            email.value
        );


        // Clear form

        loginForm.reset();

    }

});


// ===============================
// EMAIL VALIDATION FUNCTION
// ===============================

function validateEmail(emailValue) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailValue);

}


// ===============================
// FORGOT PASSWORD
// ===============================

document
    .getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Password reset link will be sent to your email."
        );

    });


// ===============================
// REGISTER LINK
// ===============================

document
    .getElementById("registerLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Registration page will be available soon."
        );

    });
