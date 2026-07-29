const person = { name: "Karan" };

function greet(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

// 1. call: Single values bhejta hai, TURANT execute hota hai
greet.call(person, "Hello", "!"); // Hello, I'm Karan!

// 2. apply: Array mai values bhejta hai, TURANT execute hota hai
greet.apply(person, ["Hello", "!"]); // Hello, I'm Karan!

// 3. bind: Immediate execute NAHI hota, ek NAYA FUNCTION return karta hai (baad mai chalaney ke liye)
const greetLater = greet.bind(person, "Hello", "!");
greetLater(); // Hello, I'm Karan!

/* 
  SHORT SUMMARY:
  - call  --> Direct arguments (commas) + Turant chalega
  - apply --> Array arguments ([ ])     + Turant chalega
  - bind  --> Direct arguments (commas) + Naya function dega (Baad mai chalao)
*/