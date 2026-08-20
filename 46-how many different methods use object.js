// In JavaScript, how many different methods can you make an object?

// 1- Normal Object
const user = {name: 'mark', age: 21};
console.log(user);

// 2- Constructor Function
function userDetils(name, age, email){
  this.name = name;
  this.age = age;
  this.email = email
}

const user1 = new userDetils('mark', 30, 'Meta')
console.log(user1);

// 3- ES6 class Syntax
class UserRole {
  constructor(id, role, department, level, project) {
    this.id = id;
    this.role = role;
    this.department = department;
    this.level = level;
    this.project = project;
  }
}

const role2 = new UserRole(101, 'Frontend Developer', 'Tech', 'Senior', 'Google');
console.log(role1);

// 4-Object.create() Method
const userProto = {
  greet(){
    console.log(`Hello ${this.name}`);
  }
}
const userGreet = Object.create(userProto) 
userProto.name = 'Mark';
console.log(userGreet.greet());

// 5-Object Constructor
const usernew = new Object();
usernew.name = "Karan";
usernew.role = "Developer";
console.log(usernew);

// 6-Object Destructuring / Spread Operator (...)
const baseUser = { name: "Karan" };
const extraInfo = { role: "Developer" };

const users = { ...baseUser, ...extraInfo };