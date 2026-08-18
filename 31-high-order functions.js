// What is HOF

// Higher-Order Function (HOF) wo function hota hai jo argument ke roop mein ek function accept karta hai, ya fir ek function return karta hai.

function multiyplyBY2 (argu){//---------this hof
    return function(number){
        return argu * number
    }
}
let num = multiyplyBY2(5)(5)
console.log(num);


function greet(name,cd){//----------- this HOF
    console.log(`who are you what is your name?`);
    cd(name)
}

function replie(myname){//-----------> this Callback
    console.log(`hy! my name is ${myname}`);
}
greet('mark',replie)