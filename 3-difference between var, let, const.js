// What is the difference between var, let, and const?
 


//"var is function-scoped. It can be both reassigned and redeclared."

//"let is block-scoped. It can be reassigned, but not redeclared in the same scope."

//"const is block-scoped and used for constant values. It can neither be reassigned nor redeclared."


var a = 'Variable Declared';
a = 'variable re-Assigned'
var a = 'Variable re-Declared';


let a = 'Variable Declared';
a = 'variable re-Assigned'
// let a = 'Variable re-Declared'; 
console.log(a)
{
  let a = "hello"
  console.log(a)
}


const a = 'Variable Declared';
//a = 'variable re-Assigned'
// const a = 'Variable re-Declared'; 
console.log(a)
{
  const a = "hello"
  console.log(a)
}


// var is function scope and it can be both reassinge and redecler but let and const is blocked scope
// let can be reassing but not redecler and const use of constant value it can neiter be reassinge and redcler