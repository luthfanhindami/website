
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;

    // email validation
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }
    
    // phone num validation
    var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. Please enter a valid phone number starting with a '+' sign and containing 6-15 digits.");
      return;
    }
    alert("Sign up successful!");
    document.getElementById("signup-form").reset();
  });

  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    alert("Login successful!");
    document.getElementById("login-form").reset();
  });
  