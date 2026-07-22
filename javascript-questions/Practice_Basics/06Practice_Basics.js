//Q1. Product of Array Except Self

let arr = [1, 2, 3, 4];

const product = (nums) => {

    let totalProduct = 1;
    let exceptSelf = [];

    for (const values of nums) {
        totalProduct *= values
    }
    for (let i = 0; i < nums.length; i++) {
        let except = totalProduct / nums[i]
        exceptSelf.push(except)
    }
    return { exceptSelf, totalProduct }
}
console.log(product(arr));


//Q2. Sum of Even Numbers

let arr = [3, 8, 5, 2, 10, 7]

const sumOFeven = (nums) => {

    let sum = 0;
    for (const value of nums) {
        if (value % 2 === 0) {
            sum += value
        }
    }
    return { sum }
}
console.log(sumOFeven(arr))


//Q3. Find Index of the Largest Number

let arr = [4, 1, 9, 3, 9, 2]

const indexofLargestNumber = (nums) => {

    let max = nums[0];
    let largestNumberIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]
            largestNumberIndex = i
        }
    }

    return largestNumberIndex;
}
console.log(indexofLargestNumber(arr));


// Q4. Find Smallest Number (With Negative Handling)

let arr = [12, 5, -3, 8, -15, 0]

const findSmallestNum = (nums) => {

    let smallestValue = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (smallestValue > nums[i]) {
            smallestValue = nums[i]
        }
    }

    return smallestValue
}
console.log(findSmallestNum(arr));



//Q5. Second Largest Number

let arr = [10, 20, 4, 45, 99, 99]

const secondLargestNumber = (nums) => {

    let largestNUM = nums[0];
    let secondLargestNumber = -Infinity;

    for (const value of nums) {
        if (largestNUM < value) {
            largestNUM = value
        }
    }
    for (const value of nums) {
        if (largestNUM > value) {
            if (secondLargestNumber < value) {
                secondLargestNumber = value
            }
        }
    }

    return { largestNUM, secondLargestNumber }
}
console.log(secondLargestNumber(arr));



// Q6. Reverse Array In-Place

let arr = [1, 2, 3, 4, 5];

const reversArr = (nums) => {

    let i = 0
    let j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return nums
}
console.log(reversArr(arr));



//Q7 Factors of number

let num = 90;

const factorNumbers = (nums) => {

    let factors = [];

    for (let i = 1; i <= Math.floor(nums / 2); i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }

    return [...factors,nums]
}
console.log(factorNumbers(num));


// Q8 Prime Number

let number = 50;

const primeNumer = (num) =>{

    let primeNumer  = true;

    for(let i  =2 ; i < Math.floor(num/2); i++ ){
        if(num % i === 0){
            primeNumer = false;
            break
        }
    }
    return `${num} is primeNumer = ${primeNumer}`
}
console.log(primeNumer(number));


// Q9 Sum of Digit

let num = 1234;

const sumFunction = (num) => {
    let sum = 0;
    
    while(num>0){
    let reminder = num % 10;
    sum+= reminder;
    num = Math.floor(num/10)    
    }

    return sum
}

console.log(sumFunction(num));
