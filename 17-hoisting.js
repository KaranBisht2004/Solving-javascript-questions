// What is hoisting?

// Hoisting is JavaScript’s behavior where declarations are processed before the code is executed, which allows us to use function declarations before they are defined.




// 1. let & const: Hoisted but in TDZ (Cannot access before initialization)
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 2;

// 2. var: Hoisted with 'undefined'
console.log(b); // undefined
var b = 5;

// 3. Function Declaration: Fully hoisted
hello(); // "hello"
function hello() {
  console.log('hello');
}