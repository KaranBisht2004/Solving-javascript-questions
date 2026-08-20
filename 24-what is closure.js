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

// Question 1: Counter Creator
function createCounter(initialValue) {
    let count = initialValue;
    return function () {
        count++;
        return count;
    }
}
let count = createCounter(5);
console.log(count())
console.log(count())
console.log(count())


// Question 2: Bank Account Manager

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) { return `Insufficient funds ${amount}` }
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    }
}
  const account = createBankAccount(1000);
  console.log(account.deposit(5000))
  console.log(account.withdraw(500))
