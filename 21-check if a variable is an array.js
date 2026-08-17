// How to check if a variable is an array?

let a = [1, 2, 3, 4, 5];
let b = 50;

console.log(Array.isArray(a));
console.log(Array.isArray(b));

console.log(Object.prototype.toString.call(a)==='[object Array]');
