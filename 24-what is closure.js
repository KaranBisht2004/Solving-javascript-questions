// What is a closure in JavaScript?


// Closure = A function that remembers variables from its outer scope even after the outer
// function has finished executing.

function outter() {
    let a = 50;
    function inner() {
        console.log(a);
    }
    return inner;
}

let innerexecution = outter(); // outter() call hua aur inner function return karke 'innerexecution' variable mein save ho gaya
innerexecution(); // Output: 50


//-----Jab hum ek function ke andar se dusre function ko return karte hain, toh inner function apne outer scope ke variables ko hamesha yaad rakhta hai. chahe outer function execute hokar khatam hi kyun na ho gaya ho. Is yaad rakhne ke mechanism ko hi Closure kehte hain."

