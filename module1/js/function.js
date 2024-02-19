// Define a function to add two numbers
function add(a, b) {
  return a + b;
}

// Call the function and store the result in a variable
let sum = add(5, 3);
console.log("sum: " + sum); // Output: 8

// Define a function to check if a number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function and store the result in a variable
let result = isEven(7);
console.log("Boolean: " + result); // Output: false

// Function expression
let multiply = function (a, b) {
  return a * b;
};

// Call the function expression
let product = multiply(4, 5);
console.log("Multiply: " + product); // Output: 20

// Arrow function
let square = (num) => {
  return num * num;
};

// Call the arrow function
result = square(6);
console.log("Square: " + result); // Output: 36
