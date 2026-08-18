// Arrow function vs regular function?

// 1. Normal Function
// - Isme 'this' ka behavior dynamic hota hai. Function ko jis object ne call 
//   kiya hai, 'this' hamesha usi ko point karega.
// - Iske paas apna inbuilt 'arguments' object hota hai.
// - Ise 'new' keyword ke sath use karke constructor ki tarah use kiya ja sakta hai.

// 2. Arrow Function
// - Iska apna koi 'this' nahi hota. Ye apne parent/surrounding scope se 
//   'this' ko udhaar leta hai (jise Lexical Scope kehte hain).
// - Iske paas 'arguments' object nahi hota.
// - Ise 'new' keyword ke sath use nahi kiya ja sakta (error de dega).



const user = {
  name: "Karan",
  
  // Normal Function
  sayHello: function() {
    console.log("Normal:", this.name); 
  },
  
  // Arrow Function
  sayHi: () => {
    console.log("Arrow:", this.name); 
  }
};

user.sayHello(); // Output: "Normal: Karan" (kyunki user ne call kiya)
user.sayHi();    // Output: "Arrow: undefined" (kyunki iska 'this' bahar ke window/global scope ko point kar raha hai)



// Normal Function
function normalArgs() {
  console.log(arguments); // Saare arguments print ho jayenge
}
normalArgs(10, 20, 30); // Output: [10, 20, 30]


// Arrow Function
const arrowArgs = () => {
  console.log(arguments); // Error: arguments is not defined
};
arrowArgs(10, 20, 30);


// Normal Function as Constructor
function Person(name) {
  this.name = name;
}
const person1 = new Person("Bisht"); // Ekdam sahi chalega!
console.log(person1.name); // Output: "Bisht"


// Arrow Function as Constructor
const Animal = (type) => {
  this.type = type;
};
const animal1 = new Animal("Dog"); // TypeError: Animal is not a constructor (Error de dega!)









// 1. In JS Execution Engines (Node.js, Bun, Deno)
console.log(this); // Output: {} 
// Because JS Execution Engines mai 'this' empty object {} ko point karta hai.


// 2. In Browser Environment
console.log(this); // Output: Window 
// {window: Window, self: Window, document: document, name: '', location: Location, ...} (Browser me)
// Browser ke andar global object jo hai vo Window hota hai.