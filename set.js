// Create an empty set and a set with initial values
const nmt = new Set();
const nms = new Set([1, 2, 3, 4]);

// Uncommenting the following line would result in an error:
// const nme = new Set(1);

// Create a set with initial values and display its size
const nmd = new Set([5, 8]);
console.log("Set Size:", nmd.size);

// Add a unique element to the set and display the updated size
nmd.add(4);
console.log("After adding 4:", nmd.size);

// Attempt to add a repeated element (won't affect the set)
nmd.add(5);
console.log("After adding 5 (repeated):", nmd.size);

// Check if values exist in the set
console.log("Has 8:", nmd.has(8)); // true
console.log("Has 1:", nmd.has(1)); // false

// Delete an item from the set and check its existence
nmd.delete(5);
console.log("After deleting 5:", nmd.has(5)); // false

// Convert the set to an array
const arr = [...nmd];
console.log("Set to Array:", arr);

// Clear all elements from the set
nmd.clear();
console.log("After clearing the set:", nmd.size);

// Create a set from an array with duplicate elements
const arb = ["a", "a", "b", "c", "c"];
const seq = new Set(arb);
console.log("Set from Array (Unique Elements):", [...seq]);