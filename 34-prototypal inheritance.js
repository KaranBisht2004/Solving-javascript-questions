// How does prototypal inheritance work?

// Prototypal Inheritance ka matlab hai ki JS mein har object ke paas ek hidden internal property hoti hai jise Prototype kehte hain.

// Jab bhi hum kisi object ki property ya method ko access karte hain, toh JS engine pehle use local object mein dhoondhta hai. Agar wahan nahi milta, toh wo prototype chain ke dwara parent object mein search karta hai.

// Isi mechanism ka use karke ek object dusre object ki properties aur methods ko inherit/access kar sakta hai.

const parent1 = {
  message1: "Hello from parent1",
}

const parent2 = {
  message2: "Hello from parent2",
  __proto__: parent1, 
}

const parent3 = {
  message3: "Hello from parent3",
  __proto__: parent2, 
}

console.log(parent3.message1);

