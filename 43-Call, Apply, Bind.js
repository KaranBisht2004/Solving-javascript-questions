// Difference between call(), apply(), and bind()?

//Yeh teeno JavaScript this keyword ki value ko manually control karne ke liye use hote hain.

//call
// 1.call main Arguments COMA (,) se separated hota hai, Function TURENT RUN hota hai.
let obj = {
  name: "karan",
  age: 20,
}
function abcd(city, country) {
  console.log(`${this.name} is ${this.age} years old from ${city}, ${country}.`)
}

abcd.call(obj , "Delhi", "India")


//apply
// 2.apply(): Arguments ARRAY [] me pass hote hain. Function TURENT RUN hota hai.
abcd.apply(obj, ["Delhi", "India"])


// bind
// 3.bind(): Function ko TURENT RUN NAHI KARTA, balki ek NAYA FUNCTION RETURN karta hai.
// Isko aap baad me kabhi bhi call kar sakte ho.

const newfunc = abcd.bind(obj , "Delhi" , "India")
newfunc();
