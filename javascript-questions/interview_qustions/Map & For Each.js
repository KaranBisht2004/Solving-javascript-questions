// Different B/W Foreach & Map


// 1. Return Value

// .map(): Yeh hamesha loop chalane ke baad ek naya array return karta hai.

// .forEach(): Yeh kuch bhi return nahi karta (iska output undefined hota hai). 





// 2. Ability to Chain 

// .map(): Kyunki yeh ek naya array return karta hai, isliye aap .map() ke  baad doosre array methods jaise .filter() ya .reduce() 

// .forEach(): Isme chaining nahi ho sakti kyunki yeh undefined return






// 3. Use Case 

// .map()  Jab aapko purane array ka data badal kar (transform karke) ek naya array banana ho. (Jaise React mein list render karte waqt).

// .forEach()  Jab aapko naya array nahi banana, bas har item par koi action karna ho — jaise 
// console.log() karna, ya DOM me kuch update karna.





// 4. Performance (Speed)

// .map() thoda fast hota hai 

// .forEach() thoda sa slow ho sakta hai 