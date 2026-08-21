// What is a promise in JavaScript?

// Promise is used for asynchronous tasks and to avoid callback hell.
// A promise has 3 states: 1 - Pending, 2 - Fulfilled, 3 - Rejected.
// Promise ka response handle karne ke liye hum .then() (success), .catch() (error), aur .finally() ka use karte hain.

let order = new Promise((resolve, reject) => {
    let isFoodReady = false;

    setTimeout(() => {
        isFoodReady
            ? resolve("Your food is ready")
            : reject("Your food is not ready");
    }, 1000);
});

order
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });


let number = new Promise((res, rej) => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
        res(`your number bigger then 5 => ${randomNumber}`)
    }
    else {
        rej(`your number smaller then 5 => ${randomNumber}`)
    }
})

// number.then((res)=> {// this promise 
// console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


async function abcd() { // this async await 
    try {
        let value = await number;
        console.log(value);
    } catch (err) {
        console.log(err);
    }
}

abcd()