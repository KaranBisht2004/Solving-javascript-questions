//Recursion 

// Recurtion = Function calling itself again and again until it reaches a stopping point (Base Case). 


//Q1 print Hello n time
function temp(n) {

    if (n === 0) return

    console.log("hello");

    temp(n - 1)

}
temp(5)


//Q2 print numbers 1-n
function print(n) {

    if (n > 10) return;

    console.log(n);

    print(++n)

}
print(1)


//Q4 print numbers n-1
function prints (n){

    if(n===0) return

    console.log(n);

    prints(--n)

}
prints(10)


//Q5 sum
function sum (n){
    if(n === 0) return n;
    return n + sum(n-1)
}
console.log(sum(6))


//Q6 Factorial
function factorial (n){
    if(n===0 || n==1)return 1
    return n* factorial(n - 1)
}
console.log(factorial(5))


//Q7 Fibonacci Series

let n = 10;

let fist = 0;
let second =1;

for(let i = 0; i< n-2; i++){
    let thrid = fist + second;
    fist = second;
    second = thrid
    console.log(thrid);
    
}


function fibonacci(n, fist, second) {

    if (n === 0) return

    let thrid = fist + second

    console.log(thrid);

    fibonacci(n - 1, second, thrid)

}

let n = 10;

fibonacci(n - 2, 0, 1)



function sumofFibo  (n){
    if (n === 0 || n === 1) return n;

     return sumofFibo (n - 1) + sumofFibo (n - 2);

}
let n = 10
console.log(sumofFibo(n))