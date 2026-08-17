// What is the use of typeof?


// the typeof operator is used to check the data type of a variable or value
console.log(typeof "Karan");     // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"

// Objects and Functions
console.log(typeof { name: "Karan" }); // "object"
console.log(typeof [1, 2, 3]);         // "object" (Arrays are objects in JS)
console.log(typeof function(){});      // "function"