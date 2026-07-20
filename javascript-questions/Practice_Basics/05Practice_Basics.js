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



// Q14 Remove duplicates from the sorted array

let arr = [0, 0, 1, 1, 2, 2, 3]

const removeduplicates = (nums) => {

    let j = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[j] = nums[i + 1]
            j++
        }
    }
    console.log("Modified Array:", nums.slice(0, j));
    return j;

}
console.log(removeduplicates(arr));




// Q15 Merge sorted array

let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];

const merageingSortedArr = (num1, num2) => {

    let merge = Array(num1.length + num2.length);

    let i = 0;
    let j = 0;
    let k = 0;
    while (i < num1.length && j < num2.length) {
        if (num1[i] < num2[j]) {
            merge[k] = num1[i]
            i++
            k++
        }
        else {
            merge[k++] = num2[j++]
        }
    }

    while (j < num2.length) {
        merge[k++] = num2[j++]
    }

    while (i < num1.length) {
        merge[k++] = num1[i++]
    }
    return { merge, i, j, k }
}

console.log(merageingSortedArr(arr1, arr2));



// Q16 Best time to buy and sell stocks


let arr = [7, 1, 5, 3, 6, 4];

const stock = (num) => {
    let maxprofit = 0;
    let minvalue = num[0];

    for (let i = 0; i < num.length; i++) {
        if (num[i] < minvalue) {
            minvalue = num[i];
        }
        let profit = num[i] - minvalue;
        maxprofit = Math.max(maxprofit, profit)
    }
    return maxprofit
}
console.log(stock(arr));


// Q17 Sort the color


let arr = [0, 1, 0, 2, 0, 1, 0, 2, 2, 2, 0, 0, 1, 0];

const sortColor = (num) => {
    let i = 0;
    let j = 0;
    let k = num.length - 1;


    while (i <= k) {
        if (num[i] === 0) {
            [num[i], num[j]] = [num[j], num[i]];
            i++;
            j++;
        }
        else if (num[i] === 2) {
            [num[i], num[k]] = [num[k], num[i]];
            k--;
        }
        else {

            i++;
        }
    }
    return { num, i, j, k };
}

console.log(sortColor(arr));



// Q18 Maximum Subarray / kadane's algorithm


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maximumSubarray = (num) => {

    let sum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        maxSum = Math.max(maxSum, sum)
        if (sum < 0) {
            sum = 0
        }
    }
    return maxSum
}

console.log(maximumSubarray(arr));




// Q19 Majority Element/ Moore's voting algo


let arr = [2, 1, 5, 2, 2, 6, 2, 4, 5, 2, 1, 3, 2, 5];

const majorityElement = (num) => {
    let answer = num[0];
    let count = 1;

    for (let i = 1; i < num.length; i++) {
 
        if (count === 0) {
            answer = num[i];
            count = 1;
        } 
        else if (num[i] === answer) {
            count++;
        } 
       
        else {
            count--;
        }
    }
  
    return answer;
}
console.log(majorityElement(arr)); 






// Q20 Trapping Rain water
