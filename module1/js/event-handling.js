// Example: Adding a click event listener to a button element
const button = document.getElementById("clickMe");

// button.addEventListener("click", () => {
//   alert("I was clicked once!");
// });

// button.removeEventListener("click");

button.addEventListener("dblclick", () => {
  alert("I was clicked twice!");
});
// // Example: Accessing event properties
// const button = document.getElementById("clickMe");
// button.addEventListener("click", (event) => {
//   alert(event.type.toString());
//   alert(event.target.toString());
// });

// Example: Removing an event listener
// const button = document.getElementById("clickMe");
// const handleClick = (event) => {
//     console.log('Button clicked!');
// };
// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

// // Example: Stopping event propagation
// const button = document.getElementById("clickMe");
// button.addEventListener('click', (event) => {
//     event.preventDefault(); // Stop event from bubbling up
// });
