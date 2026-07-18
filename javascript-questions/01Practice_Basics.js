// see what is var , let , const 

//this is var = global scope (not use this)
var a = 10;
console.log(a);//10

a = 20 //Reassign
console.log(a);//20

var a = 30 //Redeclare 
console.log(a);//30


// Step 1: Memory Allocation (Hoisting Phase)
// JS engine ne 'var' ko dekha aur use top par le gaya (hoist kiya) 
// aur default value 'undefined' set kar di.
console.log(username); // Output: undefined
var username = "karan";



// this Let =  Ye sirf apne curly braces `{}` ke andar zinda rehta hai. Bahar leak nahi hota.(Block scope)

let b = 10;
console.log(b); // Output: 10

b = 20; // Reassign -> Allowed (Value badal sakte hain)
console.log(b); // Output: 20

// let b = 30; 
//  Redeclare -> STRICTLY BANNED!

console.log(c);//before initialization
let c = 30
// Step 1: Memory Allocation (Hoisting Phase)
// JS engine ne 'let c' ko dekha aur memory allocated toh ki, 
// LEKIN use initialization nahi di. Wo "Temporal Dead Zone" (TDZ) mai locked hai.



// this is const = Ek baar jo value lock ho gayi, wo kabhi nahi badlegi.

const d = 10;
console.log(c); // Output: 10

// d = 20;      
// ^ Reassign -> (Error: Assignment to constant variable)

// const d = 30; 
// ^ Redeclare -> (Error: Identifier 'd' has already been declared)

// console.log(x)
// const x;     
// ^ Initialization Required -> BANNED! (Error: Missing initializer in const declaration)
// Note: 'const' banate waqt hi value dena compulsory hai.




// Adding numbersss
let num1 = 20;
let num2 = 40;
console.log(num1+num2);//60





// 1. STRING (Text Data)

// jo koi quotes ke andar ho vo string hai
// Quotes chahe double (""), single (''), ya backticks (``) hon, sab string hain.

const name = "Rahul";       
const symbol = "@";          
const fakeNumber = "5";      

// Example: Agar do strings ko '+' karenge toh wo jud (join) jayengi, plus nahi hongi:
// console.log("5" + "5");   // Output: "55" (Kyunki ye text hai)




// 2. NUMBER (Maths/Numeric Data)

// this is Number: 12, 83, 8 
// Bina quotes ke jo bhi ganit (maths) wale digits hote hain, wo Numbers hain.

const age = 22;              
const price = 99.99;         
const negative = -15;        

// Example: Agar do numbers ko '+' karenge toh actual maths hoga:
// console.log(5 + 5);       // Output: 10



console.log(51+"hello" + 42 + 52 + "hello" + 10);
//51hello4252hello10



let age = Number(prompt("what is your age"))


// swaping

//1------------
let swapA = 10
let swapB = 20

let swapC = swapA // swapC =10
swapA = swapB

swapB = swapC 

console.log(`swap A = ${swapA}`);
console.log(`swap B = ${swapB}`);


//2----------------
let swap1 = 10
let swap2 = 20

swap1 = swap1 + swap2 // 30

swap2 = swap1 - swap2 // 10

swap1 = swap1 - swap2 // 20

console.log(`swap 1 = ${swap1}`);
console.log(`swap 2 = ${swap2}`);

//3--------------------

let swapX = 10;
let swapY = 20;

[swapX , swapY] = [swapY , swapX]
console.log(`swap X = ${swapX}`);
console.log(`swap Y = ${swapY}`);


//==============================================================

// ARITHMETIC OPERATORS IN JAVASCRIPT

// 1. ADDITION (+) 
let sum = 10 + 5; // Result: 15
// Note: Agar string ke sath use karoge toh ye jodega nahi, chipka (concatenate) dega:
// "5" + 5 = "55"


// 2. SUBTRACTION (-)
let diff = 10 - 5; // Result: 5


// 3. MULTIPLICATION (*) 
let product = 10 * 5; // Result: 50


// 4. DIVISION (/) -> (Divide)
let quotient = 10 / 5; // Result: 2


// 5. MODULUS (%) -> Remainder (Bacha hua hissa)
// Yeh division ke baad bacha hua 'remainder' nikaal ke deta hai.
let remainder = 10 % 3; // Result: 1 (Kyunki 3 * 3 = 9, bacha 1)


// 6. EXPONENTIATION (**) -> Power 
// Kisi number ki power nikaalna (Math.pow ka naya tarika).
let power = 2 ** 3; // Result: 8 (Yani 2 * 2 * 2)

let result1 = Math.pow(2, 3); // Matlab: 2 * 2 * 2
console.log(result1); // Output: 8



// 7. INCREMENT (++) & DECREMENT (--) 
let x = 5;
x++; // Ab x ho gaya 6 (Increment)

let y = 5;
y--; // Ab y ho gaya 4 (Decrement)




//==============================================================




// COMPARISON OPERATORS IN JAVASCRIPT
// Inka kaam hai comparison karna aur Boolean (true / false) return karna.

// 1. EQUAL TO (==) -> Bas Value dekhta hai (Loose Equality)
// Isko type (string hai ya number) se koi matlab nahi hota.
console.log(5 == 5);     // true (Dono 5 hain)
console.log(5 == "5");   // true (Kyunki value dono ki paanch hi hai, string ko ignore maar deta hai)


// 2. STRICT EQUAL TO (===) -> Value + Type dono dekhta hai (Strict Equality)
// Yeh sabse safe hai. Yeh check karta hai ki value bhi same ho AUR data type bhi same ho.
console.log(5 === 5);    // true (Dono number hain aur dono 5 hain)
console.log(5 === "5");  // false (Kyunki ek Number hai aur doosra String)


// 3. NOT EQUAL TO (!=) -> Barabar nahi hai (Loose)
// Agar dono barabar nahi hain toh true dega. Yeh bhi type check nahi karta.
console.log(5 != 8);     // true (Haan, 5 aur 8 barabar nahi hain)
console.log(5 != "5");   // false (Kyunki value barabar hai, toh isne bola 'nahi, ye toh barabar hain')


// 4. STRICT NOT EQUAL TO (!==) -> Barabar nahi hai (Strict)
// Value aur type dono alag honi chahiye.
console.log(5 !== "5");  // true (Kyunki dono ka type alag hai, isliye ye barabar nahi hain)


// 5. GREATER THAN (>) & LESS THAN (<) -> Bada hai ya Chota hai
console.log(10 > 5);     // true (10 bada hai 5 se)
console.log(3 < 1);      // false (3 chota nahi hai 1 se)


// 6. GREATER THAN OR EQUAL TO (>=) & LESS THAN OR EQUAL TO (<=)
// Bada ya barabar / Chota ya barabar
console.log(10 >= 10);   // true (Bada nahi hai toh kya hua, barabar toh hai!)
console.log(5 <= 8);     // true (5 chota hai 8 se)




// LOGICAL OPERATORS IN JAVASCRIPT

// 1. LOGICAL AND (&&) -> "Dono conditions sahi honi chahiye"
// Yeh tabhi 'true' dega jab iske left aur right dono taraf ki baatein SAHI (true) hon.

let bankBalance = 500;
let age = 20;

// Age 18+ honi chahiye AND Bank Balance 100 se zyada hona chahiye
let canWithdraw = (age >= 18) && (bankBalance > 100); 
console.log(canWithdraw); // true (Kyunki dono shartein poori ho rahi hain)


// 2. LOGICAL OR (||) -> "Koi EK bhi condition sahi chalegi"
// Yeh kehta hai ki left ya right mein se koi EK bhi sahi (true) ho gaya, toh main 'true' de dunga.
// Yeh sirf tabhi 'false' hota hai jab dono taraf ki baatein galat hon.

let hasCash = false;
let hasCard = true;

// Ya toh Cash ho YA Card ho, payment ho jayegi
let canBuy = hasCash || hasCard;
console.log(canBuy); // true 


// 3. LOGICAL NOT (!) -> "Bilkul ULTA kar dena"
// Yeh aalsi bacha hai, jo bhi bologe uska ulta karega.
// true ko false bana dega, aur false ko true.

let isRaining = true;
console.log(!isRaining); // false (Sahi ka ulta galat)

let userLoggedIn = false;
console.log(!userLoggedIn); // true (Kyunki user logged in nahi hai, toh !userLoggedIn true hoga)


// Q1
let i = 11;
i = i++ + ++i
console.log(i);


// Q2
let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b;
console. log("a=" + a); //13
console. log("b=" + b); // 24
console. log("c=" + c); //103

// Q3
let b = true // ture means = 1
b++;
console.log(b);// 2

//Q4
let i =11;
let j = --(i++);// Error



//===============================================================
// MATH

// 1. Math.round() -> Normal Round Off (Jo pass padega)
// ---------------------------------------------------
// Agar point .5 ya usse bada hai toh upar wala number, nahi toh neeche wala.
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.4)); // Output: 4


// 2. Math.ceil() -> Hamesha UPAR wala (Ceiling = Chhat)
// ----------------------------------------------------
// Point ke baad kuch bhi ho, ye hamesha agle poore number par chala jayega.
console.log(Math.ceil(4.1));  // Output: 5 (4 se thoda bhi upar gaya toh seedha 5)
console.log(Math.ceil(7.01)); // Output: 8


// 3. Math.floor() -> Hamesha NEECHE wala (Floor = Zameen)
// -------------------------------------------------------
// Point ke baad wale hisse ko chhodkar hamesha peeche wale poore number par la deta hai.
console.log(Math.floor(4.9)); // Output: 4 (Point ke baad ka 9 uda diya)
console.log(Math.floor(7.2)); // Output: 7


// 4. Math.trunc() -> Point ke baad ka maal saaf!
// ----------------------------------------------
// Yeh simple point ke baad ki digit ko delete maar deta hai (Floor jaisa hi lagta hai positive numbers mein).
console.log(Math.trunc(4.9)); // Output: 4


// 5. Math.pow() -> Power nikaalna (Ghaat)
// ---------------------------------------
// Math.pow(base, power) -> Humne pehle bhi dekha hai.
console.log(Math.pow(2, 3));  // Output: 8 (2 * 2 * 2)


// 6. Math.sqrt() -> Square Root (Vargmool)
// ----------------------------------------
console.log(Math.sqrt(25));   // Output: 5 (Kyunki 5 * 5 = 25)
console.log(Math.sqrt(64));   // Output: 8


// 7. Math.min() aur Math.max() -> Sabse chota aur bada number
// -----------------------------------------------------------
console.log(Math.max(10, 5, 80, 45)); // Output: 80 (Sabse bada)
console.log(Math.min(10, 5, 80, 45)); // Output: 5  (Sabse chota)


// 8. Math.random() -> Random Number Generator 
// ------------------------------------------------------------
// Yeh hamesha 0 (inclusive) aur 1 (exclusive) ke beech ka koi bhi point wala random number dega.
console.log(Math.random()); // Output: Jaise 0.435728... ya 0.8291...

//  PRO TIP: Agar 1 se 10 ke beech ka poora (integer) random number chahiye:
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10); 


// 9. Math.cbrt() -> Cube Root (Ghanmool)
// ----------------------------------------
// Jaise Math.sqrt() square root nikaalta hai (jaise 25 ka 5), 
// waise hi Math.cbrt() check karta hai ki kaun sa number 3 baar khud se multiply hone par ye value dega.

console.log(Math.cbrt(8));     // Output: 2  (Kyunki 2 * 2 * 2 = 8)
console.log(Math.cbrt(27));    // Output: 3  (Kyunki 3 * 3 * 3 = 27)
console.log(Math.cbrt(125));   // Output: 5  (Kyunki 5 * 5 * 5 = 125)


// 10. Math.abs() -> Absolute Value (Hamesha Positive)
// ----------------------------------------------------
// Abs ka matlab hota hai 'Absolute'. Iska kaam hai sign (+ ya -) ko ignore karna.
// Seedhi baat: Yeh negative number ko positive bana deta hai, aur positive ko positive hi rehne deta hai.

console.log(Math.abs(-5));     // Output: 5  (Minus gayab!)
console.log(Math.abs(-120.5)); // Output: 120.5 (Decimal ka minus bhi saaf)
console.log(Math.abs(10));     // Output: 10 (Positive pehle se tha, toh waisa hi raha)


// 11. toFixed() (Decimals ko control karna)

// Iska simple kaam hai: Point (decimal) ke baad aapko kitne numbers chahiye, unhe fix karna.
// Yeh point ke baad ke numbers ko round-off bhi karta hai aur result ko STRING mein badal deta hai.

const pi = 3.1415926535;

// 1. Point ke baad sirf 2 numbers chahiye:
console.log(pi.toFixed(2)); // Output: "3.14"

// 2. Point ke baad sirf 4 numbers chahiye:
console.log(pi.toFixed(4)); // Output: "3.1416" (Dhyan se dekho, last digit ko isne round-off karke 6 kar diya!)

// 3. Point ke baad kuch bhi nahi chahiye (0 digits):
console.log(pi.toFixed(0)); // Output: "3"

// toFixed() chalane ke baad jo result milta hai, uska type NUMBER se badalkar STRING ho jata hai!

const price = 99.9912;
const fixedPrice = price.toFixed(2); // "99.99" (Yeh ab string hai)

console.log(typeof fixedPrice); // Output: "string"

// Agar aap is par dobara math calculations karna chahte hain, toh ise pehle wapas Number banana padega:
const finalNumber = Number(price.toFixed(2)); // 99.99 (Ab ye Number hai)



// Math Qustions

// Q1 CALCULATE AREA AND PERIMETER OF A RECTANGLE

let length = 5; 
let width = 7;  

let area = length * width; 
console.log("Area of Rectangle:", area); // Output: 35 

let perimeter = 2 * (length + width); 
console.log("Perimeter of Rectangle:", perimeter); // Output: 24 



// Q2 GENERATE 6-DIGIT OTP (100% BULLET-PROOF)

console.log(Math.floor((Math.random() * 900000) + 100000));




// Q3 area of triangle by Heron's formula

let a= 5;
let b= 5;
let c= 4;

let s = (a+b+c) /2

console.log(Math.trunc(Math.sqrt(s*(s-a) * (s-b) * (s-c))));



// Q4 Circumference of circle

let r = 6;
console.log(Number(2*Math.PI*r).toFixed(2));
