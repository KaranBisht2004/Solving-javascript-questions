// Q1
let arr = [];
for (let i = 1; i <= 5; i++) {
    let box = prompt(`Enter Number ${i + 1}:`);
    if (box === null) {
        break;
    }

    arr.push(Number(box));
}
console.log("Final Array:", arr);



// Q2 Sum of n numbers 
let arr = [2, 4, 5, 6, 7, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);


// Q3 Find Largest number 
let arr = [10, 20, 30, 40, 50, 60];

const find = (nums) => {
    let largestNUM = nums[0];

    for (const i of nums) {
        if (i > largestNUM) {
            largestNUM = i
        }
    }
    return largestNUM;
}
console.log(find(arr));



// Q4 Find Smallest number 

let arr = [10, 20, 30, 5, 50, 60];

const findSmallest = (nums) => {
    let smallestNum = nums[0]

    for (const valu of nums) {
        if (valu < smallestNum) {
            smallestNum = valu
        }
    }
    return smallestNum
}
console.log(findSmallest(arr));



// Q5 Find Second Largest number 

let arr = [10, 20, 30, 5, 50, 60];

const seacondLargest = (nums) => {// way 1

    let largestNUM = nums[0]

    for (const value of nums) {
        if (value > largestNUM) {
            largestNUM = value
        }
    }

    let seacondLargestNUM = -Infinity;

    for (const value of nums) {
        if (value !== largestNUM) {
            if (value > seacondLargestNUM) {
                seacondLargestNUM = value
            }
        }
    }

    return { largestNUM, seacondLargestNUM }
}
console.log(seacondLargest(arr));

// way 2
let arr = [10, 20, 30, 5, 50, 60];

const findSmallestNumber = (nums) => {

    let largestNUM = Math.max(nums[0], nums[1]);
    let secondNUM = Math.min(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > largestNUM) {
            secondNUM = largestNUM;
            largestNUM = nums[i]
        }
        else if (nums[i] > secondNUM && max !== nums[i]) {
            secondNUM = nums[i]
        }
    }
    return { largestNUM, secondNUM }
}
console.log(findSmallestNumber(arr));



// Q6 Revers the Array

let arr = [45, 55, 41, 22, 12, 75, 711];

const reversArr = (num) => {
    let revers = [];

    for (let i = num.length - 1; i > 0; i--) {
        revers.push(num[i])
    }
    return revers;
}
console.log(reversArr(arr));



// Q7 all Zero to left and all ones to right 

const arr = [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1];

const moveing = (arr) => {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 0) {

            let temp = arr[i];

            arr[i] = arr[j];

            arr[j] = temp
            j++
        }

    }
    return arr
}
console.log(moveing(arr));



// Q8 Left Rotation by 1 element 

let arr = [1, 5, 3, 5, 10, 51, 21, 2, 5, 4, 56]


const rotation = (num) => {

    let fistElement = num[0];

    for (let i = 0; i < num.length - 1; i++) {

        num[i] = num[i + 1];
    }
    num[num.length - 1] = fistElement;

    return num
}
console.log(rotation(arr));



// Q9 Right  Rotation by 1 element 

let arr = [1, 5, 3, 5, 10, 51, 21, 2, 5, 4, 56]

const rightRotation = (num) => {

    let lastElement = num[num.length - 1]

    for (let i = num.length - 1; i > 0; i--) {
        num[i] = num[i - 1];
    }
    num[0] = lastElement;
    return num
}
console.log(rightRotation(arr));



// Q10 Left to Right rotation by K element

let arr = [1, 2, 3, 4, 5, 6];

const leftTOright = (num) => {
    let k = 4;
    k = k % num.length;

    for (let j = 0; j < k; j++) {
        let fistElement = num[0];

        for (let i = 0; i < num.length - 1; i++) {
            num[i] = num[i + 1]
        }
        num[num.length - 1] = fistElement;
    }
    return num
}
console.log(leftTOright(arr));



// Q11 Right to left rotation by K element

let arr = [1, 2, 3, 4, 5, 6];

const rightTOleft = (num) => {
    let k = 2;
    k = k % num.length;

    for (let j = 0; j < k; j++) {

        let lastElement = num[num.length - 1];

        for (let i = num.length - 1; i > 0; i--) {
            num[i] = num[i - 1]
        }
        num[0] = lastElement;
    }
    return num;
}
console.log(rightTOleft(arr));



// Q12 Left Rotation of an Array by K Elements (Using Extra Space)
let arr = [1, 2, 3, 4, 5]

const LeftRotationNewAlgo = (num) => {

    let newArr = Array(num.length)
    let k = 2;

    for (let i = 0; i < num.length; i++) {
        newArr[i] = num[(i + k) % num.length];
    }
    return newArr
}
console.log(newAlgo(arr));


// Q13 Right Rotation of an Array by K Elements (Using Extra Space)
let arr = [1, 2, 3, 4, 5];

const rightRotationNewAlgo = (num) => {
    let newArr = Array(num.length);
    let k = 2;

    for (let i = 0; i < num.length; i++) {
        newArr[i] = num[(i - k + num.length) % num.length];
    }
    return newArr;
}
console.log(rightRotationNewAlgo(arr));



let arr = [1, 2, 3, 4, 5];

const reversAlgo = (i , j) => {
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j]
    }

} 