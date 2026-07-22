const str = "My name is karan Bisht";

const findLongestWord = (str) => {

let words = str.split(" ");
let wordONE = words[0]

for(let i = 0 ; i<words.length ; i++){
if(wordONE.length < words[i].length)
    wordONE = words[i]
}
return wordONE
}
console.log(findLongestWord(str));