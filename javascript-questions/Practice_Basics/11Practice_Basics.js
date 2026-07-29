//1. Reverse Words in a Sentence
//Input: "the sky is blue"
//Output: "blue is sky the"

let str = "the sky is blue"


const reversedWord = (word) => {

    let splitwords = word.split(' ');// phle hume words ko split kiya [the ,sky ,is ,blue]

    let i = 0;
    let j = splitwords.length - 1;//hum j liye 14

    while (i < j) {//this loop jb tak chalo jb i < j = 0<14
        [splitwords[i], splitwords[j]] = [splitwords[j], splitwords[i]]//swap kar do 
        j--
        i++
    }

    word = splitwords
    return word.join(' ');
}
console.log(reversedWord(str));

let str = "the sky is blue";
let reversword = str.split(' ').reverse().join(' ');
console.log(reversword);


//2. Find the Missing Number
// Input: [3, 0, 1]
// Output: 2

let input = [3, 0, 1];

const findMissingNumber = (nums) => {
    let n = nums.length// arr ki lenth nikali =3
    for (let i = 0; i <= n; i++) {//loop chalo 3tak 
        if (!nums.includes(i)) {//loop chale 0 se 3 tak jo num inculde nhi hai vo print kar de
            return `Missing Number ${i}`
        }
    }

}
console.log(findMissingNumber(input))


// //3. Chunk an Array
// Input: [1, 2, 3, 4, 5], size = 2
// Output: [[1, 2], [3, 4], [5]]

let arr = [1, 2, 3, 4, 5];
const chunkArray = (arr, size) => {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        let chunarr = arr.slice(i, i + size)
        result.push(chunarr)
    }
    return result
}
console.log(chunkArray(arr, 2));


// 4. Capitalize the First Letter of Each Word
// Input: "javascript is fun"
// Output: "Javascript Is Fun"

let input = "javascript is fun"

const capitalizetheFirstLetter = (str) => {
    let word = str.split(' ')//humne words ko split kiya ['javascript' , 'is' , 'fun']
    let result = [];

    for (let i = 0; i < word.length; i++) {// this loop for itretions
        let word = words[i];//word = words[i] javascript' , 'is' , 'fun' 
        let capitalize = word[0].toUpperCase() + word.slice(1).toLowerCase();
        //word[0] = javascript ka "j".toUpperCase() = J \\ word.slice(1).toLowerCase() 1index se leke sare word add kar do
        result.push(capitalize); //push in result
    }

    return result.join(' ')//thn join
}
console.log(capitalizetheFirstLetter(input));


//5. Find the First Non-Repeating Character
// Input: "swiss"
// Output: "w"
let word = "swiss";

const firstUniqueChar = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
};

console.log(firstUniqueChar(word));



// 6. Array Intersection
// Input: [1, 2, 2, 1], [2, 2, 3]
//Output: [2]

let arr = [1, 2, 2, 1];
let arr2 = [2, 2, 3];

const intersection = (arr1, arr2) => {

    let find = arr1.filter((num) => {

        return arr2.includes(num);
    });

    return [...new Set(find)];
};

console.log(intersection(arr, arr2));



//7. Move Zeroes to the End
// Input: [0, 1, 0, 3, 12]
//Output: [1, 3, 12, 0, 0]

let num = [0, 1, 0, 3, 12]
const moveZeroes = (nums) => {

    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
    return nums

}
console.log(moveZeroes(num));


//9. Check Balanced Parentheses
// .Input: "({[]})"
// Output: trueInput: "([)]" Output: false

let brackets = "({[]})"
const isBalanced = (str) => {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }
        else if (char === ")" || char === "}" || char === "]") {
            let lastOption = stack.pop(char)
        }

        if (lastOpening !== brackets[char]) {
            return false;
        }

    }
    return stack.length === 0;
}
console.log(isBalanced(brackets));


//10. Longest Word in a Sentence
//Input: "The quick brown fox jumped over the lazy dog"
//Output: "jumped"

let word = "The quick brown fox jumped over the lazy dog"
const findLongestWord = (sentence) => {
    let word = sentence.split(" ");
    let max = '';

    for (let i = 0; i < word.length; i++) {
        if (max.length < word[i].length) {
            max = word[i]
        }
    }
    return max
}
console.log(findLongestWord(word));
