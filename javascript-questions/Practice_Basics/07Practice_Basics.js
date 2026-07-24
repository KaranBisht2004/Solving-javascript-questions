// Q1.print each character on new line
let str = "karanBisht"

const printStr = (values) => {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}
printStr(str);



// Q2.print in reverse order
let str = "karan Bisht";

const printRevers = (str) => {

    let revers = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i]
    }
    return revers
}
console.log(printRevers(str));



//Q3.check if string is pallindrome or not

let str = "level";

const palindrome = (str) => {

    let j = str.length - 1;

    for (let i = 0; i < j; i++) {
        if (str[i] !== str[j]) {
            return 'This is NOT a palindrome';
        }
        j--;
    }

    return 'This IS a palindrome';
}
console.log(palindrome(str));



//Q4.Toggle each character
let str = "AbCdEfG";

const toggleEach = (str) => {
    let toggle = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i); 

        if (code >= 65 && code <= 90) {
            toggle += String.fromCharCode(code + 32); 
        } 
        else if (code >= 97 && code <= 122) {
            toggle += String.fromCharCode(code - 32); 
        } 
        else {
            toggle += str[i]; 
        }
    }
    return toggle;
}

console.log(toggleEach(str)); 


//Q5.frequency of each character
let str = ("hellooe")

const frequencyofEachCharacter = (str) => {

    let obj = {}
    for(let i = 0; i< str.length ; i++){
        
        if(!obj[str[i]]){
            obj[str[i]] = 1
        }
        else{
            obj[str[i]] ++
        }
    }
    return obj
} 
console.log(frequencyofEachCharacter(str));
