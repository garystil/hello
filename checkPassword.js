function checkPassword() {
  const password = "correctpassword";
  const inputPassword = document.getElementById("password").value;

  if (inputPassword === password) {
    window.location.href = "https://example.com";
  } else {
    alert("Incorrect password. Try again.");
  }
}
