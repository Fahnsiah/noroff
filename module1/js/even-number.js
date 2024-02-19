let evenNumbers = [];

// Loop through numbers from 1 to 600
for (let i = 1; i <= 600; i++) {
  // Check if the number is even
  if (i % 2 === 0) {
    // If it's even, add it to the array
    evenNumbers.push(i);
  }
}

// Output the even numbers
console.log(evenNumbers);
