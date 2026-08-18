// Difference between shallow copy and deep copy?

let user = {
    name: 'mark',
    age: 20,
    address: {
        country: 'india',
        home: {
            city: 'new Delhi', 
            pincode: 111008
        }
    }
};

// Shallow copy ---
// Top-level properties ko naye memory space mein copy karta hai, lekin nested objects ka reference (link) share karta hai. Isiliye nested level par changes original object mein bhi reflect hote hain.

// Method 1: Spread Operator (...)
let shallow1 = { ...user };

// Method 2: Object.assign()
let shallow2 = Object.assign({}, user);

// --- TOP-LEVEL CHANGE ---
shallow1.name = 'jack'; 
console.log(shallow1.name); // 'jack'
console.log(user.name);     // 'mark' (Original SAME rehta hai)

// --- NESTED LEVEL CHANGE (Shared Reference) ---
shallow1.address.country = 'USA'; 
console.log(shallow1.address.country); // 'USA'
console.log(user.address.country);     // 'USA' (Original BHI CHANGE ho gaya!)



// Deep copy ---
// Deep Copy ka matlab hota hai kisi Object ya Array ka ek aisa 100% independent clone (duplicate) banana, jisme top-level se lekar sabhi nested (andar ke) objects/arrays tak nayi memory allocate hoti hai.

// Method 1
let deepCopy = structuredClone(user);

// Nested property change
deepCopy.address.country = 'USA';

console.log(deepCopy.address.country); // 'USA'
console.log(user.address.country);// 'india'

// Method 2
let deepCopy2 = JSON.parse(JSON.stringify(user));

deepCopy2.address.country = 'UK';
console.log(user.address.country);



