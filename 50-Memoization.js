// what is Memoization?
// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

// 1. Calculations Function (Pure Function)
const calculations = (n) => {
  let sum = 0; 
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// 2. Generic Memoization Utility Function
const memoize = (fn) => {
  let cache = {}; // Cache closure scope mein safe rehta hai

  return function (...args) {
    let key = args[0]; // Argument as key

    if (key in cache) {
      console.log(`[CACHE HIT] Fetching result for ${key} from cache...`);
      return cache[key];
    } else {
      console.log(`[CACHE MISS] Calculating result for ${key}...`);
      let result = fn(key);
      cache[key] = result;
      return result;
    }
  };
};

// 3. Execution & Testing
const memoizedCalculation = memoize(calculations);

// Pehli baar: Calculation hogi
console.time("Execution 1");
console.log("Result:", memoizedCalculation(5));
console.timeEnd("Execution 1");

console.log("-----------------------------------");

// Dusri baar: Directly cache se aayega (Super Fast)
console.time("Execution 2");
console.log("Result:", memoizedCalculation(5));
console.timeEnd("Execution 2");

console.log("-----------------------------------");

// Kisi naye argument ke liye: Nayi calculation hogi
console.time("Execution 3");
console.log("Result:", memoizedCalculation(10));
console.timeEnd("Execution 3");