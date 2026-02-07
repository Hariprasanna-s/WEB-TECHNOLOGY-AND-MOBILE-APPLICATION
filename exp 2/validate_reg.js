function validateForm() {

    let roll = document.regForm.roll.value;
    let fname = document.regForm.fname.value;
    let lname = document.regForm.lname.value;
    let dept = document.regForm.dept.value;
    let year = document.regForm.year.value;
    let gender = document.regForm.gender;
    let email = document.regForm.email.value;
    let mobile = document.regForm.mobile.value;
    let password = document.regForm.password.value;
    let address = document.regForm.address.value;
    let terms = document.regForm.terms.checked;

    // Roll Number
    let rollPattern = /^[A-Za-z0-9]{6,12}$/;
    if (!rollPattern.test(roll)) {
        alert("Roll Number must be 6–12 alphanumeric characters");
        return false;
    }

    // First Name
    let namePattern = /^[A-Za-z]{6,}$/;
    if (!namePattern.test(fname)) {
        alert("First Name must contain only alphabets and minimum 6 characters");
        return false;
    }

    // Last Name
    if (lname.trim() === "") {
        alert("Last Name cannot be empty");
        return false;
    }

    // Department
    if (dept === "") {
        alert("Please select a Department");
        return false;
    }

    // Year
    if (year === "") {
        alert("Please select Year");
        return false;
    }

    // Gender
    if (!gender[0].checked && !gender[1].checked) {
        alert("Please select Gender");
        return false;
    }

    // Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid Email ID");
        return false;
    }

    // Mobile
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    // Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Address
    if (address.trim() === "") {
        alert("Address cannot be empty");
        return false;
    }

    // Terms
    if (!terms) {
        alert("Please agree to the Terms & Conditions");
        return false;
    }

    alert("Registration Successful!");
    return true;
}