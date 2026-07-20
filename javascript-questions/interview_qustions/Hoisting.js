// what is Hoisting

// JavaScript mein code execute hone se pehle ek memory allocation phase hota hai. Is phase mein JS engine saare variable aur function declarations ko unke scope mein sabse upar (top par) shift kar deta hai. Isi internal behavior ko hum Hoisting kehte hain.



const members = [20, 50, 10, 12, 18, 30]
const promembers = members.map(age => age > 18)
console.log(promembers);

const multy2 = members.map(item => item * 2)
console.log(multy2);

const obj1 = { name: 'a', age: 'b' };
const obj2 = { lastname: 'c', hobby: 'd' };
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const sum = (...num) => {
    let sum = 0;
    for (const i of num) {
        sum += i
    }
    return sum

}
console.log(sum(20, 10, 10, 10));


const hello = () =>{
    return {b:1}
}
console.log(hello());
