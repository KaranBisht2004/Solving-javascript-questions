// difference between every and set?


//Every()----------------------------------------------
/*Ye tabhi true dega jab array ke saare ke saare (ALL) elements condition ko satisfy karenge. Agar ek bhi element fail hua, toh ye false de dega.
ALL or NOTHING
*/

const ages = [20, 25, 18, 30];
const allAdults = ages.every(age => age >= 18); 
console.log(allAdults); // true 


//Some()------------------------------------------------------------
/*Ye tabhi true de dega jab array me se kam se kam ek (AT LEAST ONE) element condition ko pass kar dega. Isko sabse matlab nahi hai, bas ek mil gaya toh khush!*/

const ages = [12, 15, 17, 21];
const someAdults = ages.some(age => age >= 18); 
console.log(someAdults); // true 



// every(): Jab Saare (All) elements condition match karenge, tabhi true aayega.

// some(): Jab Koi ek bhi (At least one) element condition match kar gaya, toh true aa jayega.
