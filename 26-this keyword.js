// What is this keyword?

//In JavaScript, this is a keyword that refers to an object, but WHICH object it refers to depends on HOW and WHERE the function is called

console.log(this) // window 

function fnc() {
    console.log(this);
}
fnc()//window

let fnc2 = ()=> {
    console.log(this);
}
fnc2()//window

let obj1 = {
    name: 'mark',
    greet: function(){
        console.log(`hello ${this.name}`);
    }
}
obj1.greet()//hello mark


let obj2 = {
    name: 'mark',
    greet: ()=>{
        console.log(`hello ${this.name}`);
    }
}
obj2.greet()//hello Undefind

// Global Scope:
// this ki value global scope mai window hoti hai

// Function:
// function mai bhi window hoti hai 

// Method:
// method mai object hota hai 

// Event Handler:
// event handler mai this humesha woh hoga jis pe addEventListener laga hai

// new:
// this ki value blank {} hoti hai jab aap usse new ke sath call karte ho