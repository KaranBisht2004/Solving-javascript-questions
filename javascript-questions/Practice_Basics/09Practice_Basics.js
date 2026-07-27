// object--

const { use } = require("react");

const user = {
    name: ' karan',
    age: '21',
    'home-Town': 'uk'
}


// accessing object properties
console.log(user);//{ name: ' karan', age: '21' }
console.log(user.name);// karan



// changing object properties
user.name = "aman"
console.log(user)//{ name: 'aman', age: '21' }



// deleting object properties
delete user.age;
console.log(user);//{ name: 'aman' }



// adding new proerties to object with space
user["school name"] = "salwan boys"
console.log(user);//{ name: 'aman', 'school name': 'salwan boys' }



// accessing object properties with square bracket notation
console.log(user["school name"]);//salwan boys
console.log(user['home-Town']);//uk



// Dynamic property names in object
let property = "firstName"
let name = "karan"
const user2 = {
    [property]: name
}
console.log(user2);//{ firstName: 'karan' }


// Q1 loop in object
const user3 = {
    name: 'karan',
    age: 21,
    address: 'delhi',
}

for (const key in user3) {
    console.log(key);//name , age , address
}

for (const key in user3) {
    console.log(user3[key]);//karan , 21 , delhi
}

for (const key in user3) {
    console.log(`${key} : ${user3[key]}`);//{name : karan ,age : 21, address : delhi}
}


// Q2 multiply keys
const obj = {
    a: 100,
    b: 200,
    myName: {
        fisname: 'karan'
    }
}

function multiply(value) {
    for (const key in value) {
        if (typeof  value[key] === 'number') {
            console.log(value[key] *= 100);
        }
    }
}
multiply(obj)

console.log(obj);


//Q3 output of below code
const a = {}
const b = {key: "b"}
const c = {key : "c"}
a[b] = 120;
a[c] = 85

console.log(a[b]);// 85


//Q4 what is json.parse and json.stringify

// JSON.stringify() is use to object convert into string
const user = {
    name : "karan",
    age : 21
}
let a = JSON.stringify(user)
console.log( a)
console.log(typeof a)//String

// JSON.parse() is use to JSON string convert  into object.
let b = JSON.parse(a)
console.log(b);
console.log(typeof b) //Object



//Q5 spread operator in object
const user = {name: "karan" , age:21};
const admin = {admin : true , ...user}

console.log(admin);



//Q6 object destructuring
const user = {
    name: "karan",
    age: 21,
    address: "delhi"
}

const {name , age , address} = user
console.log(name);//karan
console.log(age);//21
console.log(address);//delhi


//Q7 THIS in obj
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
};
console.log(shape.diameter());//20
console.log(shape.perimeter());//NaN

//Q8
let person = {name: "karan",}
const member = [person]
person = null
console.log(member);



let createHelloWorld = (arg) => {
    return arg
}
console.log(createHelloWorld("Hello World"))