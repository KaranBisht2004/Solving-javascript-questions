// what is Closures

// Closure JavaScript ka ek aisa feature hai jahan ek inner function ko apne 
// outer (parent) function ke scope (lexical Enviroment mai hota hai) aur variables ka access humesha rehta hai, 
// bhale hi outer function execute hokar memory se khatam (return) kyu na ho chuka ho!




function outerFunction() {
    let parentName = "Karan"; // Outer scope variable

    function innerFunction() {
        // Inner function parent ke variable ko access kar raha hai
        console.log("Hello " + parentName); 
    }

    return innerFunction; // Inner function ko return kar diya
}

const myClosure = outerFunction(); 
myClosure(); // Output: Hello Karan

