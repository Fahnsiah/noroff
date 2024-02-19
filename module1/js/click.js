// Example: Removing an event listener
const clickedOnce = (event) => {
  alert("I was once!");
};
const clickedTwice = (event) => {
  alert("I was twice!");
};
const button = document.getElementById("clickMe");
button.addEventListener("click", clickedOnce);

const removeAddEvent = (event) => {
  button.removeEventListener("click", clickedOnce);
  button.addEventListener("dblclick", clickedTwice);
  button.textContent = "Click me Twice";
  alert("Click event is removed and Double Click event added");
};
const removeButton = document.getElementById("removeEvent");
removeButton.addEventListener("click", removeAddEvent);
