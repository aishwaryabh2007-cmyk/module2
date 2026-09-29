// =====================================
// GET ELEMENTS
// =====================================

const form =
    document.getElementById("registrationForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const dob =
    document.getElementById("dob");

const course =
    document.getElementById("course");

const department =
    document.getElementById("department");

const year =
    document.getElementById("year");

const address =
    document.getElementById("address");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const terms =
    document.getElementById("terms");

const successMessage =
    document.getElementById("successMessage");


// =====================================
// FORM SUBMISSION
// =====================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Clear previous errors

    clearErrors();


    let valid = true;


    // =====================================
    // NAME VALIDATION
    // =====================================

    if (fullName.value.trim() === "") {

        document.getElementById("nameError").textContent =
            "Please enter your full name.";

        valid = false;

    }
    else if (fullName.value.trim().length < 3) {

        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";

        valid = false;

    }


    // =====================================
    // EMAIL VALIDATION
    // =====================================

    if (email.value.trim() === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email.";

        valid = false;

    }
    else if (!validateEmail(email.value)) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    // =====================================
    // PHONE VALIDATION
    // =====================================

    if (phone.value.trim() === "") {

        document.getElementById("phoneError").textContent =
            "Please enter your phone number.";

        valid = false;

    }
    else if (!/^[0-9]{10}$/.test(phone.value)) {

        document.getElementById("phoneError").textContent =
            "Phone number must contain exactly 10 digits.";

        valid = false;

    }


    // =====================================
    // DATE OF BIRTH
    // =====================================

    if (dob.value === "") {

        document.getElementById("dobError").textContent =
            "Please select your date of birth.";

        valid = false;

    }


    // =====================================
    // GENDER
    // =====================================

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    if (!gender) {

        document.getElementById("genderError").textContent =
            "Please select your gender.";

        valid = false;

    }


    // =====================================
    // COURSE
    // =====================================

    if (course.value === "") {

        document.getElementById("courseError").textContent =
            "Please select your course.";

        valid = false;

    }


    // =====================================
    // DEPARTMENT
    // =====================================

    if (department.value === "") {

        document.getElementById("departmentError").textContent =
            "Please select your department.";

        valid = false;

    }


    // =====================================
    // YEAR
    // =====================================

    if (year.value === "") {

        document.getElementById("yearError").textContent =
            "Please select your year.";

        valid = false;

    }


    // =====================================
    // ADDRESS
    // =====================================

    if (address.value.trim() === "") {

        document.getElementById("addressError").textContent =
            "Please enter your address.";

        valid = false;

    }
    else if (address.value.trim().length < 10) {

        document.getElementById("addressError").textContent =
            "Please enter a complete address.";

        valid = false;

    }


    // =====================================
    // PASSWORD
    // =====================================

    if (password.value === "") {

        document.getElementById("passwordError").textContent =
            "Please enter a password.";

        valid = false;

    }
    else if (password.value.length < 6) {

        document.getElementById("passwordError").textContent =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    // =====================================
    // CONFIRM PASSWORD
    // =====================================

    if (confirmPassword.value === "") {

        document.getElementById(
            "confirmPasswordError"
        ).textContent =
            "Please confirm your password.";

        valid = false;

    }
    else if (
        password.value !== confirmPassword.value
    ) {

        document.getElementById(
            "confirmPasswordError"
        ).textContent =
            "Passwords do not match.";

        valid = false;

    }


    // =====================================
    // TERMS
    // =====================================

    if (!terms.checked) {

        document.getElementById("termsError").textContent =
            "Please accept the Terms and Conditions.";

        valid = false;

    }


    // =====================================
    // SUCCESS
    // =====================================

    if (valid) {

        successMessage.textContent =
            "Registration successful!";

        successMessage.style.backgroundColor =
            "#d1e7dd";

        successMessage.style.color =
            "#0f5132";


        // Display registered data in console

        console.log("Student Registration Details");

        console.log("Name:", fullName.value);

        console.log("Email:", email.value);

        console.log("Phone:", phone.value);

        console.log("Date of Birth:", dob.value);

        console.log("Gender:", gender.value);

        console.log("Course:", course.value);

        console.log("Department:", department.value);

        console.log("Year:", year.value);

        console.log("Address:", address.value);


        // Reset form after registration

        setTimeout(function () {

            form.reset();

        }, 1000);

    }

});


// =====================================
// EMAIL VALIDATION FUNCTION
// =====================================

function validateEmail(emailValue) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailValue);

}


// =====================================
// CLEAR ERRORS
// =====================================

function clearErrors() {

    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("dobError").textContent = "";

    document.getElementById("genderError").textContent = "";

    document.getElementById("courseError").textContent = "";

    document.getElementById("departmentError").textContent = "";

    document.getElementById("yearError").textContent = "";

    document.getElementById("addressError").textContent = "";

    document.getElementById("passwordError").textContent = "";

    document.getElementById(
        "confirmPasswordError"
    ).textContent = "";

    document.getElementById("termsError").textContent = "";

    successMessage.textContent = "";

    successMessage.style.backgroundColor = "";

    successMessage.style.color = "";

}


// =====================================
// PHONE NUMBER - ONLY NUMBERS
// =====================================

phone.addEventListener("input", function () {

    this.value =
        this.value.replace(/[^0-9]/g, "");

});
