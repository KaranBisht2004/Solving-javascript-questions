// what is function curring?

// "Currying ka matlab hai ek multi-argument function ko nested single-argument functions mein convert karna, jo closures ki madad se pichle values ko yaad rakhta hai."

// function currying
function add(x) {
  return function (y) {
    return x + y;
  }
}
console.log(add(5)(5))

// arrow function currying
const add2 = (a) => (b) => a + b;
console.log(add2(5)(5));


//Infinite Currying Code

function addInfinite (a){
  return function(b){
    if(b !== undefined){
      return addInfinite(a+b);
    }
    return a
  }
}
console.log(addInfinite(5)(5)(2)());
