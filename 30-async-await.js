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
