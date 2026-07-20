//difference between synchronous and asynchronous 

// Synchronous
// Jo kaam ek ke baad ek ho raha ho aur jab tak pehle wala kaam khatm nahi hota, tab tak dusra start nahi hota, kyunki JavaScript ek single-threaded language hai.

// Asynchronous
// Jo ek ke baad ek na ho, balki jis kaam mein time lag raha hai (jaise setTimeout, API fetch), JS usse Web API mein bhej deta hai aur wo kaam background mein chalta rehta hai. Jab wo complete ho jata hai, toh Event Loop usse Call Stack mein bhej deta hai.



// JavaScript by default ek synchronous aur single-threaded language hai. Lekin browser ki Web APIs aur Event Loop ki madad se yeh asynchronous behavior show karti hai."