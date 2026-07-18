// DIFFERENCE BETWEEN LET AND CONST

// let
// 1. Iski value ko hum baad me reassign (change) kar sakte hain.
// 2. Isko bina kisi value ke sirf declare karke chhod sakte hain.

// const (Constant)
// 1. Iski value ek baar assign hone ke baad reassign (change) nahi ho sakti.
// 2. Isko declare karte waqt hi value dena compulsory (zaroori) hai.


let age = 21;
age = 22; // Bilkul sahi hai, value badal gayi.
const name = "Karan";
name = "Bisht"; // ❌ TypeError: Assignment to constant variable. (Value nahi badal sakte)


let score; //  Sahi hai, iski value abhi 'undefined' hai.

const PI; // ❌ SyntaxError: Missing initializer in const declaration. (Bina value diye nahi chhod sakte)