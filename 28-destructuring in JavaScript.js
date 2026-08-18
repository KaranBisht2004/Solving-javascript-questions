// What is destructuring in JavaScript?

//Destructuring allows us to directly unpack values from arrays or objects and assign them into variables.

const user = {
    name : 'Drake',
    age : '20',
}
//without destructuring--
let name1 = user.name
let age1 = user.age
console.log(name ,age);

//Destructuring--
let {name , age} = user;
console.log(name ,age);

let lang = [ 'java' , 'c++' , 'c'];
const [a, b] = lang;

console.log(b);
