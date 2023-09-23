// Create a map with key-value pairs
const ppl = new Map([
  [1, { name: "Luis" }],
  [2, { name: "Adriana" }],
]);

// Add more key-value pairs to the map
ppl.set(4, { name: "Marcos" });
ppl.set(2, { name: "Otávio" });

// Get the size of the map
console.log("Map Size:", ppl.size);

// Check if a key exists in the map
console.log("Has Key 4:", ppl.has(4)); // true

// Get the value associated with a key
console.log("Get Value for Key 2:", ppl.get(2));

// Delete a key-value pair from the map
ppl.delete(2);
console.log("After deleting Key 2:", ppl.size);

// Convert map keys and values to arrays
console.log("Map Keys:", [...ppl.keys()]);
console.log("Map Values:", [...ppl.values()]);

// Clear all key-value pairs from the map
ppl.clear();
console.log("After clearing the map:", ppl.size);