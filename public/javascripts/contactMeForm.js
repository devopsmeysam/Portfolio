/* Filename: contactMeForm.js
Student Name: Meysam Mahdavikhansari
Student ID: 301248106
Date: Thursday, October 13th, 2022 */

//JavaScript file for Contact Me form + Regular Expression for fields
var firstName = document.getElementById("txtFirstName");
var firstNameError = document.getElementById("firstNameError");

firstName.addEventListener("input", function(f) {
    var fNamePattern = /^[\w]{2,25}$/;
    var fNameCurrentValue = f.target.value;
    var fNameIsValid = fNamePattern.test(fNameCurrentValue);
    if (firstName.value.length > 1) {
        if (fNameIsValid) {
            firstNameError.style.display = "none";
            firstName.style.backgroundColor = "#FFFFFF";
        } else {
            firstNameError.innerHTML = "Please enter a real first name with at least 2 characters!";
            firstNameError.style.display = "block";
            firstName.style.backgroundColor = "#FF8F8F";
        }
    } else {
        firstNameError.innerHTML = "Please enter a real first name with at least 2 characters!";
        firstNameError.style.display = "block";
        firstName.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var lastName = document.getElementById("txtLastName");
var lastNameError = document.getElementById("lastNameError");

lastName.addEventListener("input", function(l) {
    var lNamePattern = /^[\w]{2,55}$/;
    var lNameCurrentValue = l.target.value;
    var lNameIsValid = lNamePattern.test(lNameCurrentValue);
    if (lastName.value.length > 1) {
        if (lNameIsValid) {
            lastNameError.style.display = "none";
            lastName.style.backgroundColor = "#FFFFFF";
        } else {
            lastNameError.innerHTML = "Please enter a real last name with at least 2 characters!";
            lastNameError.style.display = "block";
            lastName.style.backgroundColor = "#FF8F8F";
        }
    } else {
        lastNameError.innerHTML = "Please enter a real last name with at least 2 characters!";
        lastNameError.style.display = "block";
        lastName.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var address = document.getElementById("txtAddress");
var addressError = document.getElementById("addressError");

address.addEventListener("input", function(a) {
    var addressPattern = /^[a-zA-Z0-9\s,'-]{5,100}$/;
    var addressCurrentValue = a.target.value;
    var addressIsValid = addressPattern.test(addressCurrentValue);
    if (address.value.length > 4) {
        if (addressIsValid) {
            addressError.style.display = "none";
            address.style.backgroundColor = "#FFFFFF";
        } else {
            addressError.innerHTML = "Please enter a valid address!";
            addressError.style.display = "block";
            address.style.backgroundColor = "#FF8F8F";
        }
    } else {
        addressError.innerHTML = "Please enter a valid address!";
        addressError.style.display = "block";
        address.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var city = document.getElementById("txtCity");
var cityError = document.getElementById("cityError");

city.addEventListener("input", function(c) {
    var cityPattern = /^[\w ']{2,55}$/;
    var cityCurrentValue = c.target.value;
    var cityIsValid = cityPattern.test(cityCurrentValue);
    if (city.value.length > 1) {
        if (cityIsValid) {
            cityError.style.display = "none";
            city.style.backgroundColor = "#FFFFFF";
        } else {
            cityError.innerHTML = "Please enter a real city name!";
            cityError.style.display = "block";
            city.style.backgroundColor = "#FF8F8F";
        }
    } else {
        cityError.innerHTML = "Please enter a real city name!";
        cityError.style.display = "block";
        city.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var postalCode = document.getElementById("txtPostalCode");
var postalCodeError = document.getElementById("postalCodeError");

postalCode.addEventListener("input", function(p) {
    var postalCodePattern = /^(?:[A-Z]\d[A-Z][ -]?\d[A-Z]\d)$/i;
    var postalCodeCurrentValue = p.target.value;
    var postalCodeIsValid = postalCodePattern.test(postalCodeCurrentValue);
    if (postalCode.value.length > 0) {
        if (postalCodeIsValid) {
            postalCodeError.style.display = "none";
            postalCode.style.backgroundColor = "#FFFFFF";
        } else {
            postalCodeError.innerHTML = "The postal code has to be in the a0a0a0 format!";
            postalCodeError.style.display = "block";
            postalCode.style.backgroundColor = "#FF8F8F";
        }
    } else {
        postalCodeError.innerHTML = "The postal code has to be in the a0a0a0 format!";
        postalCodeError.style.display = "block";
        postalCode.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var age = document.getElementById("txtAge");
var ageError = document.getElementById("ageError");

age.addEventListener("input", function(ag) {
    var agePattern = /^(?:1[8-9]|[2-9][0-9]|1[0-9][0-9])$/;
    var ageCurrentValue = ag.target.value;
    var ageIsValid = agePattern.test(ageCurrentValue);
    if (age) {
        if (ageIsValid) {
            ageError.style.display = "none";
            age.style.backgroundColor = "#FFFFFF";
        } else {
            ageError.innerHTML = "Age has to be at least 18 years old up to 199!";
            ageError.style.display = "block";
            age.style.backgroundColor = "#FF8F8F";
        }
    } else {
        ageError.innerHTML = "Age has to be at least 18 years old up to 199!";
        ageError.style.display = "block";
        age.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var password = document.getElementById("txtPassword");
var passwordError = document.getElementById("passwordError");

password.addEventListener("input", function(pass) {
    var passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,36}$/;
    var passwordCurrentValue = pass.target.value;
    var passwordIsValid = passwordPattern.test(passwordCurrentValue);
    if (password.value.length > 5) {
        if (passwordIsValid) {
            passwordError.style.display = "none";
            password.style.backgroundColor = "#FFFFFF";
        } else {
            passwordError.innerHTML = "Passwords must have at least 6 characters and must contain at least one digit, one upper-case and one special character!";
            passwordError.style.display = "block";
            password.style.backgroundColor = "#FF8F8F";
        }
    } else {
        passwordError.innerHTML = "Passwords must have at least 6 characters and must contain at least one digit, one upper-case and one special character!";
        passwordError.style.display = "block";
        password.style.backgroundColor = "#FF8F8F";
    }
});
/****************************************************************/
var confirmPass = document.getElementById("txtConfirm");
var confirmPassError = document.getElementById("passConfirmError");

function check(elem) {
    if (elem.value.length > 0) {
        if (elem.value == password.value) {
            confirmPassError.style.display = "none";
            confirmPass.style.backgroundColor = "#FFFFFF";
        } else {
            confirmPassError.innerHTML = "Passwords do not match!";
            confirmPassError.style.display = "block";
            confirmPass.style.backgroundColor = "#FF8F8F";
        }        
    } else {
        confirmPassError.innerHTML = "Passwords do not match!";
        confirmPassError.style.display = "block";
        confirmPass.style.backgroundColor = "#FF8F8F";
    }
}
/****************************************************************/
var email = document.getElementById("txtEmail");
var emailError = document.getElementById("emailError");

email.addEventListener("input", function(emailv) {
    var emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var emailCurrentValue = emailv.target.value;
    var emailIsValid = emailPattern.test(emailCurrentValue);
    if (email) {
        if (emailIsValid) {
            emailError.style.display = "none";
            email.style.backgroundColor = "#FFFFFF";
        } else {
            emailError.innerHTML = "The Email field must contain the @ and . characters!";
            emailError.style.display = "block";
            email.style.backgroundColor = "#FF8F8F";
        }
    } else {
        emailError.innerHTML = "The Email field must contain the @ and . characters!";
        emailError.style.display = "block";
        email.style.backgroundColor = "#FF8F8F";
    }
});
//Implementation for submitting the information provided by the website users:
/****************************************************************/
function ajaxpost() {
    if (emailError.style.display == "none" && confirmPassError.style.display == "none" && passwordError.style.display == "none" && ageError.style.display == "none" && postalCodeError.style.display == "none" && cityError.style.display == "none" && addressError.style.display == "none" && lastNameError.style.display == "none" && firstNameError.style.display == "none") {

        var data = new FormData();
        data.append("txtFirstName", document.getElementById("txtFirstName").value);
        data.append("txtLastName", document.getElementById("txtLastName").value);
        data.append("txtAddress", document.getElementById("txtAddress").value);
        data.append("txtCity", document.getElementById("txtCity").value);
        data.append("txtPostalCode", document.getElementById("txtPostalCode").value);
        data.append("txtAge", document.getElementById("txtAge").value);
        data.append("txtPassword", document.getElementById("txtPassword").value);
        data.append("txtEmail", document.getElementById("txtEmail").value);
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'home');
        xhr.onload = function() {
            alert("Thanks for reaching out. I will get back to you ASAP!");
        };
        xhr.send(data);
        return false;
    } else {
        alert("You need to enter all fields properly to be able to submit your request!\nPlease resubmit the form with accurate information from scratch.\nThanks for your understanding.");
        return false;

    
    }
}
/****************************************************************/