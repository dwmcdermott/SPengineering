var submitted = false;
var formDiv;
var thankYouDiv;
var surnameInput;
var forenameInput;
var locationInput;
var email1Input;
var email2Input;
var formErrorText;
var nameErrorText;
var yearErrorText;
var classErrorText;
var email1ErrorText;
var email2ErrorText;

document.addEventListener("DOMContentLoaded", function(event) {
  formDiv = document.getElementById("form");
  thankYouDiv = document.getElementById("thank-you");
  nameInput = document.getElementById("surname");
  yearInput = document.getElementById("forename");
  classInput = document.getElementById("location");
  email1Input = document.getElementById("email1");
  email2Input = document.getElementById("email2");

  formErrorText = document.getElementById("form-error-text");
  nameErrorText = document.getElementById("surname-error-text");
  yearErrorText = document.getElementById("forename-error-text");
  classErrorText = document.getElementById("location-error-text");
  email1ErrorText = document.getElementById("email1-error-text");
  email2ErrorText = document.getElementById("email2-error-text");

  formErrorText.style.display = "none";
  thankYouDiv.style.display = "none";
});

function validate(event) {
  event.preventDefault();

  var error = false;

  formErrorText.style.display = "none";
  nameErrorText.innerText = "";
  yearErrorText.innerText = "";
  classErrorText.innerText = "";
  email1ErrorText.innerText = "";
  email2ErrorText.innerText = "";

  var name = nameInput.value;
  if (name.length == 0) {
    nameErrorText.innerText = "Please enter your Surname";
    error = true;
  }

  var year = yearInput.value;
  if (year.length == 0) {
    yearErrorText.innerText = "Please enter your forename";
    error = true;
  }

  var classValue = classInput.value;
  if (classValue.length == 0) {
    classErrorText.innerText = "Please enter your location";
    error = true;
  }

  var email1 = email1Input.value;
  if (email1.length == 0) {
    email1ErrorText.innerText = "Please enter an email address";
    error = true;
  }
  if (email1.indexOf("@") == -1 || email1.indexOf(".") == -1) {
    email1ErrorText.innerText = "Please enter a valid email address";
    error = true;
  }
  var email2 = email2Input.value;
  if (email1 != email2) {
    email2ErrorText.innerText = "The email addresses do not match";
    error = true;
  }

  if (error) {
    formErrorText.style.display = "block";
    return false;
  } else {
    formDiv.style.display = "none";
    thankYouDiv.style.display = "block";
    return true;
  }
}
