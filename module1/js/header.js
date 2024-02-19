document.cookie = "sessionid=abc123; Secure";

document.cookie = "sessionid=abc123; HttpOnly";

document.cookie = "sessionid=abc123; SameSite=Strict";

var expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + 3600 * 1000); // Expires in 1 hour
document.cookie =
  "sessionid=abc123; Expires=" +
  expirationDate.toUTCString() +
  "; Secure; HttpOnly";
