// How does prototypal inheritance work?

//JavaScript mein har object ke paas ek hidden [[Prototype]] reference hota hai. Jab hum kisi variable ya method ko access karte hain aur wo local object par nahi milta, toh JS engine use Prototype Chain follow karke parent object se dhoondta hai. Isi ko Prototypal Inheritance kehte hain.


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

