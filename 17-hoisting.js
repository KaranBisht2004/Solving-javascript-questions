// What is hoisting?


// Hoisting is when you access a variable before its declaration.
// It helps to execute functions before their declaration in the code.


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
