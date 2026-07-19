// difference B/W Shallow Copy & Deep Copy

const obj1 = {test : "karan"};
const obj2 = obj1;
obj2.test = "bisht" 
console.log(obj1,obj2);
/*
 JavaScript me objects 'Heap Memory' me store hote hain aur hamesha 'Reference' (address) share karta hai 
 or jb humne obj1 = obj2 kiya toh data copy ni hua balki wahi same memory address copy hota hai—jise hum 'Shallow Copy' kehte hain.
*/


const obj1 = { test: "karan" };

// Spread operator se naya reference bana
const obj2 = { ...obj1 }; 

obj2.test = "bisht"; 

console.log(obj1.test); // "karan" (Safe raha!)
console.log(obj2.test); // "bisht"

// spread operator not good for nested objects

//----------------------------------------------------------------------------

// Deep Copy --
const obj1 = { test: "karan" };

// Object ko string banaya, fir wapas naya object bana diya
const obj2 = JSON.parse(JSON.stringify(obj1)); 

obj2.test = "bisht"; 

console.log(obj1.test); // "karan" (Safe raha!)