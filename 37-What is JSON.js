// What is JSON and how to parse it?`

// JSON (JavaScript Object Notation) ek lightweight data-format hai jise data ko server aur web client ke beech transfer karne ke liye use kiya jata hai.

//JSON.parse()
//JSON string ko JavaScript object mein convert karne ke liye JSON.parse() method ka use karte hain.

const jsonString = '{"name": "Mark", "role": "Developer"}'
const convertedObject = JSON.parse(jsonString)

console.log(convertedObject);

//-- JSON.parse() String ko JavaScript object mein convert karne ke liye use hota hai.
//--JSON.stringify() JavaScript object ko string mein convert karne ke liye use hota hai.
