function checkSession() {
  // Check if the session is expired
  if (sessionStorage.getItem("sessionExpired")) {
    alert("Session  has expired.");
    // Redirect to the login page or perform other actions
    // window.location.href = 'login.html';
  } else {
    alert("Session is active.");
    // Perform other actions if the session is active
  }
}

function endSession() {
  sessionStorage.setItem("sessionExpired", false);
}
