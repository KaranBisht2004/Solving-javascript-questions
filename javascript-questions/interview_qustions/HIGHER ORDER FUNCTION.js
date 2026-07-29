// ==============================================================================
// HIGHER ORDER FUNCTION (HOF)
// ==============================================================================
// A Higher Order Function is a function that does AT LEAST ONE of these:
// 1. Takes one or more functions as ARGUMENTS.
// 2. RETURNS a new function.
//
// In JS, functions are "First-Class Citizens", meaning unko variables ki tarah
// pass aur return kiya ja sakta hai.
// ==============================================================================


// ------------------------------------------------------------------------------
// CASE 1: Function taking another function as an ARGUMENT (Callback)
// ------------------------------------------------------------------------------

function greet(name) {
  return `Hello, ${name}!`;
}

// 'processUser' is a Higher Order Function because it accepts 'callbackFn' as a parameter
function processUser(name, callbackFn) {
  return callbackFn(name);
}

console.log(processUser("Karan", greet)); // Output: "Hello, Karan!"


// ------------------------------------------------------------------------------
// CASE 2: Function RETURNING another function
// ------------------------------------------------------------------------------

// 'multiplier' is a Higher Order Function because it returns a inner function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2); // 'double' is now a function: number => number * 2
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15


// ------------------------------------------------------------------------------
// BUILT-IN JS HIGHER ORDER FUNCTIONS (Inbuilt array methods)
// ------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];

// 1. .map() -> Accepts a function, transforms each element
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// 2. .filter() -> Accepts a function, filters elements based on boolean test
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// 3. .reduce() -> Accepts a function, reduces array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15


/*
  SUMMARY IN COMMENTS:
  ------------------
  - HOF = Function accept kare AS PARAMETER  OR  Function RETURN kare.
  - Examples: map(), filter(), reduce(), setTimeout(), addEventListener()
  - Benefit : Code reusable, modular, aur clean banta hai (Functional Programming).
*/