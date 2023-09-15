document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var remember = document.getElementById("remember").checked;
  
    // Perform login validation (dummy validation)
    if (email === "example@gmail.com" && password === "password") {
      // Successful login
      alert("Login successful!");
      // Redirect or perform other actions here
    } else {
      // Failed login
      alert("Invalid email or password. Please try again.");
    }
  });
  