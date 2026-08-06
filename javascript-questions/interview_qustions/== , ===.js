// DIFFERENCE BETWEEN == , ===

// == (Loose Equality)
// Ye sirf values ko check karta hai (type conversion karne ke baad).

// === (Strict Equality)
// Ye value aur datatype (type) dono ko check karta hai, bina kisi conversion ke.


// Because Object is a Non-Primitive Data Type (Reference Type), 
// it compares by Memory Location. That's why both are false:
console.log({} == {});
console.log({} === {});

// Because array is a Non-Primitive Data Type (Reference Type), 
// it compares by Memory Location. That's why both are false:
console.log([] == []);  // false
console.log([] === []); // false



const func1 = () => console.log("Hi");
const func2 = () => console.log("Hi");

console.log(func1 == func2);  // Output: false
console.log(func1 === func2); // Output: false


/*
(Non-Primitive / Reference Data Types) Objects aur Arrays value se nahi, balki apne Memory Reference (Address) se compare hote hain. Har naya Object/Array memory me alag jagah leta hai, isiliye answer false aata hai."
*/



const masterFunc = () => console.log("Hello");
const cloneFunc = masterFunc; // Ab dono ka memory address ek hi hai

console.log(masterFunc === cloneFunc); // Output: true

//function ka reference doosre variable ko de do (same address point karwa do), toh answer true aayega:

