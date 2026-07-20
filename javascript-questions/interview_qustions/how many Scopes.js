//How Many Scopes?

// 1. Global Scope
//  Jo variable na kisi function ke andar ho na kisi Block {} ke andar ho.Isko poore code me kahin se bhi access kiya ja sakta hai.
// Example: const user = "Karan"; (Sabse upar script me).



// 2. Function Scope
// Jo variable kisi function ke andar ho.
//  Sahi hai. JavaScript me var, let, aur const teeno hi function scope ko follow karte hain. Agar function ke andar banaye hain, toh bahar access nahi ho sakte.



// 3. Block Scope {}
//  Jo variable kisi block ke andar ho {} (jaise if, for loop).
// Block scope ko sirf let aur const maante hain. Agar aapne block ke andar var likh diya, toh wo block ko todkar bahar nikal jata hai (leak ho jata hai).



// 4. Lexical Scope
// Aapne jo kaha: Ek main (parent) function ke andar variable hai, aur uske andar ek child function hai, toh child function parent ke variable ko access kar sakta hai kyunki wo uske lexical scope me hai.



// 5. Module scope



for(let i= 0;i<5;i++){
   console.log("loppp= for LOOp")
}
let a = 1

while(a <=5){
    console.log("loop= while LOOp");
    a++
}

let i = 0
do {
    console.log("loop = do while LOOp");
    i++
} while (i <= 5);

