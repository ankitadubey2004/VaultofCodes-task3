function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    
    if (!document.getElementById("terms").checked) {
        alert("You must agree to the terms and conditions.");
        return false;
    }

    return true;
}
