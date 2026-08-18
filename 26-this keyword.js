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