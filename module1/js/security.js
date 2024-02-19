// Set Content Security Policy (CSP) using meta tag in HTML
var meta = document.createElement("meta");
meta.httpEquiv = "Content-Security-Policy";
meta.content =
  "default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://fonts.googleapis.com;";
document.head.appendChild(meta);

// Set X-Content-Type-Options header using meta tag in HTML
var meta = document.createElement("meta");
meta.httpEquiv = "X-Content-Type-Options";
meta.content = "nosniff";
document.head.appendChild(meta);

// Set X-Frame-Options header using meta tag in HTML
var meta = document.createElement("meta");
meta.httpEquiv = "X-Frame-Options";
meta.content = "deny"; // or "sameorigin" or "allow-from uri"
document.head.appendChild(meta);
