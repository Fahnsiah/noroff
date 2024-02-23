function hideElement() {
  // Get the element to hide
  let element = document.getElementById("resultButton");
  let choice = document.getElementById("choice");

  // Set its display property to 'none'
  element.style.display = "none";
  choice.style.display = "none";
}

function showElement() {
  // Get the element to show
  let element = document.getElementById("resultButton");
  let choice = document.getElementById("choice");

  // Set its display property to 'block' (or any other appropriate value)
  element.style.display = "block";
  choice.style.display = "block";
}

function hideWinningLabel() {
  let winningLabel = document.getElementById("winningLabel");
  winningLabel.style.display = "none";
}

function hideLoosingLabel() {
  let loosingLabel = document.getElementById("loosingLabel");
  loosingLabel.style.display = "none";
}

function showWinningLabel() {
  let winningLabel = document.getElementById("winningLabel");
  winningLabel.style.display = "block";
}

function showLoosingLabel() {
  let loosingLabel = document.getElementById("loosingLabel");
  loosingLabel.style.display = "block";
}

function generateRandomNumbers() {
  try {
    hideWinningLabel();
    let randomNumbers = generateRandomNumbersArray(10);
    let inputElement = document.getElementById("randomNumbers");
    inputElement.value = randomNumbers.join(", ");

    let instructionLabel = document.getElementById("instructionLabel");
    instructionLabel.textContent =
      "Select one number and become a lucky winner.";

    let randomIndex = Math.floor(Math.random() * randomNumbers.length);

    // Retrieve the random item from the array
    let winningNumber = randomNumbers[randomIndex];

    // Store the random item in local storage
    localStorage.setItem("winningNumber", winningNumber);

    showElement();
  } catch (error) {
    let errorLabel = document.getElementById("error");
    errorLabel.textContent = error;
  }
}

function generateRandomNumbersArray(length) {
  try {
    let randomNumbers = [];
    for (let i = 0; i < length; i++) {
      randomNumbers.push(Math.floor(Math.random() * 10));
    }
    return randomNumbers;
  } catch (error) {
    let errorLabel = document.getElementById("error");
    errorLabel.value = error;
  }
}

function checkResult() {
  try {
    // Retrieve the random item from local storage (optional)

    let winningNum = parseInt(localStorage.getItem("winningNumber"));
    let chosenNum = parseInt(document.getElementById("choice").value);

    // Check if both inputs are valid integers
    if (isNaN(chosenNum)) {
      alert("Please select a number");
      return;
    } else {
      alert(
        "The winning number is: " + winningNum + " your choice is " + chosenNum
      );
    }

    if (winningNum === chosenNum) {
      showWinningLabel();
      hideLoosingLabel();
    } else {
      hideWinningLabel();
      showLoosingLabel();
      generateRandomNumbers();
    }
  } catch (error) {
    let errorLabel = document.getElementById("error");
    errorLabel.textContent = error;
  }
}
hideElement();
hideWinningLabel();
hideLoosingLabel();
