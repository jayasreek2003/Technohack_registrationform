function validateForm(event) {
    event.preventDefault();
  
    
    clearErrors();
  
   
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
   
    if (firstName === "") {
      showError("firstNameError", "First name is required");
    }
  
   
    if (lastName === "") {
      showError("lastNameError", "Last name is required");
    }
  
   
    if (email === "") {
      showError("emailError", "Email is required");
    } else if (!isValidEmail(email)) {
      showError("emailError", "Please enter a valid email address");
    }
  
   
    if (password === "") {
      showError("passwordError", "Password is required");
    } else if (password.length < 6) {
      showError("passwordError", "Password should be at least 6 characters");
    }
  
   
    if (!hasErrors()) {
      document.getElementById("registrationForm").submit();
    }
  }
  
  function showError(elementId, errorMessage) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
  }
  
  function clearErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function hasErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      if (errorElements[i].textContent !== "") {
        return true;
      }
    }
    return false;
  }
  