function findLargestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
console.log(findLargestNumber([10, 5, 20, 15])); // Output: 20

//--------------------------------------------------------------------------------------//

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false

//--------------------------------------------------------------------------------------//

function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

//--------------------------------------------------------------------------------------//

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//--------------------------------------------------------------------------------------//

function sumOfArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15
