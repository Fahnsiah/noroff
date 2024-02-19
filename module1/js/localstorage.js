// // Storing data in local storage
// localStorage.setItem("username", "John");

// // Retrieving data from local storage
// const username = localStorage.getItem("username");
// console.log(username); // Output: John

// // Removing data from local storage
// localStorage.removeItem("username");

// Setting a cookie with expiration date
document.cookie =
  "username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

// Retrieving cookies
const cookies = document.cookie;
console.log(cookies);

// Deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
