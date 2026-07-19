// PROMISES VS SETTIMEOUT EXECUTION ORDER

// 1. Promises go into the "Microtask Queue" (High Priority).
// 2. setTimeout goes into the "Macrotask / Callback Queue" (Low Priority).

// Event Loop hamesha Macrotask se pehle saare Microtasks ko clear karta hai.
// Isiliye, zero-delay (0ms) setTimeout ke mukable Promise hamesha pehle chalega.

console.log("Start");

setTimeout(() => {
  console.log("Timeout (Macrotask)");
}, 0); 

Promise.resolve().then(() => {
  console.log("Promise (Microtask)");
});

console.log("End");

/*
Start
End
Promise (Microtask)
Timeout (Macrotask)
*/



// technical reason ye hai ki setTimeout browser ki Web API se ho kar Macrotask Queue me aata hai, jabki Promises JS Engine ke andar hi Microtask Queue me manage hote hain. Kyunki engine apne internal Microtasks ko priority deta hai, isiliye Promise hamesha setTimeout se pehle chalta hai.