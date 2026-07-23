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

    return [...factors, nums]
}
console.log(factorNumbers(num));


// Q8 Prime Number

let number = 50;

const primeNumer = (num) => {

    let primeNumer = true;

    for (let i = 2; i < Math.floor(num / 2); i++) {
        if (num % i === 0) {
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

    while (num > 0) {
        let reminder = num % 10;
        sum += reminder;
        num = Math.floor(num / 10)
    }

    return sum
}

console.log(sumFunction(num));


// Q10 Stronge Number

let number = 12;

const strongeNumber = (num) => {

    let sum = 0;
    let copyNumber = num;

    while (num > 0) {
        let rem = num % 10;

        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i
        }

        sum += fact
        num = Math.floor(num / 10);

    }
    if (copyNumber === sum) {
        return `${copyNumber} is a Strong Number`;
    }
    else {
        return `${copyNumber} is NOT a Strong Number`;
    }
}
console.log(strongeNumber(number));



//Q11 sum of n element of array

let arr = [1, 2, 3, 4, 5, 6]

const sum = (nums) => {

    let sum = 0;

    for (const value of nums) {
        sum += value;
    }

    return sum
}
console.log(sum(arr));


//Q12 Find largest Number 

let arr = [1, 2, 3, 4, 5, 6];

const findLargest = () => {

    let largestNUM = arr[0];

    for (const value of arr) {
        if (largestNUM < value) {
            largestNUM = value
        }
    }

    return largestNUM
}

console.log(findLargest(arr));



//Q13 Find smallest Number

let arr = [1, 2, 3, 4, -5, 6];

const findSmallest = (num) => {

    let smallest = num[0];

    for (const value of num) {
        if (smallest > value) {
            smallest = value
        }
    }

    return smallest
}

console.log(findSmallest(arr));


//Q14 Find Second  largest Number 

let arr = [10, 20, 30, 40, -50, 60];

const secondLargestNumber = (num) => {

    let largest = num[0];
    let secondLargest = num[1];

    for (let i = 2; i < num.length; i++) {
        if (num[i] > largest) {
            secondLargest = largest;
            largest = num[i]
        }
        else if (num[i] > secondLargest && num[i] !== largest) {
            secondLargest = num[i]
        }
    }
    return { largest, secondLargest }
}

console.log(secondLargestNumber(arr));



//Q15 Find Second Smallest Number 

let arr = [10, 20, 30, 40, -50, 60];

const findSecondSmallest = (num) => {

    let smallestNum = num[0];
    let secondSmallestNum = num[1];

    for (let i = 2; i < num.length; i++) {
        if (smallestNum > num[i]) {
            secondSmallestNum = smallestNum;
            smallestNum = num[i]
        }
        else if (num[i] < secondSmallestNum && num[i] !== smallestNum) {
            secondSmallestNum = num[i]
        }
    }

    return { smallestNum, secondSmallestNum }

}

console.log(findSecondSmallest(arr));



//Q16 Revers Array With Exter Space 

let arr = [1, 2, 3, 4, 5, 6];

const reversArr = (num) => {

    let revers = [];

    for (let i = num.length - 1; i >= 0; i--) {
        revers.push(num[i])
    }

    return revers
}

console.log(reversArr(arr));



//Q17 Revers Array With No Exter Space 

let arr = [1, 2, 3, 4, 5, 6];

const revers = (num) => {

    let i = 0;
    let j = num.length - 1;

    while (i < j) {
        [num[i], num[j]] = [num[j], num[i]]
        j--
        i++
    }
    return num
}

console.log(revers(arr));


//Q18  Move Zeroes to Right

let arr = [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0];

const moveZero = (num) => {

    let j = 0;

    for (let i = 0; i < num.length; i++) {

        if (num[i] == 0) {

            [num[i], num[j]] = [num[j], num[i]]

            j++
        }
    }

    return num
}

console.log(moveZero(arr));


// Q19. Move All Negatives to Left

let arr = [-12, 11, -13, -5, 6, -7, 5, -3, 6]

const negativeMove = (num) => {

    let j = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            [num[i], num[j]] = [num[j], num[i]]
            j++
        }
    }

    return num
}

console.log(negativeMove(arr));


//Q20. Left Rotate Array by 1 Position

let arr = [1, 2, 3, 4, 5, 6, 7]

const leftRotation = (num) => {

    let ele1 = num[0];

    for (let i = 0; i < num.length - 1; i++) {
        num[i] = num[i + 1];
    }
    num[num.length - 1] = ele1

    return num
}

console.log(leftRotation(arr));



//Q21. Right Rotate Array by 1 Position

let arr = [1, 2, 3, 4, 5];

const rightRotation = (num) => {

    let lastEle = num[num.length - 1];

    for (i = num.length - 1; i > 0; i--) {
        num[i] = num[i - 1]
    }

    num[0] = lastEle

    return num
}

console.log(rightRotation(arr));

// Q22. Left Rotate Array by K Positions 

let arr = [1, 2, 3, 4, 5, 6, 7],

const leftRotationbyK = (num) => {

    let k = 3;
    k = k % num.length

    for (let i = 0; i < k; i++) {
        let ele1 = num[0];

        for (let j = 0; j < num.length - 1; j++) {
            num[j] = num[j + 1]
        }
        num[num.length - 1] = ele1
    }

    return num
}
console.log(leftRotationbyK(arr));


// Q23. Right Rotate Array by K Positions 

let arr = [1, 2, 3, 4, 5, 6, 7];

const rightRotateByK = (num) => {

    let k = 3;
    k = k % num.length;

    for (let i = 0; i < k; i++) {

        let lastElement = num[num.length - 1];

        for (let j = num.length - 1; j > 0; j--) {
            num[j] = num[j - 1]
        }
        num[0] = lastElement;
    }
    return num
}
console.log(rightRotateByK(arr));


// Q23. Left Rotate Array by K Positions (useing Exter Space)

let arr = [1, 2, 3, 4, 5, 6, 7];

const leftRotatebByK = (num, k) => {

    let temp = Array(num.length);
    k = k % num.length;

    for(let i = 0; i < num.length ; i++){
        temp[i] = num[(i + k) % num.length]
    }
    return temp
}
console.log(leftRotatebByK(arr, 3));


// Q24. Right Rotate Array by K Positions (useing Exter Space)

let arr = [1,2,3,4,5,6,7];

const rightRotateByK = (num , k) => {

    let temp = Array(num.length);
    k = k % num.length;

    for(let i = num.length-1 ; i >= 0 ; i--){
       temp[(i + k) % num.length] = num[i];
    }

    return temp
}

console.log(rightRotateByK(arr , 3));


//Q25. Remove Duplicates from Sorted Array

let arr = [1, 1, 2, 2, 3, 4, 4];

const removeDulicates = (num) => {

    let j = 1;

    for(let i = 0; i < num.length-1 ; i++){
        if(num[i] !== num[i + 1]){
            num[j] = num[i + 1]
            j++
        }
    }
    num.length = j;
    return num
}

console.log(removeDulicates(arr));


// // Q26. Merge Two Sorted Arrays In-Place

// let arr1 = [1, 3, 5, 0, 0, 0] //m = 3
// let arr2 = [2, 4, 6]

// const mergeSortedArr = (num1 , num2) => {

//     let temp = Array(Math.max(num1.length , num2.length))

//     for(let i = 0 ; i< temp.length; i++){
//         if(num1[i] > num2[i]){
//             temp[i] = num2[i]
//         }
//        else if(num1[i] < num2[i]){
//             temp[i] = num1[i]
//         }
//     }

//     return temp

// }

// console.log(mergeSortedArr(arr1,arr2));
