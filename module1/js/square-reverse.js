function squareArray(){
     // Define the array of numbers
     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     console.log("Original array:", numbers);

     // Use the map() method to create a new array of squares
     const squares = numbers.map(number => number * number);
 
     // Display the squares array in the console
     console.log("Squares of numbers:", squares);
}

function reverseArray(){
     // Define the array of numbers
     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     console.log("Original array:", numbers);
     
     // Reverse the array
     numbers.reverse();
 
     // Display the reversed array in the console
     console.log("Reversed array:", numbers);
}