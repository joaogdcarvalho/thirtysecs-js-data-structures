// Define and initialize the number array
const nmb = [1, 7, 2.9, Math.PI];
console.log("Number Array:", nmb);

// Convert a string into an array of characters
const txt = Array.from("pneumoultramicroscopicossilicovulcanoconiótico");
console.log("Text Array:", txt);

// Add elements to the number array using push
nmb.push(2 / 3);
console.log("After push(2/3):", nmb);

nmb.push(Math.sqrt(39), -88);
console.log("After push(Math.sqrt(39), -88):", nmb);

// Add an element at the beginning of the text array
txt.unshift("#");
console.log('After unshift("#"):', txt);

// Join the text array elements into a single string
console.log("Join:", txt.join(""));

// Reverse the text array and join the elements
console.log("Reverse:", txt.reverse().join(""));

// Get the length of the text array
console.log("Length:", txt.length);

// Access the last and third elements of the text array
console.log("Last Element:", txt[txt.length - 1]);
console.log("Third Element:", txt[2]);

// Slice elements from the number array
console.log("Slice:", nmb.slice(1, 3));

// Map function to double each number in the array
console.log(
  "Map/Double:",
  nmb.map((n) => n * 2)
);

// Filter function to get even numbers from the array
console.log(
  "Filter (Even Numbers):",
  nmb.filter((n) => n % 2 === 0)
);

// Reduce function to calculate the sum of elements in the number array
console.log(
  "Reduce (Sum):",
  nmb.reduce((a, n) => a + n, 0)
);