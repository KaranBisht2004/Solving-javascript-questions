// ==============================================================================
// FIRST-ORDER FUNCTION (FOF)
// ==============================================================================
// A First-Order Function is a REGULAR function that:
// 1. Does NOT accept any function as an argument.
// 2. Does NOT return another function.
//
// Yeh simple functions hote hain jo standard values (numbers, strings, 
// objects, arrays) ke saath kaam karte hain.
// ==============================================================================


// ------------------------------------------------------------------------------
// EXAMPLE 1: Simple Function with Primitives (Numbers/Strings)
// ------------------------------------------------------------------------------

// Purely values accept kar raha hai aur value return kar raha hai -> FIRST ORDER
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // Output: 15


// ------------------------------------------------------------------------------
// EXAMPLE 2: Function taking/returning Objects or Arrays
// ------------------------------------------------------------------------------

// Object input, String output -> FIRST ORDER
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const userObj = { firstName: "Karan", lastName: "Bisht" };
console.log(getFullName(userObj)); // Output: "Karan Bisht"


// ==============================================================================
// QUICK COMPARISON: First-Order vs Higher-Order
// ==============================================================================

// ❌ First-Order Function: Standard values ke sath deal karta hai
const square = (n) => n * n; 

// ✅ Higher-Order Function: Function pass ho raha hai (callback)
const numbers = [1, 2, 3];
const squaredArray = numbers.map(square); // map() yahan HOF hai


/*
  SUMMARY IN COMMENTS:
  ------------------
  - First-Class Function : Concept (JS mai functions ko variable ki tarah pass kar sakte ho).
  - First-Order Function: Function jo NA kisi function ko le, NA kisi function ko laute.
  - Higher-Order Function: Function jo dusre function ko LE ya LAUTE (HOF).
*/