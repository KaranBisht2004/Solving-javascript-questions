// Loop
for (let i = 0; i < 5; i++) {
   console.log(i);
}


for (let i = 10; i > 1; i--) {
   console.log(i);
}


let i = 1;
for (; i < 5; i++) {
   console.log(i);
}
console.log(i, "hello");



// Q1 Sum of n natural numbers 

let n = 20;
let sum = 0
for (let i = 1; i <= n; i++) {
   sum += i
}
console.log(sum);



// Q2 factorial of number

let num = 5;
let factorial = 1
for (let i = 1; i <= num; i++) {
   factorial *= i
}
console.log(factorial);



// Q3 Factors of number

let factorNUM = 12;
let factors = [];

for (let i = 1; i <= Math.floor(factorNUM / 2); i++) {
   if (factorNUM % i === 0) {
      factors.push(i);
   }
}
factors.push(factorNUM);
console.log(factors);



// Q4 Prime number

let numberP = 7;
let primeNumer = true;
for (let i = 2; i < Math.floor(numberP / 2); i++) {
   if (numberP % i === 0) {
      primeNumer = false
      break;
   }
}
console.log(primeNumer);


function isPrime(num) {

   if (num <= 1) return false;

   if (num === 2) return true;

   if (num % 2 === 0) return false;

   let boundary = Math.floor(Math.sqrt(num));
   for (let i = 3; i <= boundary; i += 2) {
      if (num % i === 0) {
         return false;
      }
   }
   return true;
}

console.log(isPrime(7));


// Q5 Find Second Largest Number

const findSecondLargestTwoPass = (arr) => {

   if (!Array.isArray(arr) || arr.length < 2) {
      return "Error: At least two elements required";
   }

   let largest = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
         largest = arr[i];
      }
   }


   let secondLargest = -Infinity;

   for (let i = 0; i < arr.length; i++) {

      if (arr[i] !== largest) {
         if (arr[i] > secondLargest) {
            secondLargest = arr[i];
         }
      }
   }

   return secondLargest === -Infinity ? "No second largest found" : secondLargest;
};

console.log(findSecondLargestTwoPass([10, 20, 4, 45, 99, 99, 45, 500]));



// Q6 Grouping Numbers (Even/Odd Count)

const countEvenOdd = (arr) => {

   let counter = { even: 0, odd: 0 }

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         counter.even++;
      }
      else {
         counter.odd++;
      }
   }
   return counter;
}
console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7]));



// Q7 Find Intersections

const findCommonTwoPass = (arr1, arr2) => {
   let commonNumbers = [];
   let obj = {};

   for (let i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = true;
   }

   for (let i = 0; i < arr2.length; i++) {
      const value = arr2.length > 0 ? arr2[i] : null;
      if (obj[value]) {
         commonNumbers.push(value);
         obj[value] = false;
      }
   }

   return commonNumbers;
};

console.log(findCommonTwoPass([1, 2, 3, 4], [3, 4, 5, 6]));



// Q8 Character Counter

const charCounter = (str) => {
   if (typeof str !== "string") return {};

   let counts = {};

   for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (!counts[char]) {
         counts[char] = 1;
      } else {
         counts[char] += 1;
      }
   }
   return counts;
};

console.log(charCounter("hello"));


// Q9 Find the Missing Number

const findMissingNumber = (arr, n) => {

   let found = [];

   for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
         found.push(i)
      }
   }
return found;
}
console.log(findMissingNumber([1, 2, 4, 5, 10], 10));

