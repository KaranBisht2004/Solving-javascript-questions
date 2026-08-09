// var let const

// Question 2: Scoping & Hoisting
var x = 10;
function test() {
    // Function ke andar 'var x' hai isliye ye global 'x = 10' ko ni liya.

    console.log(x); // Output: undefined
    // Memory Creation Phase me 'x'  (undefined) ho jata hai isliye undefined deta hai.

    var x = 20;

    console.log(x); // Output: 20

}
test();
console.log(x); // Output: 10
//  Global Execution Context me 'x' ki value 10 hi hai




// Question 2: Temporal Dead Zone (TDZ) & Shadowing
let a = 50;

function demo() {
  console.log(a);// is ne golbel pe iss le ni liya q ki function mai a hai 
  let a = 100;
}
demo();
//ye ReferenceError Cannot access 'a' before initialization




// Question 3: Loops & Closures 
// Loop A
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 1000);
  // Output: var: 3 (teeno baar)
  // Reason: 'var' function-scoped hai, toh poore loop ke paas sirf EK hi 'i' variable hota hai.
  // Loop 0ms me fast chalta hai aur 'i' ki final value 3 ho jati hai. 
  // 1000ms baad jab setTimeout ka callback chalta hai, toh use same 'i' (value 3) milta hai.
}

// Loop B
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 1000);
  // Output: let: 0, let: 1, let: 2
  // Reason: 'let' block-scoped hai, isliye har iteration (chakkar) me naya 'j' variable create 
}



// Question 4: Mutability vs Reassignment (const)
// Block 1
const obj = { name: 'Rahul' };
obj.name = 'Aman';
console.log(obj.name);

// Block 2
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Block 3
const x = 5;
x = 10;
console.log(x);// error const change ni kar skte