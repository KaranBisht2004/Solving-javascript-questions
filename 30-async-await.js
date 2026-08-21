// What is async/await?

//async/await Promises ko handle karne ka ek cleaner aur modern tarika hai, jisse asynchronous code synchronous code ki tarah readable ho jata hai aur error handling ke liye hum try-catch block use karte hain.

async function fetchData() {
    try {
        let response = await fetch("https://api.github.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();


async function moviesData() {
    try {
        let response = await fetch('https://www.apirequest.in/api/movie');
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.error("Error fetching data:", err.message);
    }
}
moviesData()



////////////////////////////////////////////////////////////////////////////

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

