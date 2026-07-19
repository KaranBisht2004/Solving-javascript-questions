// what is Temporal Dead Zone?


// 1. Yeh sirf 'let' aur 'const' variables ke sath hota hai.
// 2. TDZ ke andar variable ko access karne par "ReferenceError" aata hai.
// 3. Why it exists? Taaki developers variables ko bina declare kiye ya galti se pehle use na karein 



console.log(myGame); // ReferenceError: Cannot access 'myGame' before initialization
// Kyunki abhi 'myGame' TDZ ke andar fassa hua hai!

let myGame; 

myGame = "Valorant"; //
console.log(myGame); // Output: "Valorant"


const TDZ = ()=>{
    console.log(a);
    let a = "hello"
}

TDZ