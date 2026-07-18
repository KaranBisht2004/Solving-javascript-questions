// DIFFERENCE BETWEEN NULL AND UNDEFINED


/*
     -> undefined = Variable banaya hai, par value dena BHOOL gaye (Default).
     -> null      = Jaan-bhoojh kar variable ko KHALI choda hai (Intentional empty value).
*/


// 1. UNDEFINED (JavaScript ka default behavior)
// Jab hum koi variable declare toh karte hain, par usme koi value assign (put) nahi karte,
// toh JavaScript usme khud se 'undefined' daal deta hai.

let myRole; 
console.log(myRole); // Output: undefined (Kyunki value dena bhool gaye)
console.log(typeof myRole); // Output: "undefined"



// 2. NULL (Developer ki choice)
// Jab hum Intentionally (jaan-bhoojh kar) kisi variable ko khali chodna chahte hain 
// taaki ye dikha sakein ki "Abhi isme koi data nahi hai", tab hum 'null' use karte hain.

let apiData = null; // Humne khud likha hai ki abhi data khali hai, baad me aayega.
console.log(apiData); // Output: null





// JavaScript me ek mazaak hai ki 'null' ka type check karo toh wo 'object' batata hai:

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ❌ (Yeh JavaScript ka ek purana bug/error hai)

// Comparison checks:
console.log(undefined == null);  // true  (Kyunki dono ki value 'khali' hi darshati hai)
console.log(undefined === null); // false (Kyunki dono ka data type alal-alag hai)