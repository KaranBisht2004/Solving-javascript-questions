// Different B/w Spread Operator and Rest Operator


// 1. Spread Operator 
// Maan lo tumhare paas ek  (array) hai aur tum uske andar ke saare elements ko khol kar bahar nikalna chahte ho ya kisi naye dabbe mein daalna chahte ho.

let basicSkills = ['HTML', 'CSS'];
let advanceSkills = ['React', 'Node'];
let mySkills = [...basicSkills, ...advanceSkills]; 
console.log(mySkills); 
// Output: ['HTML', 'CSS', 'React', 'Node']


// Object 

let project = { name: 'Crack It', status: 'Pending' };
let updatedProject = {...project,status: "Complete"}
console.log(updatedProject); 
// Output: { name: 'Crack It', status: 'Complete' }




// 2. Rest Operator 
// Yeh tab kaam aata hai jab tumhare paas bohot saara bikhra hua data aa raha ho (jaise function ke arguments) aur tum un sabko samet kar ek single array mein band karna chahte ho.


const sum = (...a) => {
   let sum = 0;
   for(const item of a){
    sum += item
   }
   return sum
}
consolelog(sum(5,5,5,5,5,5))


const sumAll = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(10, 20));     
console.log(sumAll(5, 10, 15));


// Example 2: Destructuring mein (Bacha-kucha maal sametna)
let scores = [95, 88, 70, 60, 50];


let [gold, silver, ...restScores] = scores;

console.log(gold);       // Output: 95
console.log(silver);     // Output: 88
console.log(restScores); // Output: [70, 60, 50] 


console.log(NaN === NaN);// why false
