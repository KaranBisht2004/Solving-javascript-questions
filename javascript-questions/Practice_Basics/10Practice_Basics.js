let abc = "karan"
abc[2] = "bisht"
console.log(abc);

//The string doesn't change because strings in JavaScript are immutable.

let a = 100;
let z = a++;
console.log(z);//100

console.log(a+z);//201



let str = "my name is karan";

const revers = (name) => {
    let strname = name.split(" ");

    for (let i = 0; i < strname.length; i++) {
        let currentWord = strname[i];
        let reversedWord = "";

      
        for (let j = currentWord.length - 1; j >= 0; j--) {
            reversedWord += currentWord[j];
        }

       
        strname[i] = reversedWord;
    }

    return strname.join(" "); 
};

console.log(revers(str)); 

