 // Difference B/W FOR...IN AND FOR...OF LOOPS
 

// 1. FOR...IN LOOP (Best for Objects `{}`)

// Yeh loop kisi array ka index (0, 1, 2) ya kisi object ki keys nikal ke deta hai.

//  Example with Object:
const developer = {
    name: "Karan",
    role: "Frontend Developer",
    city: "Delhi"
};

for (const key in developer) {
    console.log(key); // Output: name, role, city (Keys mili)
    console.log(developer[key]); // Output: Karan, Frontend Developer, Delhi (Values mili)
}

//  Example with Array:
const tools = ["Figma", "React", "Node"];
for (const index in tools) {
    console.log(index); // Output: 0, 1, 2 )
}



// 2. FOR...OF LOOP (Best for Arrays `[]` / Iterables)

//  Example with Array:
const projects = ["Crack It", "StudyFocus", "SITHUB"];

for (const project of projects) {
    console.log(project); // Output: Crack It, StudyFocus, SITHUB (Direct values)
}


/*
for in - for in loop hum jadtar obj per use karte hai but hum usse arr ke index pe nikal skte hai
for of - for of loop hum bs arr srt pe use kar te hai
*/


