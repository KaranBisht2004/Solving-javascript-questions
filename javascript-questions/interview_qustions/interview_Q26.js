console.log(a);//undefined
console.log(b);// b is not defined
var a = b = 200


// a ka output undefined aayega: Kyunki var a ki Hoisting ho jayegi. Engine ko pata hoga ki a exist karta hai, par assignment se pehle print karne par uski value undefined hogi.

// b par ( b is not defined) aayega: Kyunki var a = b = 200 likhne se b ke aage koi keyword (var/let/const) nahi hai, toh wo hoist nahi hoga. Line 2 par aate hi engine b ko pehchan nahi payega aur code crash ho jayega.