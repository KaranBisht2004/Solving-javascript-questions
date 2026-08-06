//what is function currying
//ek function ek baar mai sirf EK argument leta hai aur ek naya function return karta hai, jab tak usko saare arguments na mil jayein.


//normal function
function add(a, b) {
    return a + b
}
console.log(add(5, 5));


//currying function
function add(a) {
    return function (b) {
        return a + b
    }
}
console.log(add(5)(5));


//1-Infinite Currying
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}
console.log(add(5)(5)(5)());


//2-Multi-argument Currying
function add(...a) {
 
  const sumA = a.reduce((acc, curr) => acc + curr, 0);

  return function (...b) {

    if (b.length > 0) {
      const sumB = b.reduce((acc, curr) => acc + curr, 0);
      return add(sumA + sumB); 
    }
    return sumA;
  };
}

console.log(add(1, 2)(3, 4)(5)()); // Output: 15



