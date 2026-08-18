// What is a Set, Map, weakSet, weak Map?

// 1- Set = it contains unique values

let myarray = [1, 2, 3, 4, 5, 5, 5, 4, 6, 10];
let obj = new Set(myarray);
console.log(`Set:`, obj);

// Adding a value to the set
obj.add(100);
console.log(`Set after adding 100:`, obj);

// Deleting a value from the set
obj.delete(6);
console.log(`Set after deleting 6:`, obj);

// Checking if a value is present in the set
obj.has(5) ? console.log(`5 is present in the set`) : console.log(`5 is not present in the set`);

// Clearing the set
obj.clear();
console.log(`Set after clearing:`, obj);




// 2- Map = it contains key-value pairs and duplicate keys are not allowed

let myMap = new Map(
  [
    ['USA', 'United States of America'],
    ['Fn', 'France'],
    ['In', 'India'],
    ['In', 'India'],
    ['Ch', 'China'],
    ['Gr', 'Germany'],
    ['Jp', 'Japan']
  ]
);
console.log(myMap);

myMap.set('USA', 'United States of America is SuperPowerful'); // Updating the value of USA
console.log(myMap);

myMap.set('Sp', 'Spain'); // Adding a new key-value pair
console.log(myMap);

console.log(myMap.get('Fn')); // Getting the value of Fn

myMap.delete('Ch'); // Deleting a key-value pair
console.log(myMap);

for (let [key, value] of myMap) {//looping
  console.log(`Country code: ${key}, Country: ${value}`);
}

myMap.clear(); // Clearing the map
console.log(myMap);



// 3- weakSet = it contains unique values and it is not iterable

let weakSet1 = new WeakSet();
let obj1 = { 
  Zomato: 'Deepinder Goyal',
  Cred: 'Kunal Shah',
  Swiggy: 'Sriharsha Majety',
  Grow: 'Sanjay Nath',
};

weakSet1.add(obj1);// Adding an object to the weakSet
console.log(weakSet1); 

weakSet1.has(obj1) ? console.log(`obj1 is present in the weakSet`) : console.log(`obj1 is not present in the weakSet`); // Checking if an object is present in the weakSet

weakSet1.delete(obj1); // Deleting an object from the weakSet
console.log(weakSet1);


  // 4- weakMap = it contains key-value pairs and duplicate keys are not allowed and it is not iterable

let weakMap1 = new WeakMap([
  [ChatGPT, 'Sam Altman'],
  [Claude, 'Dario Amodei'],
  [DeepMind, 'Demis Hassabis'],
  [DeepSeek, 'Liang Wenfeng'],
]);

weakMap1.set(ChatGPT, 'Sam Altman is the CEO of OpenAI'); // Updating the value of ChatGPT
console.log(weakMap1);

weakMap1.set(Codex, 'Codex is the CEO of OpenAI'); // Adding the value of Codex

weakMap1.has(Codex) ? console.log(`Codex is present in the weakMap`) : console.log(`Codex is not present in the weakMap`); // Checking if an object is present in the weakMap

weakMap1.delete(Codex);  // Deleting an object from the weakMap
console.log(weakMap1);

weakMap1.clear(); // Clearing the weakMap
console.log(weakMap1);